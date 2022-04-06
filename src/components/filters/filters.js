import React, { useEffect, useState } from "react";
import SingleFilter from "./singlefilter";
import axios from "axios";
import "./filters.css";

const Filters = (onChangeValue) => {
  const [location, setLocation] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`https://api.covid19api.com/summary`);

      setLocation(response?.data?.Countries);
    } catch (error) {
      if (error?.response?.status === 500) {
        console.log("internal-server-error");
      }
    }
  }, []);

  return (
    <div className="filters">
      <div className="filters-dropdowns">
        <SingleFilter options={location}></SingleFilter>
      </div>
      <button
      type="submit"
      className="button"
      onClick={onChangeValue}
    >
        Look for Data
    </button>
    </div>
  );
};

export default Filters;
