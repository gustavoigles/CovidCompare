import React from 'react';
import { Line } from 'react-chartjs-2';



const Graph = ({datos, labelUno, labelDos, datosSegPais, paisUno, paisDos}) => {

const labels = labelUno > labelDos ? labelUno : labelDos

const data = {
    labels: labels,
    datasets: [
      {
        label: paisUno,
        fill: true,
        lineTension: 1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: datos
      },
      {
        label: paisDos,
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(240, 52, 52, 0.4)',
        borderColor: 'rgba(240, 52, 52, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(240, 52, 52, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(240, 52, 52, 1)',
        pointHoverBorderColor: 'rgba(240, 52, 52, 1)',
        pointHoverBorderWidth: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        data: datosSegPais
      }
    ],
    
  };
    return (
      <div>
      <div className="chart">
        <Line
        data={data}
        width={100}
        height={50}
        
        options={{ maintainAspectRatio: false,  title: {
          display: true,
          text: 'Total de infectados desde el dia 0'
        } }}
      />
      </div>
      </div>

      
    );
};

export default Graph;