import os
import pdfplumber
import pandas as pd
from datetime import datetime
import urllib.request as request
from geopy.geocoders import GoogleV3
from googletrans import Translator

GOOGLE_KEY = os.environ.get("GOOGLE_KEY")
if not GOOGLE_KEY:
    print("GOOGLE_KEY NOT FOUND")

table_settings = {
    "intersection_x_tolerance": 1,
}

columns = [
    "ars",
    "aces",
    "name",
    "address",
    "phone",
    "email",
    "schedule",
    "reservation",
    "presencial",
    "drive",
    "domicile",
]


def update_file():
    today = datetime.today()
    url = f"https://covid19.min-saude.pt/wp-content/uploads/{today.strftime('%Y')}/{today.strftime('%m')}/{today.strftime('%Y%m%d')}_LAB.REFERENCIADOS.pdf"
    print(url)
    request.urlretrieve(url, "data/labs.pdf")


def get_data():
    geolocator = GoogleV3(api_key=GOOGLE_KEY)
    translator = Translator()
    pdf = pdfplumber.open("data/labs.pdf")

    dfs = []

    for page in pdf.pages:
        table = page.extract_table(table_settings)

        df = pd.DataFrame(table[1:], columns=columns)

        for c in columns:
            df[c] = df[c].str.replace("\n", "")
            df[c] = df[c].str.replace("---", "")

        df["name"] = df["name"].str.replace(
            "Posto de Colheita Laboratorial Covid-19", ""
        )

        schedule_en = []
        for sch in df["schedule"]:
            translation = translator.translate(sch, src="pt", dest="en")
            schedule_en.append(translation.text)

        df["schedule_en"] = schedule_en

        coordinates = []
        for address in df["address"]:
            try:
                location = geolocator.geocode(
                    address, components={"country": "PT"}, timeout=10
                )
                coordinates.append((location.latitude, location.longitude))
            except Exception as e:
                print("Error, skipping address...", e)
                coordinates.append(())

        df["coords"] = coordinates
        # lat, lng = map(list, zip(*coordinates))

        dfs.append(df)

    labs_df = pd.concat(dfs, ignore_index=True)
    labs = labs_df.to_dict("records")

    today = datetime.today()
    updated = today.strftime("%m/%d/%Y")

    labs.insert(0,{'updated': updated })

    return labs

def visual_debug(img):
    img.reset().debug_tablefinder(table_settings)
