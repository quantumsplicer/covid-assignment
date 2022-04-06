import React from "react";
import { Bar } from "react-chartjs-2";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory";

const Chart = ({data1, data2, data3}) => {
  // console.log(data1[7].Country)

  return (
    <div className="chart">
      <VictoryChart theme={VictoryTheme.material}>
          <VictoryBar/>
      </VictoryChart>
    </div>
  );
};

export default Chart;
