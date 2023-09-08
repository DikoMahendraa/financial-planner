import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({
  label,
  categories = [],
  dataValues = []
}: {
  label: string;
  categories: string[];
  dataValues: number[];
}) => {
  const datasets = [
    {
      label: 'Jumlah',
      data: {},
      backgroundColor: ['#5C42E2', '#E8AB63', '#8A6DC8', '#989898', '#EC692C'],
      borderColor: ['#070807'],
      borderWidth: 2
    }
  ];

  categories.forEach((_, index) => {
    // @ts-ignored
    datasets[0].data[index] = dataValues[index];
  });

  const data = {
    labels: categories,
    datasets: datasets
  };

  return (
    <Doughnut
      className="capitalize"
      data={data}
      options={{
        plugins: {
          title: {
            text: label
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
