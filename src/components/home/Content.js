import React, { Component } from 'react';
import { dropdown } from '../settings/Dropdown.js';

class Content extends React.Component {
    componentDidMount(){
        dropdown()
    }
    constructor() {
      super()
      this.state = {
        show: false,
        classDropdown: 'dropdown-content'
      }
  
      this.clickShowDropdownOutside = this.handleClickOutsideDropdown.bind(this)
      this.showDropdown = this.clickShowDropdown.bind(this)
    }
  
    clickShowDropdown() {
      if(!this.state.show) {
        document.addEventListener('click', this.clickShowDropdownOutside, false)
      } else {
        document.removeEventListener('click', this.clickShowDropdownOutside, false)
      }
      this.setState({ show: !this.state.show })
    }
  
    handleClickOutsideDropdown(e) {
      if(this.node.contains(e.target)) {
        return;
      }
      this.clickShowDropdown()
    }
    
  
    render() {
      const showIsOn = this.state.show ? ' show' : ''
      const classNameDropdown = this.state.classDropdown + showIsOn
      return (
        <div class="hero">
          <div class="center-content">
            <h3>A door to your perfect home</h3>
            <div class="flex-row">
              <div class="ui buttons">
                <button class="ui button">Buy</button>
                <div class="or"></div>
                <button class="ui positive button">Rent</button>
              </div>
            </div>
            <div class="ui grid centered mt-20">
              <div class="two wide computer fourteen wide tablet fourteen wide mobile column">
                <select name="country" class="ui selection dropdown">
                  <option value="1" selected>Condominium</option>
                  <option value="2">Land</option>
                  <option value="3">Detached House</option>
                  <option value="4">Commercial Building</option>
                </select>
              </div>
              <div class="two wide computer fourteen wide tablet fourteen wide mobile column" ref={node => { this.node = node}}>
                <button class="ui search selection dropdown icon" onClick={this.showDropdown}>Price<i class="dropdown icon"></i></button>
                <div className={classNameDropdown}>
                  <div class="ui form">
                    <div class="ui action fluid input">
                      <div class="column-left-in-dropdown">
                        <span class="text-in-column-dropdown">MIN</span>
                      </div>
                      <input type="number" name="first-name" placeholder="ANY" style={{borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}} />
                      <div class="column-left-in-dropdown">
                        <span class="text-in-column-dropdown">THB</span>
                      </div>
                    </div>
                  </div>
                  <div class="ui form pt-10">
                    <div class="ui action fluid input">
                      <div class="column-left-in-dropdown">
                        <span class="text-in-column-dropdown">MIN</span>
                      </div>
                      <input type="number" name="first-name" placeholder="ANY" style={{borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}} />
                      <div class="column-left-in-dropdown">
                        <span class="text-in-column-dropdown">THB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="five wide computer fourteen wide tablet fourteen wide mobile column">
                <div class="ui action input">
                  <input type="text" id="postalCode05" placeholder="Area, BTS & MRT station or Property name" />
                  <button class="ui button icon">
                    <i class="search icon"></i>
                    Search
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default Content