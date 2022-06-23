import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState([]);
  const getData = async () => {
    const CovidData = await fetch(
      "https://api.apify.com/v2/datasets/9eUGCilmJ8HDf60mL/items?format=json&clean=1"
    );
    const resData = await CovidData.json();
    setShow(resData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h1>COVID-19 Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>infected</th>
            <th>recovered</th>
            <th>critical</th>
            <th>deceased</th>
            <th>sourceUrl</th>
          </tr>
        </thead>
        <tbody>
          {show.map((currEle, idx) => {
            return (
              <tr key={idx}>
                <td>{currEle.infected}</td>
                <td>{currEle.recovered}</td>
                <td>{currEle.critical}</td>
                <td>{currEle.deceased}</td>
                <td>{currEle.sourceUrl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
