import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import '../css/ComboBox.css';

import '../css/CheckBox.css';


function ComboBox (props) {

    
        const{onChange}=props
        return (
           

            <div className="contenedor-selects">
                <br></br>
                <Form>
                  <select class="selectBox" name="Scenario" onChange={onChange} >
                  <option value="" disabled selected hidden>Scenario</option>
                    <option  value="Sustainaible">Sustainaible</option>
                    <option  value="Current_trend">Current trend</option>
                  </select>
                </Form>

               {/*<select  name="Scenario" onChange={onChange}>
                    <option value="Sustainaible">Sustainaible</option>
                    <option value="Current_trend">Current trend</option>
                    
                  </select>*/}
                <br></br>
                <Form>
                  <select  class="selectBox" name="Iteration" onChange={onChange} >
                  <option value="" disabled selected hidden>Iteration</option>
                    <option  value="iteration_4">Iteration:4</option>
                    <option  value="iteration_3">Iteration:3</option>
                  </select>
                </Form>

                {/*<select  name="Iteration" onChange={onChange}>
                    <option value="iteration_4">iteration:4</option>
                    <option value="iteration_3">iteration:3</option>
                </select>*/}
                <br></br>
                <Form>
                  <select  class="selectBox"name="GraficaType" onChange={onChange} >
                  <option value="" disabled selected hidden>Group</option>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                  </select>
                </Form>

                <div class="comboBoxContainer">
                
                <label class="container">
                <input value="regions" type="checkbox"/>
                <p>ALL ROW regions</p>
                <span class="checkmark"></span>
                </label>

                <label class="container">
                <input  value="countries" type="checkbox"/>
                <p>ALL FABLE countries</p>
                <span class="checkmark"></span>
                </label>
              </div>

                 {/*<select  name="GraficaType" onChange={onChange}>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
              </select>*/}
                <br></br>
            </div>


        )
    
}
export default ComboBox;

