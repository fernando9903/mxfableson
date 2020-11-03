import React, { Component } from 'react';


import ComboBox from '../components/ComboBox'

import ComboBox3 from '../components/ComboBox3'
import Aside from '../components/Aside';
import Dashboard from '../components/Dashboard'
import NewSidemenu from '../components/NewSidemenu';

//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'
import GlobalTargets from '../pages/GlobalTargets'

import ProtectedAreaByType from '../pages/ProtectedAreaByType'
import LandCover from '../pages/LandCover'
import FoodEnergyIntakePerCapita from '../pages/FoodEnergyIntakePerCapita'
import FoodEnergyIntakePerCapita2 from '../pages/FoodEnergyIntakePerCapita2'
import FreshWaterUse from '../pages/FreshWaterUse'
import NetForestCoverChange2 from '../pages/NetForestCoverChange2'
import GreenHouse2 from '../pages/GreenHouse2'

import GreenHouseOne from '../pages/GreenHouseOne'
import FreshWaterTwo from '../pages/FreshWaterTwo'
import TradeReport from '../pages/TradeReport'

import styled from 'styled-components';

import BannerLifeOnLand from '../assets/banners/Mesa de trabajo 19.png';
import BannerCleanWater from '../assets/banners/Mesa de trabajo 8.png';
import BannerZeroHunger from '../assets/banners/Mesa de trabajo 2.png';
import BannerClimateAction from '../assets/banners/Mesa de trabajo 16.png';

{/*import NetForestCoverChangeInfoA from '../pages/NetForestCoverChangeInfo1';
import NetForestCoverChangeInfo2 from '';
import FreshWaterUseInfo1 from '';
import FreshWaterUseInfo2 from '';
import GreenHouseGasEmissionsInfo1 from '';
import GreenHouseGasEmissionsInfo2 from '';
import FoodEnergyIntakePerCapitaInfo1 from '';
import FoodEnergyIntakePerCapitaInfo2 from '';*/}

const Styles = styled.div`
.header{

overflow:hidden;
  background-color: white;
  color: white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 50px;
  margin: 0;
  height: 100px;
  margin-top:20px;

  transition: all 0.5s ease;
  

  width: 100%;
  



.banner{
  max-width:100%;
max-height:100%;
transition: all 0.5s ease;
}



.container{
    display:flex;
   
    border:5px solid green;
  
}



`;
 

class Scenathon extends Component {
    constructor(props) {
        super(props);
        this.dash= <GlobalTargets combinacion={this.state}></GlobalTargets>;
        this.combobox=<ComboBox onChange={this.handleChange}/>;
        this.fableRef=props.fableRef;
    }
    state = {
        select: {
            GraficaType:'group',
            Iteration:'iteration_4',
            Scenario:'Sustainaible',
            Year:'2000'
        },
        dashboard:"Global Target Summary"
    }
    
  
    
     

    //recibe valor de class component "ComboBox" 
    handleChange = e => {
      

       if(e.target==undefined)
       {
          
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciba un valor new
                GraficaType:this.state.select.GraficaType,
                Iteration:this.state.select.Iteration,
                Scenario:this.state.select.Scenario,
                Year:this.state.select.Year
            },
            dashboard:e
           
        }) 
       }else{
          this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciba un valor new
                ...this.state.select,
                
                [e.target.name]: e.target.value
            },
            dashboard:e.target.value
           
        }) 
       }

        
        

    }

    selectDashboard(){
    
        switch(this.state.dashboard){
            case 'Global Target Summary': 
                this.combobox=<ComboBox onChange={this.handleChange}/>
               this.dash=<GlobalTargets combinacion={this.state}/>;
              break;
            case 'Net Forest Cover Change 1': 
            this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<NetForestCoverChange combinacion={this.state}/>;
              document.getElementById("banner").src=BannerLifeOnLand;
              //document.getElementById("info").src="NetForestCoverChangeInfoA";
              break;
            case 'Net Forest Cover Change 2':
                this.combobox=<ComboBox3 onChange={this.handleChange}/>
                this.dash=<NetForestCoverChange2 combinacion={this.state}/>;
                document.getElementById("banner").src=BannerLifeOnLand;
                break;
            case 'Biodiversity':
                this.combobox=null;  
                this.dash=<Biodiversity/>;
                document.getElementById("banner").src=BannerLifeOnLand;
            break;
            case 'Protected Areas by Type':
             //  <ComboBox onChange={this.handleChange}/>
             this.combobox=null;
                this.dash=<ProtectedAreaByType/>;
                document.getElementById("banner").src=BannerLifeOnLand;
            break;
            case 'Land Cover':
               // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox=null;
                this.dash=<LandCover combinacion={this.state}/>;
                document.getElementById("banner").src=BannerLifeOnLand;
            break;
            case 'Fresh Water 1':
              //  this.combobox=<ComboBox onChange={this.handleChange}/>
              this.combobox=null;  
              this.dash=<FreshWaterUse combinacion={this.state}/>;
                document.getElementById("banner").src=BannerCleanWater;
            break;
            case 'Fresh Water 2':
              //  this.combobox=<ComboBox onChange={this.handleChange}/>
              this.combobox=null; 
                this.dash=<FreshWaterTwo combinacion={this.state}/>;
                document.getElementById("banner").src=BannerCleanWater;
            break;
            case 'Green House Gas (GHG) Emissions 1':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouseOne combinacion={this.state}/>;
                document.getElementById("banner").src=BannerClimateAction;
            break;
            case 'Green House Gas (GHG) Emissions 2':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouse2 combinacion={this.state}/>;
                document.getElementById("banner").src=BannerClimateAction;
            break;
            case 'Food Energy Intake Per Capita 1':
             //   this.combobox=<ComboBox2 onChange={this.handleChange}/>
             this.combobox=null;  
              
             this.dash=<FoodEnergyIntakePerCapita/>;
             document.getElementById("banner").src=BannerZeroHunger;
            break;
            case 'Food Energy Intake Per Capita 2':
                this.combobox=null;   
             this.dash=<FoodEnergyIntakePerCapita2/>;
             document.getElementById("banner").src=BannerZeroHunger;
            break;
            case 'Importers':
                this.combobox=null;   
             this.dash=<TradeReport/>;
            break;
            case 'Trade Report':
                this.dash=<TradeReport/>;
            break;
           
          }
    }

    render() {
        return (

            <Styles>
            <div class="header" ref={this.fableRef}>
        <img class="banner" id="banner"></img>
        </div>
            <div className="container-fluid" style={{display: 'flex'}}>
               <div>
                 <Aside onChange={this.handleChange}/>  
               </div>
            
          
                <div>
                 {/*    <Dashboard metodo={this.handleChange} data={this.state} />*/}
                </div>
                <div>
                {this.selectDashboard()}
                {this.combobox}
                {this.dash}
                </div>
                <div class="info" id="info"></div>
            </div>
            </Styles>
           
        )
    }
}
export default Scenathon;   

