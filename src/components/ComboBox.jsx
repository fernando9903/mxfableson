import React from 'react';
import { Form } from 'react-bootstrap';

import '../css/ComboBox.css';
import '../css/CheckBox.css';

function ComboBox (props) {

    
        const{onChange}=props
        return (
            
            <div class="contenedor-selects">
                <br></br>
                <select class="selectBox" name="scenathon_id" onChange={onChange}>
                <option value="" disabled selected hidden>Scenario</option>
                    <option  value="6">Sustainaible</option>
                    <option  value="5">Current trend</option>
                    
                </select>
                <br></br>
                <select class="selectBox"  name="Iteration" onChange={onChange}>
                <option value="" disabled selected hidden>Trade Adjustment</option>
                    <option  value="after">After Iteration</option>
                    <option  value="before">Before Iteration</option>
                </select>
                <br></br>
                <Form>
                  <select class="selectBox" name="GraficaType" onChange={onChange}>
                  <option value="" disabled selected hidden>Group</option>
                  <option  value="group">Group</option>
                    <option  value="regions">ALL ROW regions</option>
                    <option  value="countries">ALL FABLE countries</option>
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
                    <option value="group">Group</option>
                    <option value="regions">ALL ROW regions</option>
                    <option value="countries">ALL FABLE countries</option>
                </select>*/}
                <br></br>
            </div>
    


        )
    
}
export default ComboBox;

