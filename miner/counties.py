from tabula.io import read_pdf
import pandas as pd
import re


class County:
    def __init__(self):
        result = pd.concat([
            self.getCounties(), self.getHouseholds(),
            self.getPopulationDensity(),
            self.getCountyCodes()
        ], axis=1)
        self.data = result

    def getCounties(self):
        file = "VOLUME-1-KPHC-2019.pdf"

        # TABLE ONE
        table = read_pdf(file, pages=17)

        # Rename columns and remove unused columns
        raw = table[0].rename(
            columns={
                'Unnamed: 0': 'Male',
                'Unnamed: 1': 'B',
                'Sex': 'Female',
                'Unnamed: 2': 'Intersex',
                'Unnamed: 3': 'Total'
            }
        )
        df = raw.drop(0).drop(1).drop(2).drop(3).drop(columns="B")

        counties = []
        male = []
        female = []
        intersex = []
        total = []
        # Separate county and male values
        for item in df['Male'].array:
            matches = re.sub(r'\.', "", item)
            county_name = re.sub(r'\d', "", matches)
            raw_male_value = re.sub(r'[a-zA-Z]', "", matches)
            male_value = re.sub(r'[\,\/\-\']', "", raw_male_value)
            counties.append(re.sub(r'\,', "", county_name))
            male.append(male_value)

        for item in df['Female'].array:
            female_value = re.sub(r'[\,\/\-\']', "", item)
            female.append(female_value)

        for item in df['Intersex'].array:
            intersex.append(item)

        for item in df['Total'].array:
            total_value = re.sub(r'[\,\/\-\']', "", item)
            total.append(total_value)

        d = {
            'County': counties,
            'Male': male,
            'Female': female,
            'Intersex': intersex,
            'Total': total
        }
        final = pd.DataFrame(data=d)
        return final

    def getHouseholds(self):
        file = "VOLUME-1-KPHC-2019.pdf"
        table = read_pdf(file, pages=19, area=[
            100.8125, 0.6425, 1000.2825, 1000.1025])
        raw = table[0].drop(0).drop(
            columns="National/ County  Population+"
        ).drop(1).drop(2).drop(50).drop(51).drop(52).drop(53)
        df = raw.rename(
            columns={
                'Number of': 'households',
                'Average': 'average_households'
            }
        )

        households = []
        avg = []
        for item in df['households'].array:
            value = re.sub(r'[\,\/\-\']', "", item)
            households.append(value)
        for item in df['average_households'].array:
            avg.append(item)

        d = {'Households': households, 'Average-Households': avg}
        final = pd.DataFrame(data=d)
        return final

    def getPopulationDensity(self):
        file = "VOLUME-1-KPHC-2019.pdf"
        table = read_pdf(file, pages=20, area=[
            100.8125, 0.6425, 1000.2825, 1000.1025])
        df1 = table[0].drop(0).drop(1).drop(49).drop(50).drop(51).drop(columns="Unnamed: 0").drop(
            columns="Unnamed: 1").drop(columns="Unnamed: 2").drop(columns="Unnamed: 3").drop(columns="Unnamed: 4")
        df2 = df1.rename(
            columns={'(Sq. Km)': 'land_area', '(No. per Sq. Km)': 'density'})

        land_area = []
        density = []
        for item in df2['land_area'].array:
            value = re.sub(r'[\,\/\-\']', "", item)
            land_area.append(value)
        for item in df2['density'].array:
            value = re.sub(r'[\,\/\-\']', "", item)
            density.append(value)

        d = {'land_area': land_area, 'density': density}
        final = pd.DataFrame(data=d)
        return final

    def getCountyCodes(self):
        data = self.getCounties()

        code = []
        for idx, item in enumerate(data['County'].array):
            code.append(idx + 1)

        result = pd.DataFrame(data={'code': code})
        return result
