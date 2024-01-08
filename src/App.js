import { useEffect, useState } from 'react';
import Navbar from './navbar'
import Counters from './Counters'
import WeekdayChart from './WeekdayChart'
import YearlyChart from './YearlyChart'
import MonthlyChart from './MonthlyChart'
import HourChart from './hourChart'
import Footer from './Footer'


function App() {

  const url = process.env.REACT_APP_API_URL
  console.log(process.env)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('hello from app')
    async function fetchData() {
      const response = await fetch(url)
      console.log('response', response)
      const jsonData = await response.json()
      console.log('jsonData', jsonData)
      setData(jsonData)
    }
    fetchData()

  }, [])


  return (
    <div>
      <Navbar />
      <Counters counterData={data.counterData} />
      <YearlyChart yearlyData={data.yearlyData} />
      <MonthlyChart monthlyData={data.monthlyData} />
      <WeekdayChart weekDayData={data.weekDayData} />
      <HourChart hourlyData={data.hourlyData} />
      <Footer />
    </div>
  );
}

export default App;
