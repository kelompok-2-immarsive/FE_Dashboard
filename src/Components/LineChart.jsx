import React from "react";
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const LineChart = ({chartData}) => {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            <Line
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}

export default LineChart;
