import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart.jsx";

import ComboBox from '../components/ComboBox';
import ChartCharacteristics from '../data/ChartCharacteristics.json';
const DrawLandCover = () => {




  function LanCover(ChartCharacteristics,data) {
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
    getLandCover();
  }, [state]);



  const getLandCover = async () => 
  {
    try {   
      const body =state;
     const response = await fetch("http://localhost:5000/landcover"+JSON.stringify(body));
     const  jsonAux =  await response.json();
    setJson(jsonAux);
    } catch (error) {
      console.error(error)
    }
  }

  const converter = () => 
  {
    var labels=[];
    var calcPasture=[];
    var calcCropland=[];
    var calcForest=[];
    var calcNewForest=[];
    var calcOtherLand=[];
    var calcUrban=[];
    var dataSet=[];

    console.log(json);
    if (json != null ) {
   
      json.map((item) => {
          labels.push(item.Year);
          calcPasture.push(item.CalcPasture);
          calcCropland.push(item.CalcCropland);
          calcForest.push(item.CalcForest);
          calcNewForest.push(item.CalcNewForest);
          calcOtherLand.push(item.CalcOtherLand);
          calcUrban.push(item.CalcUrban);
        
      });

      var landCover = new LanCover(ChartCharacteristics["calcPasture"],calcPasture);
      dataSet.push(landCover);
       landCover = new LanCover(ChartCharacteristics["calcCropland"],calcCropland);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcForest"],calcForest);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcNewForest"],calcNewForest);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcOtherLand"],calcOtherLand);
      dataSet.push(landCover);
      landCover = new LanCover(ChartCharacteristics["calcUrban"],calcUrban);
      dataSet.push(landCover);
 
 
      var dataAux = {
        labels:labels,
        datasets:dataSet
    };
    data=dataAux;
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
    



 {/* 
    const convertir=(props)=> {
 
        var dataUno=[]
        var dataDos=[]
        var dataTres=[]
        var dataCuatro=[]
        var dataCinco=[]
        var dataSeis=[]
        var labels=[]
      
          
         props.map((item) => {
          dataUno.push(item.Pasture);
          dataDos.push(item.Crop_land);
          dataTres.push(item.Forest);
          dataCuatro.push(item.New_forest);
          dataCinco.push(item.Other_land);
          dataSeis.push(item.Urban);
          labels.push(item.Year);
          
        });
       
        const data={
          labels:labels,
           datasets:[
             {
              label:"Pasture",
              data:dataUno,
              fill:false,
              type:"bar",
              backgroundColor:"Green",
              borderColor:"Green",
              hoverBackgroundColor:"Green",
              hoverBorderColor:"Green",
              yAxisID:"y-axis-1"
             },
             {
              label:"Crop Land",
              data:dataDos,
              fill:false,
              type:"bar",
              backgroundColor:"Red",
              borderColor:"Red",
              hoverBackgroundColor:"Red",
              hoverBorderColor:"#Red",
              yAxisID:"y-axis-1"
             },{
                label:"Forest",
                data:dataTres,
                fill:false,
                type:"bar",
                backgroundColor:"Yellow",
                borderColor:"Yellow",
                hoverBackgroundColor:"Yellow",
                hoverBorderColor:"Yellow",
                yAxisID:"y-axis-1"
               },{
                label:"New Forest",
                data:dataCuatro,
                fill:false,
                type:"bar",
                backgroundColor:"Orange",
                borderColor:"Orange",
                hoverBackgroundColor:"Orange",
                hoverBorderColor:"Orange",
                yAxisID:"y-axis-1"
               },{
                label:"Other Land",
                data:dataCinco,
                fill:false,
                type:"bar",
                backgroundColor:"Blue",
                borderColor:"Blue",
                hoverBackgroundColor:"Blue",
                hoverBorderColor:"Blue",
                yAxisID:"y-axis-1"
               },{
                label:"Urban",
                data:dataSeis,
                fill:false,
                type:"bar",
                backgroundColor:"purple",
                borderColor:"purple",
                hoverBackgroundColor:"purple",
                hoverBorderColor:"purple",
                yAxisID:"y-axis-1"
               }
           ]
        }
      
       return data
      } 

 */}





    //let dataAux;
    //const { GraficaType, Iteration, Scenario } = props.combinacion.select;
  {/*
    switch(GraficaType){
      case 'group':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_two : data.combination_four);
            break;
          case 'iteration_4':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_one : data.combination_three);
            break
        }
        break;
      case 'regions':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_six : data.combination_eight);
            break;
          case 'iteration_4':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_five : data.combination_seven);
            break
        }
        break;
      case 'countries':
        switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_ten : data.combination_twelve);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_nine : data.combination_eleven);
  
          break
      }
      break;
    }
 */}





    return (
     <div>

    <div >
    <ComboBox onChange={handleChange}/>
    {converter()}
    </div>

    <div style={{height: "100vh",width:"70vw"}}>
    <BarChart data={data}
    title="Land Cover"
    labelposition='top'
   aspectRatio={false}/>
    </div>

   </div>
    )
  }
  

  export default DrawLandCover;