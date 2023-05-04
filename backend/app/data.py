import pandas as pd
from sodapy import Socrata

import requests
from datetime import datetime, timedelta
from cachetools import cached, TTLCache

# Unauthenticated client only works with public data sets. Note 'None'
# in place of application token, and no username or password:
client = Socrata("data.cityofnewyork.us", None)

# Example authenticated client (needed for non-public datasets):
# client = Socrata(data.cityofnewyork.us,
#                  MyAppToken,
#                  username="user@example.com",
#                  password="AFakePassword")

# First 2000 results, returned as JSON from API / converted to Python list of
# dictionaries by sodapy.
# results = client.get("h9gi-nx95", limit=2000)
cyclists_injured = "number_of_cyclist_injured>0 OR number_of_cyclist_killed>0"
pedestrians_injured = (
    "number_of_pedestrians_injured>0 OR number_of_pedestrians_killed>0"
)

# only return crashes where at least one cyclist or pedestrian was injured or killed
all_records_with_injury = cyclists_injured + " OR " + pedestrians_injured

cache = TTLCache(maxsize=1, ttl=86400)


@cached(cache)
def get_api_data():
    print("getting updated data")

    results = client.get("h9gi-nx95", limit=500000, where=all_records_with_injury)
    results_df = pd.DataFrame.from_records(results)
    print("results updated")
    return results_df


def get_data():
    results_df = get_api_data()
    print("get data called")
    return results_df


# results = client.get("h9gi-nx95", limit=500000, where=all_records_with_injury)
# results = client.get("h9gi-nx95", limit=20)

# Convert to pandas DataFrame
results_df = get_data()
pd.set_option("display.max_rows", None)
pd.set_option("display.max_columns", None)
column_names = results_df.columns.tolist()
print(column_names)
# print(results)
sum_cyclist_injuries = results_df["number_of_cyclist_injured"].astype(int).sum()
sum_cyclist_deaths = results_df["number_of_cyclist_killed"].astype(int).sum()
sum_pedestrian_injuries = results_df["number_of_pedestrians_injured"].astype(int).sum()
sum_pedestrian_deaths = results_df["number_of_pedestrians_killed"].astype(int).sum()
print(
    "total cyclist injuries: ",
    sum_cyclist_injuries,
    " total cyclist deaths: ",
    sum_cyclist_deaths,
    " total pedestrian injuries: ",
    sum_pedestrian_injuries,
    " total pedestrian deaths: ",
    sum_pedestrian_deaths,
)
# print(results_df.dtypes)
# print(results_df.crash_date)

# make current date
today = datetime.today()
date_cutoff = (today - timedelta(days=365)).strftime("%Y-%m-%d")
print(date_cutoff)
print("today: ", today.strftime("%Y-%m-%d"))
this_year_df = results_df[
    (results_df["crash_date"] >= "2023-01-01")
    & (results_df["crash_date"] < today.strftime("%Y-%m-%d"))
]
last_year_df = results_df[
    (results_df["crash_date"] >= "2022-01-01")
    & (results_df["crash_date"] < date_cutoff)
]

sum_this_year_cyclist_injuries = (
    this_year_df["number_of_cyclist_injured"].astype(int).sum()
)
sum_this_year_cyclist_deaths = (
    this_year_df["number_of_cyclist_killed"].astype(int).sum()
)
sum_this_year_pedestrian_injuries = (
    this_year_df["number_of_pedestrians_injured"].astype(int).sum()
)
sum_this_year_pedestrain_deaths = (
    this_year_df["number_of_pedestrians_killed"].astype(int).sum()
)
sum_last_year_cyclist_injuries = (
    last_year_df["number_of_cyclist_injured"].astype(int).sum()
)
sum_last_year_cyclist_deaths = (
    last_year_df["number_of_cyclist_killed"].astype(int).sum()
)
sum_last_year_pedestrian_injuries = (
    last_year_df["number_of_pedestrians_injured"].astype(int).sum()
)
sum_last_year_pedestrian_deaths = (
    last_year_df["number_of_pedestrians_killed"].astype(int).sum()
)
print(
    "there were ",
    sum_last_year_cyclist_injuries,
    " cyclist injuries by this time last year and ",
    sum_last_year_cyclist_deaths,
    " cyclist deaths by this time last year",
)


# num_results_2023 = len(df_2023.index)
# print(f"{num_results_2023} results occurred in 2023")
# df_2022 = results_df[results_df["crash_date"].str.contains("2022")]
# num_results_2022 = len(df_2022.index)
# print(f"{num_results_2022} results occurred in 2022")

data_object = {
    "counterData": {
        "ytdCyclistInjuries": str(sum_this_year_cyclist_injuries),
        "ytdCyclistDeaths": str(sum_this_year_cyclist_deaths),
        "ytdPedestrianInjuries": str(sum_this_year_pedestrian_injuries),
        "ytdPedestrianDeaths": str(sum_this_year_pedestrain_deaths),
        "lastYtdCyclistInjuries": str(sum_last_year_cyclist_injuries),
        "lastYtdCyclistDeaths": str(sum_last_year_cyclist_deaths),
        "lastYtdPedestrianInjuries": str(sum_last_year_pedestrian_injuries),
        "lastYtdPedestrianDeaths": str(sum_last_year_pedestrian_deaths),
    },
}
print(data_object)
# data = {
#     "counterData": {
#         "ytdCyclistInjuries": year_to_date_cyclist_injuries,
#         "ytdCyclistDeaths": year_to_date_cyclist_deaths,
#         "ytdPedestrianInjuries": year_to_date_pedestrian_injuries,
#         "ytdPedestrianDeaths": year_to_date_pedestrian_deaths,
#     },
#     "yearlyData": {
#         "yearlyCyclistTotals": yearly_cyclist_totals,
#         "yearlyPedestrianTotals": yearly_pedestrian_totals,
#     },
#     "boroughData": {
#         "cyclistBoroughTotals": cyclist_borough_totals,
#         "pedestrianBoroughTotals": pedestrian_borough_totals,
#     },
#     "monthlyData": {
#         "monthlyCyclistAverages": monthly_cyclist_averages,
#         "monthlyPedestrianAverages": monthly_pedestrian_averages,
#     },
#     "weeklyData": {
#         "weeklyCyclistTotals": weekly_cyclist_totals,
#         "weeklyPedestrianTotals": weekly_pedestrian_totals,
#     },
#     "hourlyData": {
#         "hourlyCyclistTotals": hourly_cyclist_totals,
#         "hourlyPedestrianTotals": hourly_pedestrian_totals,
#     },
# }
