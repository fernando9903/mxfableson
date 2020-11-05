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
//assets
import styled from 'styled-components';
import BannerLifeOnLand from '../assets/banners/Mesa de trabajo 19.png';
import BannerCleanWater from '../assets/banners/Mesa de trabajo 8.png';
import BannerZeroHunger from '../assets/banners/Mesa de trabajo 2.png';
import BannerClimateAction from '../assets/banners/Mesa de trabajo 16.png';
import SustainableImporter from '../pages/SustainableImporter'
import SustainableNetExporter from './SustainableNetExporter'
import CurrenTrendExporter from './CurrenTrendExporter'
import CurrenTrendImporter from './CurrenTrendImporter'
import BannerCustom from '../assets/banners/Mesa de trabajo 21.png';
import DashboardCover from '../assets/DashboardCover.png';

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


}


#container-fluid{
    
   background: url(${DashboardCover});
   background-size:cover;
}

`;


class Scenathon extends Component {
    constructor(props) {
        super(props);
        this.fableRef = props.fableRef;
    }
    state = {
        select: {
            GraficaType: 'group',
            Iteration: 'before',
            scenathon_id: '6',
            Year: '2000'
        },
        dashboard: "Background"
    }





    //recibe valor de class component "ComboBox" 
    handleChange = e => {
        if (e.target === undefined) {

            this.setState({
                select: {
                    //el next code evitara que se sobrescriba cuando reciba un valor new
                    GraficaType: this.state.select.GraficaType,
                    Iteration: this.state.select.Iteration,
                    scenathon_id: this.state.select.scenathon_id,
                    Year: this.state.select.Year
                },
                dashboard: e

            })
        } else {

            this.setState({
                select: {
                    //el next code evitara que se sobrescriba cuando reciba un valor new
                    ...this.state.select,

                    [e.target.name]: e.target.value
                },
                dashboard: e.target.value

            });
        }
    }
    selectDashboard() {
        switch (this.state.dashboard) {
            case 'Background':
               //document.getElementById('container-fluid').style.backgroundImage="url(../assets/DashboardCover.png)"; ;
                break;
            case 'Global Target Summary':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <GlobalTargets combinacion={this.state} />;
                try {
                    document.getElementById("banner").src = BannerCustom;     
                } catch (Error) {
                }
                break;
            case 'Net Forest Cover Change 1':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = <ComboBox onChange={this.handleChange} />
                this.dash = <NetForestCoverChange combinacion={this.state} />;
                break;
            case 'Net Forest Cover Change 2':
                document.getElementById('container-fluid').style.background="transparent";
                // this.combobox=<ComboBox3 onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <NetForestCoverChange2 />;
                document.getElementById("banner").src = BannerLifeOnLand;
                break;
            case 'Biodiversity':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <Biodiversity />;
                document.getElementById("banner").src = BannerLifeOnLand;
                break;
            case 'Protected Areas by Type':
                document.getElementById('container-fluid').style.background="transparent";
                //  <ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <ProtectedAreaByType />;
                document.getElementById("banner").src = BannerLifeOnLand;
                break;
            case 'Land Cover':
                document.getElementById('container-fluid').style.background="transparent";
                // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <LandCover />;
                break;
            case 'Fresh Water 1':
                document.getElementById('container-fluid').style.background="transparent";
                //  this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <FreshWaterUse />;
                document.getElementById("banner").src = BannerCleanWater;
                break;
            case 'Fresh Water 2':
                document.getElementById('container-fluid').style.background="transparent";
                //  this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <FreshWaterTwo />;
                break;
            case 'Green House Gas (GHG) Emissions 1':
                document.getElementById('container-fluid').style.background="transparent";
                //   this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <GreenHouseOne />;
                document.getElementById("banner").src = BannerClimateAction;
                break;
            case 'Green House Gas (GHG) Emissions 2':
                document.getElementById('container-fluid').style.background="transparent";
                // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox = null;
                this.dash = <GreenHouse2 />;
                document.getElementById("banner").src = BannerClimateAction;
                break;
            case 'Food Energy Intake Per Capita 1':
                document.getElementById('container-fluid').style.background="transparent";
                //   this.combobox=<ComboBox2 onChange={this.handleChange}/>
                this.combobox = null;

                this.dash = <FoodEnergyIntakePerCapita />;
                document.getElementById("banner").src = BannerZeroHunger;
                break;
            case 'Food Energy Intake Per Capita 2':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <FoodEnergyIntakePerCapita2 />;
                document.getElementById("banner").src = BannerZeroHunger;
                break;
            case 'Sustainable_next_exporters':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <SustainableNetExporter />;
                break;
            case 'Sustainable_next_importers':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <SustainableImporter />;
                break;
            case 'Current_trend_next_exporters':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <CurrenTrendExporter />;
                break;
            case 'Current_trend_next_importers':
                document.getElementById('container-fluid').style.background="transparent";
                this.combobox = null;
                this.dash = <CurrenTrendImporter />;
                break;
            default: this.combobox = null;
            document.getElementById('container-fluid').style.background="transparent";
                this.dash = <GlobalTargets combinacion={this.state} />;
        }
    }
    render() {
        return (

            <Styles>
                <div class="header" ref={this.fableRef}>
                    <img class="banner" id="banner" alt=""></img>
                </div>
                <div id="container-fluid" className="container-fluid" style={{ display: 'flex' }}>

                    <div>
                        <NewSidemenu onChange={this.handleChange} />
                        {/* <Aside onChange={this.handleChange}/>   */}
                    </div>
                    <div>
                        {this.selectDashboard()}
                        {this.combobox}
                        {this.dash}
                    </div>

                </div>
            </Styles>

        )
    }

  


    
}
export default Scenathon;   
