// PieChart.js
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './static/composition.css'

Chart.register(ArcElement, Tooltip, Legend);

const LiveChart = () => {
  const [data] = useState({
    labels: ['A+', 'B+', 'AB+', 'O+', 'O-', 'A-', 'B-', 'AB-'],
    datasets: [
      {
        label: 'Donors',
        data: [12, 19, 3, 5, 2, 3, 5, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // A+
          'rgba(54, 162, 235, 0.2)', // B+
          'rgba(255, 206, 86, 0.2)', // AB+
          'rgba(75, 192, 192, 0.2)', // O+
          'rgba(153, 102, 255, 0.2)', // O-
          'rgba(255, 159, 64, 0.2)', // A-
          'rgba(255, 205, 210, 0.2)', // B-
          'rgba(100, 181, 246, 0.2)'  // AB-
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // A+
          'rgba(54, 162, 235, 1)', // B+
          'rgba(255, 206, 86, 1)', // AB+
          'rgba(75, 192, 192, 1)', // O+
          'rgba(153, 102, 255, 1)', // O-
          'rgba(255, 159, 64, 1)', // A-
          'rgba(255, 205, 210, 1)', // B-
          'rgba(100, 181, 246, 1)'  // AB-
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className='city-composition-parent'>
      <Pie data={data} className='piechart' />
    </div>
  );
};

export default LiveChart;
