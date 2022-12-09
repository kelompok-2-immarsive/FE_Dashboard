import React from "react";
import Chart from 'chart.js/auto';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({chartData}) => {
    // return (
    //     <div className="chart-container">
    //         <h2 style={{ textAlign: "center" }}>Line Chart</h2>
    //         <Line
    //             data={chartData}
    //             options={{
    //                 title: {
    //                     display: true,
    //                     text: 'Average Rainfall per month',
    //                     fontSize: 20
    //                 },
    //                 legend: {
    //                     display: true,
    //                     position: 'right'
    //                 }
    //             }}
    //         />
    //     </div>
    // );
  
  const [graph, setGraph] = useState({
    labels: [],
    register: [],
    graduate : [],
    placement : []
  });

  useEffect(() => {

    const labels= [];
    const register = [];
    const graduate = [];
    const placement = [];

    chartData?.map((item) => {
      labels.push(item?.label);
      register.push(item?.register);
      graduate.push(item?.graduate);
      placement.push(item?.placement);
    });

    setGraph({
      labels: labels,
      register: register,
      graduate : graduate,
      placement : placement
    });

  },[]);
  
  const data = {
    labels: graph.labels,
    datasets: [
      {
        label: 'Register',
        data: graph.register,
        fill: false,
        backgroundColor: '#FC6E08',
        borderColor: '#FC6E08',
      },
      {
        label: 'Graduate',
        data: graph.graduate,
        fill: false,
        backgroundColor: '#11D200',
        borderColor: '#11D200',
      },
      {
        label: 'PLacement',
        data: graph.placement,
        fill: false,
        backgroundColor: '#082F7B',
        borderColor: '#082F7B',
      }
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      <div className="w-full">
      <h3 className="text-xl text-alta-primary text-center font-bold">Line Chart Data Mentees 2022 </h3>
        <div className="w-full h-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default LineChart;
