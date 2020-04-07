import React, {useState, Fragment} from 'react';
import { Line } from 'react-chartjs-2';
import Media from 'react-media';



const BottomGraph = ({datos,paises}) => {

  const [fullscreen, guardarFullScreen] = useState("");

//const labels = labelUno > labelDos ? labelUno : labelDos
if(datos.length===0) {
    return ( <div>Loading...</div>)
}
else {
    

}

const labelardo = datos[0].map((item, index) => {
        return index
})

const data = {
    labels: labelardo,
    options: {
      legend: {
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'black'
          }
      }
  },
    datasets: [
      {
        label: paises[0].Slug,
        fill: false,
        lineTension: 1,
        backgroundColor: 'rgba(223, 17, 17, 1)',
        borderColor: 'rgba(223, 17, 17, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(223, 17, 17, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(220,220,220,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: datos[0]
      }
    ,  
        {
          label: paises[1].Country,
          fill: false,
          lineTension: 1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datos[1]
        }
      ,
        {
          label: paises[2].Country,
          fill: false,
          lineTension: 1,
          backgroundColor: 'rgba(116, 12, 207, 1)',
          borderColor: 'rgba(116, 12, 207, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(116, 12, 207, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(116, 12, 207, 1)',
          pointHoverBorderColor: 'rgba(116, 12, 207, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datos[2]
        }, 
         {
          label: paises[3].Country,
          fill: false,
          lineTension: 1,
          backgroundColor: 'rgba(223, 199, 17, 1)',
          borderColor: 'rgba(223, 199, 17, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(223, 199, 17, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(223, 199, 17, 1)',
          pointHoverBorderColor: 'rgba(223, 199, 17, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datos[3]
        }
      ,  
   
        {
          label: paises[4].Country,
          fill: false,
          lineTension: 1,
          backgroundColor: 'rgba(9, 6, 1, 1)',
          borderColor: 'rgba(9, 6, 1, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(9, 6, 1, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(9, 6, 1, 1)',
          pointHoverBorderColor: 'rgba(9, 6, 1, 1)',
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          
          data: datos[4]
        },
        
      ],
      
  }

  const Fullscreen = () => {
      if(fullscreen === "") {
        guardarFullScreen("fullscreen")
      }
      else {
        guardarFullScreen("")
      }
  }
    return (
      <div>
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px)"
      }}>
        {matches => (
        
          <Fragment>
            {matches.small && <div>  <h1>Top 5 Mundial</h1><div className="chart-container"><Line
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false,  title: {
            display: true,
            text: 'Total de infectados desde el dia 0'
          },legend: {
          display: true,
          labels: {

          fontSize : 9,
          boxWidth : 10
      }
} }}
/></div>
</div>}
            {matches.medium &&  <div>  <h1>Top 5 Mundial</h1><div className="chart-container"><Line
          data={data}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Total de infectados desde el dia 0'
            }
} }
/>
</div></div>}
           
          </Fragment>
        )}
      </Media>
    </div>
  );
    
};

export default BottomGraph;