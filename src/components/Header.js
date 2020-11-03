import React from 'react';
import "../css/App.css"
import styled from 'styled-components';
import INCON15 from '../assets/ICONOS-15.png';
import { Icon } from 'leaflet';
import BannerLifeOnLand from '../assets/banners/Mesa de trabajo 19.png';
import BannerCleanWater from '../assets/banners/Mesa de trabajo 8.png';
import BannerZeroHunger from '../assets/banners/Mesa de trabajo 2.png';
import BannerClimateAction from '../assets/banners/Mesa de trabajo 16.png';
const Styles = styled.div`
header{


overflow:hidden;
  background-color: white;
  color: white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 50px;
  margin: 0;
  height: 100px;
  margin-top:25px;
  


.banner{
  max-width:100%;
max-height:100%;
}


}





`;

export const Header = () => {

    return (
        <Styles>
            <header>
              <img src={BannerLifeOnLand} class="banner"></img>
            </header>
        </Styles>

    );
};

export default Header;