import React from "react";
import "./style.css";

import { Container } from "../Container";
import { Logo } from "../Logo";


export const Header = () => {
    return (
        <header className="header">
          <Container>
            <Logo url={'######'}/>
            <div class="head-right">
              <div class="top-head">
                <a href="mailto:info@domen.com" class="mail">info@domen.com</a>
                <a href="tel:+310123456789" class="tel">+31 012 345 67 89</a>
                <ul class="lang">
                  <li><a href="#" class="active">Eng</a></li>
                  <li><a href="#">Ru</a></li>
                  <li><a href="#">Ukr</a></li>
                </ul>   
                <a href="#" class="btn">Contacts us</a>     
              </div>
              <div class="btm-head">
                <ul class="main-nav">
                  <li><a href="#" class="active">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Nuts</a></li>
                  <li><a href="#">Dried fruits</a></li>
                  <li><a href="#">Seeds</a></li>
                  <li><a href="#">Contacts</a></li>
                </ul>
                <div class="head-contact">
                  <div><a href="mailto:info@domen.com" class="mail">info@domen.com</a></div>
                  <div><a href="tel:+310123456789" class="tel">+31 012 345 67 89</a></div>
                </div>
                <a href="#modal" class="btn">Contacts us</a>
              </div>
            </div>
          </Container>
        </header>
    );
};