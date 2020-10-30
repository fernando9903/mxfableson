import React, { useState, useEffect } from "react";
import BarChart from "../componentes/BarChart";
import Tour from "../componentes/Tour";
import ComboBox from '../componentes/ComboBox';
import ChartCharacteristics from '../data/ChartCharacteristics.json';

//filter map
//nfch=NetForestCoverChange

const DrawFreshWaterUse= (props) => {

  {/*
  let dataAux;

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_2 : data.combination_4);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_3);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_6 : data.combination_8);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_5 : data.combination_7);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combination_10 : data.combination_12);
        break;
      case 'iteration_4':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combination_9 : data.combination_11);

        break
    }
    break;
  }
  const steps = [
    {
      target: ".graph",
      content: "Fresh water use for irrigation and livestock. The high demand of water continues to be expected the following decades, not showing much variation through the years.",
      title: "Fresh Water Use 1",
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


  return <div style={{height: "100vh",width:"70vw"}}>
    <Tour stepsP={steps}/>
    <div className="graph" style={{height: "100vh",width:"70vw"}}>

    <BarChart data={dataAux}
  */}



  function FreshWaterUse(ChartCharacteristics,data) {
    this.data=data;
    this.type=ChartCharacteristics[0]["type"];
    this.label=ChartCharacteristics[0]["label"];
    this.borderColor=ChartCharacteristics[0]["borderColor"];
    this.backgroundColor=ChartCharacteristics[0]["backgroundColor"];
    
  }
  const [json, setJson] = useState([]);
  var data = null;
  
  const [state, setState] = useState({
    select: {
      GraficaType:'group',
      scenathon_id:'6',
      Iteration:'4',
    }
   
  });

  useEffect(() => {
   getFreshWater();
  }, [state]);


  const getFreshWater = async () => 
   {
    
     try {   
       const body =state;
      const response = await fetch("http://localhost:5000/freshwater1"+JSON.stringify(body));
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
  

        var labels=[];
        var sum=[];
    
       
        var dataSet=[]
    
    
        if (json != null ) {
       
          json.map((item) => {
              labels.push(item.Year);
              sum.push(item.sum);
            
          });
    
          var freshWaterUse = new FreshWaterUse(ChartCharacteristics["million_cubic_metres"],sum);
          dataSet.push(freshWaterUse);
         
          var dataAux = {
            labels:labels,
            datasets:dataSet
        };
        data=dataAux;
    
    
        }
      
      }
    

  const steps = [
    {
      target: ".graph",
      content: "Fresh water use for irrigation and livestock. The high demand of water continues to be expected the following decades, not showing much variation through the years.",
      title: "Fresh Water Use 1",
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

<div>
  <Tour stepsP={steps}/>
  <div>
    <ComboBox onChange={handleChange}/>
    {converter()}
  </div>
   
  <div className="graph" style={{height: "100vh",width:"70vw"}}>
    <BarChart data={data}
    aspectRatio={false}
    labelposition="top"
    title="Fresh Water use"/>
  </div>
</div>
  );
}






{/* 
const convertir=(props)=> {
 
    var dataUno=[]
   
    var labels=[]
      
     props.map((item) => {
      dataUno.push(item.million_cubic_metres);
     labels.push(item.Year);
      
    });
   
    const data={
      labels:labels,
       datasets:[
         {
          label:"million cubic metres",
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

*/}







export default DrawFreshWaterUse;
