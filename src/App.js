// import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './navbar'
import Counters from './Counters'
import WeekdayChart from './WeekdayChart'
import YearlyChart from './YearlyChart'
import MonthlyChart from './MonthlyChart'
import HourChart from './hourChart'
import Footer from './Footer'


function App() {

  // const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('hello from app')
    async function fetchData() {
      const response = await fetch('http://localhost:5000/data')
      console.log('response', response)
      const jsonData = await response.json()
      console.log('jsonData', jsonData)
      setData(jsonData)
      // setIsLoading(false)
    }
    console.log('fetching data')
    fetchData()
    // fetch('/data')
    //   .then(response => response.json())

    //   .then((response) => {
    //     console.log('response', response)
    //     console.log('here')
    //     setData(response)
    //     setIsLoading(false)
    //   }
    //   )
    //   .catch(error => console.log(error))
    console.log('data', data)

  }, [])

  // console.log('data', data.counterData.ytdCyclistInjuries)

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
