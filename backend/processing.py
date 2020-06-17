import pdfplumber
import pandas as pd
from datetime import datetime
import urllib.request as request

table_settings = {
    "intersection_x_tolerance": 1,
}

columns = ["ars", "aces", "name", "address", "phone", "email",
           "schedule", "reservation", "presencial", "drive", "domicile"]


def update_file():
    today = datetime.today()
    url = f"https://covid19.min-saude.pt/wp-content/uploads/{today.strftime('%Y')}/{today.strftime('%m')}/{today.strftime('%Y%m%d')}_LAB.REFERENCIADOS.pdf"
    request.urlretrieve(url, "data/labs.pdf")


def get_data():
    pdf = pdfplumber.open("data/labs.pdf")

    dfs = []

    for page in pdf.pages:
        table = page.extract_table(table_settings)

        df = pd.DataFrame(table[1:], columns=columns)

        for c in columns:
            df[c] = df[c].str.replace("\n", "")
            df[c] = df[c].str.replace("---", "")

        df["name"] = df["name"].str.replace(
            "Posto de Colheita Laboratorial Covid-19", "")

        dfs.append(df)

    labs = pd.concat(dfs, ignore_index=True)

    return labs.to_dict('records')


def visual_debug(img):
    img.reset().debug_tablefinder(table_settings)
