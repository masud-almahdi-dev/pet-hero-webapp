
import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie,Line } from 'react-chartjs-2';
import { useAxiosSecure } from '../../auth/Auth';
//import faker from 'faker';

ChartJS.register(
    CategoryScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.defaults.color = 'white';

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'last 30 days',
            color: 'white'
        },
    },
};

const labels = Array.from({ length: 30 }, (_, i) => 29 - i);

export const data = {
    labels,
    datasets: [
        {
            label: 'Cats',
            data: [...Array.from({ length: 30 }, () => Math.floor(Math.random() * 11)).splice(0, 29), 22],
            borderColor: '#00a000a0',
            backgroundColor: '#00e000a0',
        },
        {
            label: 'Birds',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 11)),
            borderColor: '#00aaaa',
            backgroundColor: '#a0ffff',
        },
    ],
};

export const datapie = {
    labels: ['Cats', 'Birds', 'Yellow', 'Fish', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Available pets',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
const DashboardMain = () => {
    const axs = useAxiosSecure()
    useEffect(()=>{
        axs.get('/').then(res=>console.log(res.data))
    },[])
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2'>
            <div className='p-6 bg-slate-700 flex h-max rounded-lg m-6'>
                <Line options={options} data={data} />
            </div>
            <div className='p-6 bg-slate-700 flex h-96 w-96 rounded-lg m-6'>
                <Pie data={datapie} />
            </div>
            <div className='p-6 bg-slate-700 flex h-max rounded-lg m-6'>
                <Line options={options} data={data} />
            </div>
        </div>
    );
}

export default DashboardMain;