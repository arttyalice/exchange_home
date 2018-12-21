import React, { Component } from 'react';
import { dropdown } from './settings/Dropdown.js';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: 0,
            scrollStepInPx: '150',
            delayInMs: '16.66'
        };
    }
    componentDidMount(){
        dropdown()
        this.scrollToTop = this.scrollToTop.bind(this)
        this.scrollStep = this.scrollStep.bind(this)
    }

    scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
    }
    
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.state.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
                <div class="ui fluid bg-wit">
                    <div class="ui container grid left aligned pt-30 pb-10 mt-0">
                        <div class="five wide computer sixteen wide tablet center aligned column">
                            <div class="row pt-0 pb-0">
                                <div class="text-white column">
                                    Follow us
                                </div>
                            </div>
                            <div class="row pt-5 pb-5">
                                <div class="column">
                                <div class="ui horizontal list footer social">
                                    <a href="https://www.facebook.com/witrealty/" target="_blank" class="item">
                                        <i class="facebook icon"></i>
                                    </a>
                                    <a class="item">
                                        <i class="linkedin icon"></i>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="six wide computer sixteen wide tablet center aligned column">
                            <div class="row pt-0 pb-0">
                                <div class="column text-white">
                                    Copyright © 2018 Wit Realty Co., Ltd. All rights reserved.
                                </div>
                            </div>
                            <div class="row pt-5 pb-5">
                                <div class="column">
                                    <div class="ui small horizontal divided list footer">
                                        <div class="item">
                                            <div class="content">
                                            <div class="header">Terms and Conditions</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="content">
                                            <div class="header">Privacy Policy</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="content">
                                            <div class="header">Contact Us</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer sixteen wide tablet center aligned column">
                            <button class="circular huge ui icon inverted white large button" onClick={ () => { this.scrollToTop(); }}>
                                <i class="arrow up icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Footer