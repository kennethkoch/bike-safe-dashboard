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


  return (
    <div>
      <Navbar />
      <Counters isLoading={isLoading} counterData={data.counterData} />
      <YearlyChart isLoading={isLoading} yearlyData={data.yearlyData} />
      <MonthlyChart isLoading={isLoading} monthlyData={data.monthlyData} />
      <WeekdayChart isLoading={isLoading} weeklyData={data.weeklyData} />
      <HourChart isLoading={isLoading} hourlyData={data.hourlyData} />
      <BoroughChart isLoading={isLoading} boroughData={data.boroughData} />
      <Footer />
    </div>
  );
}

export default App;
