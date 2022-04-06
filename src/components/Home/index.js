import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Filters from "../filters/filters";
import InfoCard from "../InfoCard/InfoCard";
import { Bar } from "react-chartjs-2";
import Chart from "../Chart/chart";

const Home = () => {
  const [newCases, setNewCases] = useState();
  const [totalCases, setTotalCases] = useState();
  const [newDeaths, setNewDeaths] = useState();
  const [countryNewCases, setCountryNewCases] = useState([]);
  const [countryNewRecovered, setCountryNewRecovered] = useState({});
  const [countryNewDeaths, setCountryNewDeaths] = useState({});

  const info = [
    {
      id: 1,
      line: "New cases today",
      number: 42143,
      color: "rgb(247, 83, 83)",
    },
    {
      id: 2,
      line: "Total Covid Cases",
      number: 42143,
      color: "rgb(69, 188, 69)",
    },
    {
      id: 3,
      line: "New Deaths today",
      number: 42143,
      color: "rgb(75, 123, 255)",
    },
  ];

  useEffect(async () => {
    try {
      const response = await axios.get(`https://api.covid19api.com/summary`);

      let updatedList = [];
      for (let i = 0; i < response?.data?.Countries.length; i++) {
        let updatedValue = {};
        updatedValue["Country"] = response?.data?.Countries[i].Country;
        updatedValue["Cases"] = response?.data?.Countries[i].NewConfirmed;
        updatedList.push(updatedValue)
      }
      console.log(updatedList)
      setCountryNewCases({ ...updatedList });

      updatedList = {};
      for (let i = 0; i < response?.data?.Countries.length; i++) {
        updatedList[response?.data?.Countries[i].Country] =
          response?.data?.Countries[i].NewDeaths;
      }
      setCountryNewDeaths({ ...updatedList });

      updatedList = {};
      for (let i = 0; i < response?.data?.Countries.length; i++) {
        updatedList[response?.data?.Countries[i].Country] =
          response?.data?.Countries[i].NewRecovered;
      }
      setCountryNewRecovered({ ...updatedList });

      setNewCases(response?.data?.Global.NewConfirmed);
      setTotalCases(response?.data?.Global.TotalConfirmed);
      setNewDeaths(response?.data?.Global.NewDeaths);
    } catch (error) {
      if (error?.response?.status === 500) {
        console.log("internal-server-error");
      }
    }
  }, []);

  return (
    <div className="container">
      <div className="container-filters">
        <Filters />
      </div>
      <div className="home-maincard">
        <InfoCard
          line={"New Cases Today"}
          number={newCases}
          color={"rgb(247, 83, 83)"}
        />
        <InfoCard
          line={"Total Covid Cases"}
          number={totalCases}
          color={"rgb(69, 188, 69)"}
        />
        <InfoCard
          line={"New Deaths Today"}
          number={newDeaths}
          color={"rgb(75, 123, 255)"}
        />
      </div>
      <div className="chart">
        <Chart
          data1={countryNewCases}
          data2={countryNewDeaths}
          data3={countryNewRecovered}
        />
      </div>
    </div>
  );
};

export default Home;
