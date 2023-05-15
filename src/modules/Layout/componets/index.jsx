import React from "react";

import "./style.css";

import { Header } from "../../../components/Header";

export const Layout = ({children}) => {
  return (    
    <React.Fragment>
      <Header>
        
      </Header>
      {children}
      <footer>
        
      </footer>
    </React.Fragment>
  );
}
