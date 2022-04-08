import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Navbar from './navbar'
// import Counters from './Counters'
// import BoroughChart from './BoroughChart'
// import WeekdayChart from './WeekdayChart'
// import YearlyChart from './YearlyChart'
// import MonthlyChart from './MonthlyChart'
// import HourChart from './hourChart'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// function getData() {
//   const [testResponse, setTestResponse] = useState([])
//   // useEffect(() => {
//   //   fetch(`http://127.0.0.1:5000/profile`)
//   //   .then(results => results.json())
//   //   .then(data => {
//   //     console.log(data);
//   //   });
//   // }, []);

//   useEffect(() => {
//     fetch('/api')
//       .then(response => response.json())
//       .then(response => setTestResponse(response))
//       .catch(error => console.log(error))

//   }, [])

//   useEffect(() => {
//     console.log('test response is:', testResponse)
//   }, [testResponse])

// }



ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar />
    <Counters />
    <YearlyChart />
    <BoroughChart />
    <WeekdayChart />
    <MonthlyChart />
    <HourChart /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
