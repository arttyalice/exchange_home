import React, {Component } from 'react';
import condo1 from '../../img/condo1.jpg';
import * as $ from 'jquery';

window.$ = window.jQuery = require('jquery')

require('semantic-ui/js/semantic.min.js')

class Contact extends React.Component {

    componentDidMount(){       
        $('.ui.menu a.item').on('click', function() {   
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active'); 
        })
    }

    render() {
        return(
            <div class="ui fluid container pb-100">
                <div class="ui container center aligned">
                    <h1 className="h1">CONTACT US</h1>
                    <h3 className="h3">Wit Realty Co., Ltd.</h3>
                    
                    <div className="art-flex">
                        <div className="child">
                            <h2 className="h2">Tel</h2>
                            <h3 className="h3">+66 98 295-5055</h3>
                        </div>
                        <div className="child">
                            <h2 className="h2">E-mail</h2>
                            <h3 className="h3">info@witrealty.co</h3>
                        </div>
                    </div>

                    <div class="ui two column grid pt-50">
                        <div class="column noteleft feedtextcontent bg-olive">
                            <div class="ui items">
                                <div class="item">
                                    <div class="content">
                                        <a class="header">Bangkok</a>
                                        <div class="contract description">
                                            <p>Wit Realty Co.,LTD – Bangkok Branch (Head office)</p>
                                            <p>3/12, Chai-Sanguan Building 1575/1, New Petchburi Rd., Mukkasan, Ratchathevi, Bangkok, 10400</p>
                                            <h5>Tel: +66 98 295-5055</h5>
                                            <h5>Tel: +66 65 653-9899</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="column noteright feedtextcontent bg-wit">
                            <div class="ui items">
                                <div class="item">
                                    <div class="content">
                                    <a class="header">Chiang Mai</a>
                                    <div class="contract description">
                                        <p>Wit Realty Co.,LTD – Chiangmai Branch</p>
                                        <p>169/48, Star Avenue 5, Chiangmai-Hangdong Rd., Hangdong, Chiangmai 50230</p>
                                        <h5>Tel: +66 98 901-9658</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact