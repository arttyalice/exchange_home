import React, { Component } from 'react';
import logo from '../img/logo.png';
import { NavLink , withRouter } from "react-router-dom";


class Header extends React.Component {
    render() {
      const { match, location, history } = this.props
      let classHeader = "ui navbartop inverted secondary pointing menu "
      const bgNavbar = (location.pathname === '/' ? classHeader + 'fixed-top home' : classHeader + 'fixed-top article')
      const fontColorNavbar = (location.pathname === '/' ? 'black' : 'white')
      return (
        <div>
          <div className={bgNavbar} style={{borderLeft: '0', borderRight: '0', borderTop: '0', borderColor: 'white' }} id="navbartop">
            <NavLink exact to="/" className={"item none"}><img src={logo} alt={logo} style={{width:'100px',height:'30px'}}/></NavLink>
            <NavLink exact to="/" className={"item"} activeClassname='active'>Home</NavLink>
            <NavLink to="/property" className={"item"} activeClassname='active'>List your Property</NavLink>
            <NavLink to="/condo" className={"item"} activeClassname='active'>Property</NavLink>
            <NavLink to="/article" className={"item"} activeClassname='active'>News & Articles</NavLink>
            <NavLink to="/contact" className={"item"} activeClassname='active'>Contact us</NavLink>
            <NavLink to="/career" className={"item"} activeClassname='active'>Career</NavLink>
            <div class="right menu">
              <a class="item">
                Call.<span class="tel-navbar">+66 98 295-5055</span>
              </a>
              <a class="launch icon item sidebar-toggle">
                <i class="sidebar icon"></i>
              </a>
            </div>
          </div>
          <div class="ui sidebar inverted vertical menu">
            <NavLink exact to="/" className={"item"} activeClassname='active'>Home</NavLink>
            <NavLink to="/property" className={"item"} activeClassname='active'>List your Property</NavLink>
            <NavLink to="/condo" className={"item"} activeClassname='active'>Condo</NavLink>
            <NavLink to="/article" className={"item"} activeClassname='active'>News & Articles</NavLink>
            <NavLink to="/contact" className={"item"} activeClassname='active'>Contact us</NavLink>
            <NavLink to="/career" className={"item"} activeClassname='active'>Career</NavLink>

          </div>
        </div>
      )
    }
  }

export default withRouter(Header);