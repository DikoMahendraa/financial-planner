import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ labels = [] }: { labels: Array<string> }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Jumlah',
        data: {
          0: 100000,
          1: 200000,
          2: 25000,
          3: 25000,
          5: 25000
        },
        backgroundColor: [
          '#51AA77',
          '#5C42E2',
          '#E8AB63',
          '#8A6DC8',
          '#989898',
          '#EC692C'
        ],
        borderColor: ['#070807'],
        borderWidth: 2
      }
    ]
  };

  return (
    <Doughnut
      className="capitalize"
      data={data}
      options={{
        plugins: {
          title: {
            text: 'dasdsad'
          },
          legend: {
            display: true,
            position: 'right',
            title: {
              display: true
            },
            labels: {
              boxHeight: 20,
              borderRadius: 10
            }
          }
        }
      }}
    />
  );
};

export default ChartComponent;
