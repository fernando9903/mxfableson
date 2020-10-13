import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.contenedor selects{
  background-color: #528D93 ;
}
.conetenedor-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;

function ComboBox (props) {

    
        const{onChange}=props
        return (
            <Styles>

            <div className="contenedor-selects">
                <br></br>
                <select  name="Scenario" onChange={onChange}>
                    <option value="Sustainaible">Sustainaible</option>
                    <option value="Current_trend">Current trend</option>
                    
                </select>
                <br></br>
                <select  name="Iteration" onChange={onChange}>
                    <option value="iteration_4">iteration:4</option>
                    <option value="iteration_3">iteration:3</option>
                </select>
                <br></br>
                 <select  name="Year" onChange={onChange}>
                    <option value="2000">2000</option>
                    <option value="2005">2005</option>
                    <option value="2010">2010</option>
                    <option value="2015">2015</option>
                    <option value="2020">2020</option>
                    <option value="2025">2025</option>
                    <option value="2030">2030</option>
                    <option value="2035">2035</option>
                    <option value="2040">2040</option>
                    <option value="2045">2045</option>
                    <option value="2050">2050</option>

                </select>
                <br></br>
            </div>
    </Styles>


        )
    
}
export default ComboBox;

