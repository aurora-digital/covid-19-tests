import os
import pdfplumber
import pandas as pd
from datetime import datetime
import urllib.request as request
from geopy.geocoders import GoogleV3

GOOGLE_KEY = os.environ.get('GOOGLE_KEY')
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

        coordinates = []
        for address in df["address"]:
            try:
                location = geolocator.geocode(address, timeout=10)
                coordinates.append((location.latitude, location.longitude))
            except Exception as e:
                print('Error, skipping address...', e)
                coordinates.append(())

        df["coords"] = coordinates
        # lat, lng = map(list, zip(*coordinates))


        dfs.append(df)

    labs = pd.concat(dfs, ignore_index=True)

    return labs.to_dict("records")


def visual_debug(img):
    img.reset().debug_tablefinder(table_settings)
