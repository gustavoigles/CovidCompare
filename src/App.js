import React, {useState, useEffect} from 'react';
import { css } from "@emotion/core";
import axios from 'axios';
import './App.css';
import Graph from './components/Graph'
import Select from 'react-select'
import BottomGraph from './components/BottomGraph'
import Header from './components/Header'
import Footer from './components/Footer'

import LoadingOverlay from 'react-loading-overlay';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {



  const [datosPais, guardarDatos] = useState([]);
  const [datosSegPais, guardarSegDatos] = useState([]);
  const [paises, guardarPaises] = useState([]);
  const [obtuvo, guardarObtuvo] = useState(false)
  const [labelUno, guardarLabelUno] = useState([]);
  const [labelDos, guardarLabelDos] = useState([]);
  const [paisUno, guardarPaisUno] = useState("");
  const [paisDos, guardarPaisDos] = useState("");
  const [topcinco, guardarTopCinco] = useState([]);


  useEffect( () => {
    if(obtuvo) {
    }
    else {
      obtienePaises();
      guardarObtuvo(true)
     
    }
  }, [paises])
  
  const obtienePaises = async () => {
    const response = await axios.get(`https://api.covid19api.com/summary`)
    const countries = response.data.Countries
    countries.sort(function(a, b) {
      return  b.TotalConfirmed - a.TotalConfirmed ;
  });
   guardarPaises(countries)

   var topfive = []

   for(let i=0 ; i<5; i++) {
    let response = await axios.get(`https://api.covid19api.com/total/dayone/country/${countries[i].Slug}/status/confirmed`);
    topfive = [...topfive, response]
   }

   const newArray = topfive.map((item) => {
      var newArrayTwo = item.data.map((item) => {
        return item.Cases
       
    })
      return newArrayTwo
  })
       guardarTopCinco(newArray)
  }

  const primerDato = async (valor, pais) => {
 
    guardarPaisUno(pais)
    const response = await axios.get(`https://api.covid19api.com/total/dayone/country/${valor}/status/confirmed`)
    const nuevoArray = response.data
    const elArray = nuevoArray.map((item) => {
      return item.Cases
    })
    const labels = elArray.map((i, index) => {
      return index
    })
    guardarDatos(elArray)
    guardarLabelUno(labels)
  }

  const segundoDato = async (valor, pais) => {
    const response = await axios.get(`https://api.covid19api.com/total/dayone/country/${valor}/status/confirmed`)
    guardarPaisDos(pais)
    const nuevoArray = response.data
    const elArray = nuevoArray.map((item) => {
      return item.Cases
    })
    const labelsDos = elArray.map((i, index) => {
      return index
    })
    guardarSegDatos(elArray)
    guardarLabelDos(labelsDos)
  }

  const options = paises.map(function(item) {
    return { value : item.Slug, label : item.Country
    }}
    )

    if(topcinco.length ===0) {
      var isActive = true
    } 
    else {
      var isActive = false
    }
    
  return (
    <div className="App">
    <LoadingOverlay
    active={isActive}
    spinner={<ClipLoader />}
    styles={{
      wrapper: {
        width:'100%',
        height : '100vh',
        overflow: isActive ? 'hidden' : 'scroll',
      
      },
      overlay: (base) => ({
        ...base,
    zIndex : 99,
    background: 'white',
    overflow: isActive ? 'hidden' : 'scroll'
      
  })
    }}
    >
   <Header />
      <div className="selects">
        <Select placeholder={<div>Selecciona primer pais</div>} className="selectOne"options={options} onChange={(value) => primerDato(value.value, value.value)}/>
        <Select placeholder={<div>Selecciona segundo pais</div>} className="selectTwo" options={options} onChange={(value) => segundoDato(value.value, value.value)}/> 
      </div>
    
      <Graph datos={datosPais} labelUno={labelUno} labelDos={labelDos} datosSegPais={datosSegPais} paisUno={paisUno} paisDos={paisDos}/>

      <BottomGraph paises={paises} datos={topcinco}/> 
      <Footer />
  </LoadingOverlay>
  </div>
   
  );
}

export default App;
