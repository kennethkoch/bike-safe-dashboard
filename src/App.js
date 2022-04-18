// import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './navbar'
import Counters from './Counters'
import BoroughChart from './BoroughChart'
import WeekdayChart from './WeekdayChart'
import YearlyChart from './YearlyChart'
import MonthlyChart from './MonthlyChart'
import HourChart from './hourChart'
import Footer from './Footer'


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
        <MonthlyChart monthlyData={data.monthlyData} />
        <WeekdayChart weeklyData={data.weeklyData} />
        <HourChart hourlyData={data.hourlyData} />
        <BoroughChart boroughData={data.boroughData} />
        <Footer />
      </div>
  );
}

export default App;
