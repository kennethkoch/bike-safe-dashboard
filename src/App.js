import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './navbar'
import Counters from './Counters'
import BoroughChart from './BoroughChart'
import WeekdayChart from './WeekdayChart'
import YearlyChart from './YearlyChart'
import MonthlyChart from './MonthlyChart'
import HourChart from './hourChart'


function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('hello from app')
    fetch('/api')
      .then(response => response.json())

      .then((response) => {
        setData(response)
        setIsLoading(false)
      }
      )
      .catch(error => console.log(error))

  }, [])
  console.log(data)

  return (
    isLoading ? <h1>Loading......</h1> :
      <div>
        <Navbar />
        <Counters counterData={data.counterData} />
        <YearlyChart yearlyData={data.yearlyData} />
        <BoroughChart boroughData={data.boroughData} />
        <WeekdayChart weeklyData={data.weeklyData} />
        <MonthlyChart monthlyData={data.monthlyData} />
        <HourChart hourlyData={data.hourlyData} />
      </div>
  );
}

export default App;
