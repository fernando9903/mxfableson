import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'
import ComboBox2 from '../componentes/ComboBox2'


import Dashboard from '../componentes/Dashboard'
import TabSelector from '../componentes/TabSelector'

//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'
import GlobalTargets from '../pages/GlobalTargets'

import ProtectedAreaByType from '../pages/ProtectedAreaByType'
import LandCover from '../pages/LandCover'
import FoodEnergyIntakePerCapita from '../pages/FoodEnergyIntakePerCapita'
import FreshWaterUse from '../pages/FreshWaterUse'
import NetForestCoverChange2 from '../pages/NetForestCoverChange2'
import GreenHouse2 from '../pages/GreenHouse2'

import GreenHouseOne from '../pages/GreenHouseOne'
import FreshWaterTwo from '../pages/FreshWaterTwo'




 

class Scenathon extends Component {
    constructor(props) {
        super(props);
        this.dash= <GlobalTargets combinacion={this.state}></GlobalTargets>;
        this.combobox=<ComboBox onChange={this.handleChange}/>;
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
    
  
    
     

    //recive valor de class component "ComboBox" 
    handleChange = e => {
     
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciva un valor new
                ...this.state.select,
                [e.target.name]: e.target.value
                
            },
            [e.target.name]:e.target.value
           
        })
        

        
    }

    selectDashboard(state){
        console.log(state)
        switch(this.state.dashboard){
            case 'Global Target Summary': 
                this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<GlobalTargets combinacion={this.state}/>;
              break;
            case 'Net Forest Cover Change(1)': 
            this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<NetForestCoverChange combinacion={this.state}/>;
              break;
            case 'Net Forest Cover Change(2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<NetForestCoverChange2 combinacion={this.state}/>;
                break;
            case 'Biodiversity':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<Biodiversity combinacion={this.state}/>;
            break;
            case 'Protected areas by type':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<ProtectedAreaByType combinacion={this.state}/>;
            break;
            case 'Land Cover':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<LandCover combinacion={this.state}/>;
            break;
            case 'Fresh water use (1)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterUse combinacion={this.state}/>;
            break;
            case 'Fresh water use (2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterTwo combinacion={this.state}/>;
            break;
            case 'GreenHouse Gas(GHG) Emissions(1)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouseOne combinacion={this.state}/>;
            break;
            case 'GreenHouse Gas(GHG) Emissions(2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouse2 combinacion={this.state}/>;
            break;
            case 'Food energy intake per capita (1)':
                this.combobox=<ComboBox2 onChange={this.handleChange}/>
                this.dash=<FoodEnergyIntakePerCapita combinacion={this.state}/>;
            break;
            case 'Food energy intake per capita (2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<h1>Food energy intake per capita (2)</h1>;
            break;
            default: break;
          }
    }

   
  

   


    render() {
    
        return (
            
            <div className="container">
              
              
               
              
                 {/* componente de comboBox(opciones para el tipo de grafica)*/} 
                 <div className="Combo-Box">
                
                </div>
                
                <div>
                    <Dashboard metodo={this.handleChange}  data={this.state} />     
                </div>

  {/* componente de comboBox(opciones para el tipo de grafica)
                <div className="tab-selector">
                <TabSelector    data={this.state}/>         
                </div>
                */} 

                
{this.selectDashboard(this.state)}
              {this.combobox}
              
              
                {this.dash}
               
                
            
                

               

          
               

           

            
            </div>
        )
    }
}
export default Scenathon;   

