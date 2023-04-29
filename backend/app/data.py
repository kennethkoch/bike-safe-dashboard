import pandas as pd
from sodapy import Socrata

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

# initial data upon starting server
results = client.get("h9gi-nx95", limit=2000, where=all_records_with_injury)

# Convert to pandas DataFrame
pd.set_option("display.max_rows", None)
pd.set_option("display.max_columns", None)
results_df = pd.DataFrame.from_records(results)
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

data = {"name": "test", "age": 30, "city": "chicago"}
