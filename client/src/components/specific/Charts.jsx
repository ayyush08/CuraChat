import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import {
    CategoryScale, Chart as ChartJS,
    Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend,
    scales
} from 'chart.js'
import {lightOrange,lightBlue, matteBlack, orange, orangeWithOpacity, blueWithOpacity } from '../../constants/color';
import { getLastSevenDays } from '../../lib/features';
ChartJS.register(
    CategoryScale,
    Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend
)

const labels = getLastSevenDays();



const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title:{
            display: false
        }
    },
    scales:{
        x:{
            grid:{
                display: false
            }
        },
        y:{
            beginAtZero: true,
            grid:{
                display: false
            }
    }
}};


const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title:{
            display: false
        }
    },
    cutout: 115,
}


const LineChart = ({value=[]}) => {
    const data = {
        labels,
        datasets: [{
            data: value,
            label: 'Sales',
            fill:true,
            borderColor: orange,
            backgroundColor: orangeWithOpacity,
        },{
            data: [10, 20, 30, 40, 50, 60, 70],
            label: 'Sales',
            fill:true,
            borderColor: orange,
            backgroundColor: orangeWithOpacity,
        }],
    }
    return <Line data={data} options={lineChartOptions} />
}


const DoughnutChart = ({value=[]}) => {

    const data = {
        labels,
        datasets: [{
            data: value,
            label: "Total Chats vs Group Chats",
            fill: false,
            backgroundColor: [orangeWithOpacity,blueWithOpacity],
            borderColor: [orange, lightBlue],
            hoverBackgroundColor: [orange, lightBlue],
            offset: 15,
        }]
    }
    return <Doughnut
    style={{zIndex:10}}
    options={doughnutChartOptions} data={data}/>
}

export {
    LineChart, DoughnutChart
}