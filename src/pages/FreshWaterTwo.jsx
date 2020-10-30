import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";

import {Container,Row,Col,Jumbotron} from "react-bootstrap";
import ComboBox from '../components/ComboBox';
import LeafletMap from './LeafletMap';
import CountryCharacteristics from '../data/CountryCharacteristics.json';
import Tour from '../components/Tour';

const DrawFreshWater2 = () => {

 //   const {GraficaType, Iteration, Scenario} = props.combinacion.select;
{/** 
    switch(GraficaType){
        case 'group':
          switch(Iteration){
            case 'iteration_3':
              var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_two : data.combination_four);
              break;
            case 'iteration_4':
              var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_one : data.combination_three);
              break
          }
          break;
        case 'regions':
          switch(Iteration){
            case 'iteration_3':
              var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_six : data.combination_eight);
              break;
            case 'iteration_4':
              var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_five : data.combination_seven);
              break
          }
          break;
        case 'countries':
          switch(Iteration){
          case 'iteration_3':
            var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_ten : data.combination_twelve);
            break;
          case 'iteration_4':
            var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_nine : data.combination_eleven);
    
            break
        }
        break;
      }
*/}



function FreshWaterTwo(ChartCharacteristics,data) {
  this.data=data;
  this.type=ChartCharacteristics[0]["type"];
  this.label=ChartCharacteristics[0]["label"];
  this.borderColor=ChartCharacteristics[0]["borderColor"];
  this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
  
}

const [state, setState] = useState({
  select: {
    GraficaType:'group',
    scenathon_id:'6',
    Iteration:'4',
  }
 
});

const [json, setJson] = useState([]);
var data = null;


useEffect(() => {
  getFreshWaterTwo();
 }, [state]);


 const getFreshWaterTwo = async () => 
 {
 
   try {   
     const body =state;
    const response = await fetch("https://server-fableson.wl.r.appspot.com/freshwater2"+JSON.stringify(body));
    const  jsonAux =  await response.json();
   setJson(jsonAux);
   } catch (error) {
     console.error(error)
   }
 }


 const handleChange = e => {
  
  var group = state.select.GraficaType;
  var scenathon = state.select.scenathon_id;
  var iteration = state.select.Iteration;
  
  if(e.target.name=="scenathon_id"){
    switch (e.target.value) {
      case '6':
        iteration=state.select.Iteration=="1"? "3":"4";
        scenathon="6";
          break;
      case '5':
       scenathon="5";
       iteration=state.select.Iteration=="3"? "1":"2";
          break;     
  }
  }else{
   
    group= e.target.name=="GraficaType"? e.target.value: state.select.GraficaType;
    iteration=e.target.name=="Iteration"?scenathon=="6" ? e.target.value==="after"? "4":"3" : e.target.value==="after"? "2":"1":state.select.Iteration;
  }
  
  setState({
    select: {
      GraficaType: group,
      scenathon_id:scenathon,
      Iteration:iteration,
  
      }
  
   
  });
  
    }

    const converter = () => {

      
      var dataSum=[];
var freshWater=[];
var labels=[];
var nameCounty=state.select.GraficaType==="regions"?"R_AFR":"Argentina";

if (json != null) {
  json.map((item) => {
    if (!labels.includes(item.Year)) 
    {
      labels.push(item.Year);
    }
    dataSum.push(item.sum);
    if (nameCounty!=item.Country) {
    
      var fresh = new FreshWaterTwo(CountryCharacteristics[nameCounty], dataSum);
      freshWater.push(fresh);
        nameCounty=item.Country;
       
      
        dataSum=[];
        dataSum.push(item.sum);
    }
  });


}
var dataAux = {
  labels:labels,
  datasets:freshWater
};
data=dataAux;
    }
    

  const steps = [
    {
      target: ".graph",
      content: "Distribution of freshwater use for crop irrigation and livestock production by country.",
      title: "Fresh Water Use 2",
        styles: {
          //this styles override the styles in the props  
          options: {
            textColor: "black"
          }
        },
        locale: { 
          next: <span>End</span>,
        },
        placement: "top"
    }
  ]

 
      return (
<Container fluid>
<div>
<ComboBox onChange={handleChange}/>
{converter()}
</div>
    <Tour stepsP={steps}/>
            <Row  >
              <Col >
              <div className="graph" style={{height: "100vh",width:"70vw"}}>
            
              <BarChart data={data}
                  title="Fresh Water Use 2"
                  labelposition="bottom"
                  aspectRatio={false}/>
                
                  </div>
              </Col>
              <Col>
              <div style={{borderStyle:'solid', textAlign:'center', height: "75vh"}}>
              {/** 
              <LeafletMap
                
               // countriesData = {dataAux}
              />
              */}
              </div>
              </Col>
            </Row>
          </Container>
          );
}

//Prueba
{/**
const convertir=(props) => {
    var labels = [];

    var Fresh_Water_Argentina = [];
    var Fresh_Water_Australia = [];
    var Fresh_Water_Brazil = [];
    var Fresh_Water_Canada = [];
    var Fresh_water_China = [];
    var Fresh_water_Colombia = [];
    var Fresh_Water_Ethiopia = [];
    var Fresh_Water_India = [];
    var Fresh_water_Indonesia = [];
    var Fresh_water_Malaysia = [];
    var Fresh_water_Mexico = [];
    var Fresh_water_Rest_of_Asia_and_Pacific = [];
    var Fresh_water_Rest_of_Central_and_South_America = [];
    var Fresh_Water_Rest_of_European_Union = [];
    var Fresh_Water_Rest_of_North_Africa_Middle_East_and_central_Asia = [];
    var Fresh_water_Rest_of_Sub_Saharan_Africa = []; //We changed - to _
    var Fersh_Water_Rest_of_Europe_non_EU28 = [];
    var Fresh_Water_Russia = [];
    var Fresh_Water_USA = [];

    var Fresh_Water_Otros = [];

    if(props != undefined){

      //Fresh_Water is blue water/ million cubic metres in the JSON 
        props.map((item) => {
            if(item.c_country_t==="Argentina"){
                  Fresh_Water_Argentina.push(item.Blue_Water); 
               }else if(item.c_country_t==="Australia"){
                  Fresh_Water_Australia.push(item.Blue_Water); 
               }else if(item.c_country_t==="Brazil")
               {
                  Fresh_Water_Brazil.push(item.Blue_Water); 
               }else if(item.c_country_t==="Canada")
               {
                  Fresh_Water_Canada.push(item.Blue_Water); 
               }else if(item.c_country_t==="China")
               {
                  Fresh_water_China.push(item.Blue_Water); 
               }else if(item.c_country_t==="Colombia")
               {
                  Fresh_water_Colombia.push(item.Blue_Water); 
               }else if(item.c_country_t==="Ethiopia")
               {
                  Fresh_Water_Ethiopia.push(item.Blue_Water); 
               }else if(item.c_country_t==="India")
               {
                  Fresh_Water_India.push(item.Blue_Water); 
               }else if(item.c_country_t==="Indonesia")
               {
                  Fresh_water_Indonesia.push(item.Blue_Water); 
               }else if(item.c_country_t==="Malaysia")
               {
                  Fresh_water_Malaysia.push(item.Blue_Water); 
               }
               else if(item.c_country_t==="Mexico")
               {
                  Fresh_water_Mexico.push(item.Blue_Water); 
               }
               else if(item.c_country_t==="Rest of Asia and Pacific")
               {
                  Fresh_water_Rest_of_Asia_and_Pacific.push(item.Blue_Water); 
               }
               else if(item.c_country_t==="Rest of Central and South America")
               {
                  Fresh_water_Rest_of_Central_and_South_America.push(item.Blue_Water); 
               }
               else if(item.c_country_t==="Rest_of_European_Union")
               {
                  Fresh_Water_Rest_of_European_Union.push(item.Blue_Water); 
               }else if(item.c_country_t==="Rest of North Africa Middle East and central Asia")
               {
                  Fresh_Water_Rest_of_North_Africa_Middle_East_and_central_Asia.push(item.Blue_Water); 
               }else if(item.c_country_t==="Rest of Sub-Saharan Africa")
               {
                  Fresh_water_Rest_of_Sub_Saharan_Africa.push(item.Blue_Water); 
               }else if(item.c_country_t==="Rest of Europe non EU28")
               {
                  Fersh_Water_Rest_of_Europe_non_EU28.push(item.Blue_Water); 
               }else if(item.c_country_t==="Russia")
               {
                  Fresh_Water_Russia.push(item.Blue_Water); 
               }else if(item.c_country_t==="USA")
               {
                  Fresh_Water_USA.push(item.Blue_Water); 
               }else if(item.c_country_t==="otros")
               {
                  Fresh_Water_Otros.push(item.Blue_Water); 
               }
           
               if(!labels.includes(item.Year))
               {
                  labels.push(item.Year);
               }
        });

    }


    const data = {

      labels: labels,
      datasets: [
        {
          //Aforestation ejemplo
          type: 'bar',
          label: 'Argentina',
          data: Fresh_Water_Argentina,
          fill: false,
          backgroundColor: '#faa75a',
          borderColor: '#71B37C',
          hoverBackgroundColor: '#71B37C',
          hoverBorderColor: '#71B37C',
          yAxisID: 'y-axis-1'
        },{
          type: 'bar',
          label: 'Australia',
          data: Fresh_Water_Australia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#7cb342',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },{
          type: 'bar',
          label: 'Brazil',
          data: Fresh_Water_Brazil,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#5a9bd4',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Canada',
          data: Fresh_Water_Canada,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#5e35b1',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'China',
          data: Fresh_water_China,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#00b6cb',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        }
        ,
        {
          type: 'bar',
          label: 'Colombia',
          data: Fresh_water_Colombia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#5e35b1',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Ethiophia',
          data: Fresh_Water_Ethiopia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#00b6cb',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'India',
          data: Fresh_Water_India,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#0072f0',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },  {
          type: 'bar',
          label: 'Indonesia',
          data: Fresh_water_Indonesia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#9e67ab',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },  {
          type: 'bar',
          label: 'Malaysia',
          data: Fresh_water_Malaysia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#0072f0',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Mexico',
          data: Fresh_water_Mexico,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '##ce7058',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Rest of Asia and Pacific',
          data: Fresh_water_Rest_of_Asia_and_Pacific,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#ffa800',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        }, {
          type: 'bar',
          label: 'Rest of Central and South America',
          data: Fresh_water_Rest_of_Central_and_South_America,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#ec407a',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },{
          type: 'bar',
          label: 'Rest of European Union',
          data: Fresh_Water_Rest_of_European_Union,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#7ac36a',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },{
          type: 'bar',
          label: 'Rest of North Africa Middle East and central Asia',
          data: Fresh_Water_Rest_of_North_Africa_Middle_East_and_central_Asia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#f10096',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Rest of Sub-Saharan Africa',
          data: Fresh_water_Rest_of_Sub_Saharan_Africa,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#ffa800',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Rest os Europe non EU28',
          data: Fersh_Water_Rest_of_Europe_non_EU28,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#5e35b1',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },{
          type: 'bar',
          label: 'Russia',
          data: Fresh_Water_Russia,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#0390d0',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },{
          type: 'bar',
          label: 'USA',
          data: Fresh_Water_USA,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#f10096',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Otros',
          data: Fresh_Water_Otros,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#f66d00',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-1'
        }
        
      ]

    };

    return data
     */}


    


export default DrawFreshWater2