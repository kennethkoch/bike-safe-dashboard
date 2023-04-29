from sodapy import Socrata
import time
from datetime import datetime
import reverse_geocoder as rg
from apscheduler.schedulers.background import BackgroundScheduler


records = 500000
records_dev = 20000
client = Socrata("data.cityofnewyork.us", None)

cyclists_injured = "number_of_cyclist_injured>0 OR number_of_cyclist_killed>0"
pedestrians_injured = (
    "number_of_pedestrians_injured>0 OR number_of_pedestrians_killed>0"
)

# only return crashes where at least one cyclist or pedestrian was injured or killed
all_records_with_injury = cyclists_injured + " OR " + pedestrians_injured

# initial data upon starting server
results = client.get("h9gi-nx95", limit=records, where=all_records_with_injury)

# update results once a day
def get_data():
    print("getting updated data")
    global results
    results = client.get("h9gi-nx95", limit=records, where=all_records_with_injury)
    print("results updated")


scheduler = BackgroundScheduler()
job = scheduler.add_job(get_data, "cron", hour=2)  # 2:00 am
scheduler.start()


current_year = datetime.now().year
cyclists_injured_total = 0
cyclists_killed_total = 0
pedestrians_injured_total = 0
pedestrians_killed_total = 0
accidents_involving_cyclists = 0
accidents_involving_pedestrians = 0
cyclist_year_count = {}
cyclist_month_count = {}
cyclist_weekday_count = {}
cyclist_hour_count = {}
pedestrian_year_count = {}
pedestrian_month_count = {}
pedestrian_weekday_count = {}
pedestrian_hour_count = {}
year_to_date_cyclist_injuries = 0
year_to_date_cyclist_deaths = 0
year_to_date_pedestrian_injuries = 0
year_to_date_pedestrian_deaths = 0
cyclist_borough_count = {
    "BRONX": 0,
    "BROOKLYN": 0,
    "MANHATTAN": 0,
    "QUEENS": 0,
    "STATEN ISLAND": 0,
    "UNKNOWN_OTHER": 0,
}
pedestrian_borough_count = {
    "BRONX": 0,
    "BROOKLYN": 0,
    "MANHATTAN": 0,
    "QUEENS": 0,
    "STATEN ISLAND": 0,
    "UNKNOWN_OTHER": 0,
}


def translate_borough(borough):
    if borough == "KINGS COUNTY":
        borough = "BROOKLYN"
    elif borough == "NEW YORK COUNTY":
        borough = "MANHATTAN"
    elif borough == "QUEENS COUNTY":
        borough = "QUEENS"
    elif borough == "RICHMOND COUNTY":
        borough = "STATEN ISLAND"
    elif borough == "BRONX":
        borough = "BRONX"
    else:
        borough = "UNKNOWN_OTHER"
    return borough


def find_denominator_months(n):
    total = current_year - 2013
    if n >= 7:  # account for jul-dec 2012
        total += 1
    if datetime.now().month > n:  # account for months that have passed this year
        total += 1
    return total


def calculate_monthly_average(count):
    averages_arr = []
    for i in range(1, 13):
        denominator = find_denominator_months(i)
        average = count[i] / denominator
        averages_arr.append(average)
    return averages_arr


def update_count_dict(key, dict):
    if key in dict:
        dict[key] += 1
    else:
        dict[key] = 1


def count_to_array(count):
    return list(dict(sorted(count.items())).values())


no_crash_time = 0
for crash in results:
    # accidents involving cyclists
    if (
        int(crash["number_of_cyclist_injured"]) > 0
        or int(crash["number_of_cyclist_killed"]) > 0
    ):
        accidents_involving_cyclists += 1
        cyclists_injured_total += int(crash["number_of_cyclist_injured"])
        cyclists_killed_total += int(crash["number_of_cyclist_killed"])

        # update ytd totals
        if int(crash["crash_date"][0:4]) == current_year:
            year_to_date_cyclist_injuries += int(crash["number_of_cyclist_injured"])
            year_to_date_cyclist_deaths += int(crash["number_of_cyclist_killed"])

        # update borough count
        if "borough" in crash:
            cyclist_borough_count[crash["borough"]] += 1
        else:
            try:
                coordinates = crash["latitude"], crash["longitude"]
                result = rg.search(coordinates, mode=1)  # derive borough from lat/lon
                borough = result[0]["admin2"].upper()
                updated_borough = translate_borough(borough)
                update_count_dict(updated_borough, cyclist_borough_count)

            except:
                update_count_dict("UNKNOWN_OTHER", cyclist_borough_count)

        # update yearly, monthly, weekly counts
        try:
            year = datetime.fromisoformat(crash["crash_date"]).year
            month = datetime.fromisoformat(crash["crash_date"]).month
            weekday = datetime.fromisoformat(crash["crash_date"]).weekday()
            update_count_dict(year, cyclist_year_count)
            update_count_dict(month, cyclist_month_count)
            update_count_dict(weekday, cyclist_weekday_count)
        except:
            print("invalid date attribute")
        # update hourly count
        try:
            hour = datetime.strptime(crash["crash_time"], "%H:%M").hour
            update_count_dict(hour, cyclist_hour_count)
        except:
            print("invalid time")

    # accidents involving pedestrians
    if (
        int(crash["number_of_pedestrians_injured"]) > 0
        or int(crash["number_of_pedestrians_killed"]) > 0
    ):
        accidents_involving_pedestrians += 1
        pedestrians_injured_total += int(crash["number_of_pedestrians_injured"])
        pedestrians_killed_total += int(crash["number_of_pedestrians_killed"])

        # update ytd totals
        if int(crash["crash_date"][0:4]) == current_year:
            year_to_date_pedestrian_injuries += int(
                crash["number_of_pedestrians_injured"]
            )
            year_to_date_pedestrian_deaths += int(crash["number_of_pedestrians_killed"])

        # update borough count
        if "borough" in crash:
            pedestrian_borough_count[crash["borough"]] += 1
        else:
            try:
                coordinates = crash["latitude"], crash["longitude"]
                result = rg.search(coordinates, mode=1)  # derive borough from lat/lon
                borough = result[0]["admin2"].upper()
                updated_borough = translate_borough(borough)
                update_count_dict(updated_borough, pedestrian_borough_count)

            except:
                update_count_dict("UNKNOWN_OTHER", pedestrian_borough_count)

        # update yearly, monthly, weekly counts
        try:
            year = datetime.fromisoformat(crash["crash_date"]).year
            month = datetime.fromisoformat(crash["crash_date"]).month
            weekday = datetime.fromisoformat(crash["crash_date"]).weekday()
            update_count_dict(year, pedestrian_year_count)
            update_count_dict(month, pedestrian_month_count)
            update_count_dict(weekday, pedestrian_weekday_count)
        except:
            print("no crash date attribute")

        # update hourly counts
        try:
            hour = datetime.strptime(crash["crash_time"], "%H:%M").hour
            update_count_dict(hour, pedestrian_hour_count)
        except:
            print("invalid time")

yearly_cyclist_totals = count_to_array(cyclist_year_count)
yearly_pedestrian_totals = count_to_array(pedestrian_year_count)

weekly_cyclist_totals = count_to_array(cyclist_weekday_count)
weekly_pedestrian_totals = count_to_array(pedestrian_weekday_count)

hourly_cyclist_totals = count_to_array(cyclist_hour_count)
hourly_pedestrian_totals = count_to_array(pedestrian_hour_count)

cyclist_borough_totals = count_to_array(cyclist_borough_count)
pedestrian_borough_totals = count_to_array(pedestrian_borough_count)

monthly_cyclist_averages = calculate_monthly_average(cyclist_month_count)
monthly_pedestrian_averages = calculate_monthly_average(pedestrian_month_count)

data = {
    "counterData": {
        "ytdCyclistInjuries": year_to_date_cyclist_injuries,
        "ytdCyclistDeaths": year_to_date_cyclist_deaths,
        "ytdPedestrianInjuries": year_to_date_pedestrian_injuries,
        "ytdPedestrianDeaths": year_to_date_pedestrian_deaths,
    },
    "yearlyData": {
        "yearlyCyclistTotals": yearly_cyclist_totals,
        "yearlyPedestrianTotals": yearly_pedestrian_totals,
    },
    "boroughData": {
        "cyclistBoroughTotals": cyclist_borough_totals,
        "pedestrianBoroughTotals": pedestrian_borough_totals,
    },
    "monthlyData": {
        "monthlyCyclistAverages": monthly_cyclist_averages,
        "monthlyPedestrianAverages": monthly_pedestrian_averages,
    },
    "weeklyData": {
        "weeklyCyclistTotals": weekly_cyclist_totals,
        "weeklyPedestrianTotals": weekly_pedestrian_totals,
    },
    "hourlyData": {
        "hourlyCyclistTotals": hourly_cyclist_totals,
        "hourlyPedestrianTotals": hourly_pedestrian_totals,
    },
}
