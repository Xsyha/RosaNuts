import React from "react";
import "./style.css";
import { ReactComponent as LogoImg } from "../../images/logo.svg";
// import imgName from 'img src'

export const Logo = (props) => {
  return (
    <a href={props.url} className="logo"><LogoImg/></a>
  )
}