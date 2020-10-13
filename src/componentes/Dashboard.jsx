/*import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
.contenedor-selects{
  background-color: #528D93 ;
}
.contenedor-selects-select {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;


function Dashboard (props) {

    
        const{metodo}=props
        return (
          
            <div className="contenedor-selects">
                <select  name="dashboard" onChange={metodo}>
                    <option value="gts">Global Target Summary </option>
                    <option value="ntch">Net Forest Cover Change(1)</option>
                    <option value="ntch2">Net Forest Cover Change(2)</option>
                    <option value="biodeversity">Biodeversity</option>
                    <option value="pabt">Protected areac by type </option>
                    <option value="lc">Land Cover</option>
                    <option value="fwu">Fresh water use (1)</option>
                    <option value="fwu2">Fresh water use (2)</option>
                    <option value="gge">GreenHouse Gas(GHG) Emissions(1)</option>
                    <option value="gge2">GreenHouse Gas(GHG) Emissions(2)</option>
                    <option value="feipc">Food energy intake per capita (1)</option>
                    <option value="feipc2">Food energy intake per capita (2)</option>
                    
                </select>
                
                
    
            </div>

        )
    
}
export default Dashboard;

*/
import React, { useState} from "react";


const Dashboard = (props) =>  {
  const{metodo}=props
  const options = [
    "Global Target Summary",
    "Net Forest Cover Change(1)",
    "Net Forest Cover Change(2)",
    "Biodiversity",
    "Protected areas by type",
    "Land Cover",
    "Fresh water use (1)",
    "Fresh water use (2)",
    "GreenHouse Gas(GHG) Emissions(1)",
    "GreenHouse Gas(GHG) Emissions(2)",
    "Food energy intake per capita (1)",
    "Food energy intake per capita (2)"
  ];
  

  var [selectedOption, setSelectedOption] = useState(options[0]);

  
  return (
    <div className="Dashboard">
      <select
        name='dashboard'
        value={selectedOption}
        onChange={(e) => {
        setSelectedOption(e.target.value);
        metodo(e);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>{selectedOption}</span>
    </div>
  )
}
export default Dashboard;




