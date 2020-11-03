import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import '../css/ComboBox.css';



function ComboBox(props) {


  const { onChange } = props
  return (


    <div className="contenedor-selects">
      <br></br>
      <select class="selectBox" name="scenathon_id" onChange={onChange}>
        <option class="selectOption" value="6">Sustainaible</option>
        <option class="selectOption" value="5">Current trend</option>

      </select>
      <br></br>
      <select class="selectBox" name="Iteration" onChange={onChange}>
        <option class="selectOption" value="after">after</option>
        <option class="selectOption" value="before">before</option>
      </select>
      <br></br>
      <Form>
        <select class="selectBox" name="Year" onChange={onChange} >
          <option class="selectOption" value="2000">2000</option>
          <option class="selectOption" value="2005">2005</option>
          <option class="selectOption" value="2010">2010</option>
          <option class="selectOption" value="2015">2015</option>
          <option class="selectOption" value="2020">2020</option>
          <option class="selectOption" value="2025">2025</option>
          <option class="selectOption" value="2030">2030</option>
          <option class="selectOption" value="2035">2035</option>
          <option class="selectOption" value="2040">2040</option>
          <option class="selectOption" value="2045">2045</option>
          <option class="selectOption" value="2050">2050</option>
        </select>
      </Form>

      {/*<select  name="Year" onChange={onChange}>
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

                    </select>*/}
      <br></br>
    </div>



  )

}
export default ComboBox;

