import React from "react";
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {Outlet} from 'react-router-dom'
type Props = {};

const MainTemplate:React.FC = (props: Props) => {
  return <div className="main">
        <div className="header-container">
          <HeaderComponent/>
        </div>
        <div className="body-container">
          <Outlet/>
        </div>
        <div className="footer-container">
          <FooterComponent/>
        </div>
  </div>;
};

export default MainTemplate;
