import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';
import { Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2} from './componentes/Jumbotron_2'
import { Jumbotron_3} from './componentes/Jumbotron_3'
import { Jumbotron_fin} from './componentes/Jumbotron_fin'


class App extends Component {  
  render(){
    return (
    <React.Fragment>
      <Jumbotron/> 
      <Navbar/>
        <div id="About">
             <About/>
        </div>
        <Jumbotron_2/>
        <Jumbotron_3/>
        <Jumbotron_fin/>
         
    </React.Fragment>
  )
}};
export default App;

