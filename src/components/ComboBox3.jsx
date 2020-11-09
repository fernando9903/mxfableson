import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import '../css/ComboBox.css';

import '../css/CheckBox.css';
import CheckBoxes from '../components/CheckBoxes.js'

function ComboBox (props) {

    
        const{onChange}=props
        return (
           

            <div className="contenedor-selects">
                <br></br>
                <Form>
                  <select class="selectBox" name="Scenario" onChange={onChange} >
                  <option value="" disabled selected hidden>Scenario</option>
                    <option  value="Sustainaible">Sustainable</option>
                    <option  value="Current_trend">Current trend</option>
                  </select>
                </Form>

              
                <br></br>
                <Form>
                  <select  class="selectBox" name="Iteration" onChange={onChange} >
                  <option value="" disabled selected hidden>Iteration</option>
                    <option  value="iteration_4">after</option>
                    <option  value="iteration_3">before</option>
                  </select>
                </Form>

               
              

               <CheckBoxes/>
            </div>


        )
    
}


export default ComboBox;

