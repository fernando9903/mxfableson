import React from "react";
import "../css/graphCharacteristics.css";
import "../css/Box.css";
import {Container,Row,Col} from "react-bootstrap";

import MixedChart from "../componentes/MixedChart";
import data from '../data/GlobalTargets.json';
import BarChart from '../componentes/BarChart'


const drawGlobalTargets = (props) => {
  
const crearDataTargetUno=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
    
   props.map((item) => {
    dataUno.push(item.Net_forest_change);
    dataDos.push(item.Forest_change_target);
   labels.push(item.Year);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Forest Change",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Net Forest Change",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 
const crearDataTargetDos=(props)=> {
 
  
var dataUno=[]
var dataDos=[]
var labels=[]
  
   props.map((item) => {
    dataUno.push(item.Protected_land);
    dataDos.push(item.target_Protected_land);
    labels.push(item.Year);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Target Protectend Land",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Protectend Land",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }
   



 return data
} 

const crearDataTargetTres=(props)=> {
  var dataUno=[]
  var dataDos=[]
  var dataTres=[]
  var dataCuatro=[]
  var labels=[]


    props.map((item) => {
      dataUno.push(item.Biodiversity_land);
     dataDos.push(item.biod_by_year);
     dataTres.push(item.biod_target1);
     dataCuatro.push(item.biod_target3);
     labels.push(item.Year);
     
   });
   const data={
    labels:labels,
     datasets:[
       {
        label:"Biod by year",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Yellow",
        borderColor:"Yellow",
        hoverBackgroundColor:"Yellow",
        hoverBorderColor:"Yellow",
        yAxisID:"y-axis-1"
       },
       {
        label:"Biodiversity Land",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       },  {
        label:"Biod-target1",
        data:dataTres,
        fill:false,
        type:"scatter",
        backgroundColor:"black",
        borderColor:"black",
        hoverBackgroundColor:"black",
        hoverBorderColor:"black",
        yAxisID:"y-axis-1"
       }, {
        label:"Biod-target3",
        data:dataCuatro,
        fill:false,
        type:"scatter",
        backgroundColor:"orange",
        borderColor:"orange",
        hoverBackgroundColor:"orange",
        hoverBorderColor:"orange",
        yAxisID:"y-axis-1"
       }
     ]
  }

  return data
 } 
 const crearDataTargetCinco=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
    
   props.map((item) => {
    dataUno.push(item.Kcal_feasible);
    dataDos.push(item.Target_MDER);
   labels.push(item.c_country_t);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Target (MDER)",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Kcal feasible",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 

const crearDataTargetSeis=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
    
   props.map((item) => {
    dataUno.push(item.Blue_water_in_million_cubic_meters);
    dataDos.push(item.Water_target);
   labels.push(item.Year);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Water Target",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Blue water in million cubic meters",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 

const crearDataTargetCuatro=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var dataTres=[]
  var dataCuatro=[]
  var dataCinco=[]
  var dataSeis=[]
  var labels=[];
    
   props.map((item) => {
    dataUno.push(item.Crop_CH4);
    dataDos.push(item.Crop_CO2);
    dataTres.push(item.Crop_N2O);
    dataCuatro.push(item.Livestock_CH4);
    dataCinco.push(item.Livestock_N2O);
    dataSeis.push(item.Target);
   
    
  });
  labels.push(2050);
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Target",
        data:dataSeis,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Crop CH4",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       },{
        label:"Crop CO2",
        data:dataDos,
        fill:false,
        type:"bar",
        backgroundColor:"black",
        borderColor:"black",
        hoverBackgroundColor:"black",
        hoverBorderColor:"black",
        yAxisID:"y-axis-1"
       },{
        label:"Crop N2O",
        data:dataTres,
        fill:false,
        type:"bar",
        backgroundColor:"green",
        borderColor:"green",
        hoverBackgroundColor:"green",
        hoverBorderColor:"green",
        yAxisID:"y-axis-1"
       },
       {
        label:"Livestock CH4",
        data:dataCuatro,
        fill:false,
        type:"bar",
        backgroundColor:"yellow",
        borderColor:"yellow",
        hoverBackgroundColor:"yellow",
        hoverBorderColor:"yellow",
        yAxisID:"y-axis-1"
       },{
        label:"Livestock N2O",
        data:dataCinco,
        fill:false,
        type:"bar",
        backgroundColor:"blue",
        borderColor:"blue",
        hoverBackgroundColor:"blue",
        hoverBorderColor:"blue",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 

const crearDataTargetSiete=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
  labels.push(2050);
    
   props.map((item) => {
    dataUno.push(item.total_GHG_land);
    dataDos.push(item.GHG_LU_target);
 
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"GHG LU target",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Total GHG land",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 
//--------------------------------
  var dataAuxTargetUno;
  var dataAuxTargetDos;
  var dataAuxTargetTres;
  var dataAuxTargetCuatro;
   var dataAuxTargetCinco;
  var dataAuxTargetSeis;
  var dataAuxTargetSiete;
  if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
   
    dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionUno);
    dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionUno);
    dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionUno);
    dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionUno);
    dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionUno);
   dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionUno);
   dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionUno);


    

 
} else if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration  === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
 
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionDos);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionDos);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionDos);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionDos);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionDos);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionDos);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionDos);
  
} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionTres);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionTres);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionTres);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionTres);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionTres);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionTres);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionTres);

} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionCuatro);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionCuatro);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionCuatro);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionCuatro);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionCuatro);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionCuatro);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionCuatro);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
 
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionCinco);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionCinco);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionCinco);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionCinco);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionCinco);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionCinco);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionCinco);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionSeis);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionSeis);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionSeis);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionSeis);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionSeis);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionSeis);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionSeis);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionSiete);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionSiete);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionSiete);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionSiete);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionSiete);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionSiete);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionSiete);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionOcho);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionOcho);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionOcho);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionOcho);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionOcho);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionOcho);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionOcho);

} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionNueve);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionNueve);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionNueve);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionNueve);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionNueve);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionNueve);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionNueve);

}else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionDies);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionDies);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionDies);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionDies);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionDies);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionDies);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionDies);

} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionOnce);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionOnce);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionOnce);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionOnce);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionOnce);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionOnce);
  dataAuxTargetSiete= crearDataTargetSiete(data.targetCuatro_2_combinacionOnce);

} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionDoce);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionDoce);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionDoce);
  dataAuxTargetCuatro= crearDataTargetCuatro(data.targetCuatro_1_combinacionDoce);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionDoce);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionDoce);
  dataAuxTargetSiete = crearDataTargetSiete(data.targetCuatro_2_combinacionDoce);
}
  return (
    
    
    <div className="GlobalTargets"><br></br>
   

   {/*   <div class="wrapper">
  <div class="one">
  <div class="wrapper">
    <div class="uno">
      <MixedChart 
        data={dataAuxTargetUno}
        title="Target 1.- Zero net deforestation"/>
        </div>
    <div class="dos">
    <MixedChart
        data={dataAuxTargetDos}
        title="Target 2.- Share of total land which is protected"/>
    </div>
    <div class="tres">
    <MixedChart 
        data={dataAuxTargetTres}
        title="Target 3.- Share of land where natural processes predominate"/>
    </div>
  </div>
  </div>
  
  <div class="two">
  <BarChart data={dataAuxTargetCuatro}
            title="Target 4.- Greenhouse Gas (GHG) Emissions"/>


<MixedChart 
        data={dataAuxTargetSiete}
        title=""/>
  
  </div>
  
  <div class="three">
 
  <MixedChart 
        data={dataAuxTargetCinco}
        title="Target 5.-  Food security"/>
  

  </div>
  <div class="four">
  <MixedChart
        data={dataAuxTargetSeis}
        title="Target 6.- Fresh water use"/>
  </div>
  </div>*/}

<h4>Target 1-3</h4>
<Container fluid>
  <Row>
    <Col><MixedChart 
        data={dataAuxTargetUno}
        title="Target 1.- Zero net deforestation"/>
        </Col>
    <Col><MixedChart
        data={dataAuxTargetDos}
        title="Target 2.- Share of total land which is protected"/></Col>
    <Col><MixedChart 
        data={dataAuxTargetTres}
        title="Target 3.- Share of land where natural processes predominate"/></Col>
  </Row>
</Container>
<h4>Target 4.- Greenhouse Gas (GHG) Emissions </h4>
<Container fluid>
<Row>
    <Col md={4}><BarChart data={dataAuxTargetCuatro}
            title="From Agriculture "/></Col>
    <Col md={4}><MixedChart 
        data={dataAuxTargetSiete}
        title="From Land use change"/></Col>
  </Row>
</Container>


<h4>Targes 5-6</h4>
<Container fluid>
<Row>
    <Col ><MixedChart 
        data={dataAuxTargetCinco}
        title="Target 5.-  Food security"/></Col>
        <Col md={4}><MixedChart
        data={dataAuxTargetSeis}
        title="Target 6.- Fresh water use"/></Col>
  </Row>
</Container>







      </div>
  );
  
};

export default drawGlobalTargets;
