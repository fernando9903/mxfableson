import React from 'react';
import './css/App.css';
<<<<<<< HEAD
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import About1 from "./componentes/About1";
import About2 from "./componentes/About2";
import About3 from "./componentes/About3";
import Tour from "./componentes/Tour";
import About from './pages/About';
import { Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2}  from './componentes/Jumbotron_2'
import { Jumbotron_3 } from './componentes/Jumbotron_3'
import { Jumbotron_fin } from './componentes/Jumbotron_fin'
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css';
import Scenathon from './pages/Scenathon';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import BackgroundBlue from '../src/assets/background.jpg';
import steps from './componentes/TOUR_STEPS';
=======
import Navbar from "./components/Navbar";

import About1 from "./components/About1";
import About2 from "./components/About2";

import { Jumbotron } from './components/Jumbotron'
import { Jumbotron_2}  from './components/Jumbotron_2'
import { Jumbotron_3 } from './components/Jumbotron_3'
import { Jumbotron_fin } from './components/Jumbotron_fin'

import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css';
import Scenathon from './pages/Scenathon';


import { ACTIONS, EVENTS, STATUS } from 'react-joyride';


>>>>>>> 1549352518c5287126b2912f556d8231620fdc97

const ReactHint = ReactHintFactory(React)

const App = (props) => {
  
  const [currentValue, setCurrentValue] = React.useState("")

  const handleChangeAside = (value) => {
    setCurrentValue(value)
  }
    console.groupEnd();
    
    return (
        <React.Fragment>
        <div>
          <Tour stepsP={steps}/>
        </div>

        <div className="Nav">
          <Navbar references={this.references}/>
        </div>

            <Jumbotron/>

        <div className="About1" id="About1">
          <About1 aboutRef={this.references.fable}/>
        </div>
        <div id="Jumbotron_2" >
          <Jumbotron_2 />
        </div>


        <div className="Scenathon2020">
          <Scenathon className="Scenathon2020" id="Scenathon2020"/>




<Scenathon fableRef={this.references.scenathon2020}/>
{/*
 <div style={{display: 'flex'}}>
          <div>
            <Aside />
          </div>
          <div>
          <Scenathon/>
          </div>
        </div>
       

        

         

     
        <div className="app">

			<ReactHint autoPosition events delay={{show: 100, hide: 1000}} />
			<ReactHint persist
				attribute="data-custom"
				className="custom-hint"
				events={{click: true}}
				//onRenderContent={this.onRenderContent}
        //ref={(ref) => this.instance = ref}
        />
		</div>

        <div>
      </div>
        
 {/*
        
        <div data-rh="Este es el apartado About" data-rh-at="top" className="About">
                <About/>
              </div>
       <div id="Jumbotron_3" data-rh="Scenathon" data-rh-at="top" id="Scenathon">
          <Jumbotron_3 data-rh="Mensaje" data-rh-at="top"/>
      </div>*/}
        
        {/*


      
        
        */
        
        }
        
        
       
        <div id="Jumbotron_fin" data-rh="Copyright" data-rh-at="top" id="final">
          <Jumbotron_fin/>
        </div>
        

        
         
    </React.Fragment>
  )
};
export default App;

