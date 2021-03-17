from tabula.io import read_pdf
import pandas as pd
import re


def getPopulation():

    file = "VOLUME-1-KPHC-2019.pdf"

    raw = read_pdf(file, pages=[22, 23, 24, 25, 26, 27, 2, 29, 30], area=[
        100.8125, 0.6425, 1000.2825, 1000.1025
    ])

    table1 = raw[1].dropna(
        subset=['National/ County']
    ).drop(columns='Unnamed: 0').drop(2).drop(3)

    import pdb
    pdb.set_trace()

    # table2 = read_pdf(file, pages=23)
    # table3 = read_pdf(file, pages=24)

    # tables = [table1, table2, table3]


getPopulation()
