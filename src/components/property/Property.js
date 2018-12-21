import React from 'react';
import img1 from '../../img/propertyimg1.jpg';
import img2 from '../../img/propertyimg2.jpg';
import img3 from '../../img/propertyimg3.jpg';
import img4 from '../../img/propertyimg4.jpg';
import { dropdown } from '../settings/Dropdown.js';

class Property extends React.Component {
    componentDidMount(){
        dropdown()
    }
    render() {
        return (
            <div class="ui container pt-100 pb-100">
                <div class="ui center aligned text container">
                    <h1>List your property</h1>
                </div>
                <div class="ui grid">
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img class="listPropertyImg" src={img1} alt="img 1" />
                            </div>
                        </div>
                        <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Professional property consultant by your side</div>
                            </h1>
                        </div>
                    </div>
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img class="listPropertyImg" src={img2} alt="img 2" />
                            </div>
                        </div>
                        <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Integrated with the efficient marketing tools both online and offline</div>
                            </h1>
                        </div>
                    </div>
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img class="listPropertyImg" src={img3} alt="img 3" />
                            </div>
                        </div>
                        <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="listPropertyImg" class="sub header">Global affiliate for the potential investors</div>
                            </h1>
                        </div>
                    </div>
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img class="listPropertyImg" src={img4} alt="img 4" />
                            </div>
                        </div>
                        <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Provide accurate pricing for the fastest sale or rent </div>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="ui center aligned container pt-30">
                    <h1>Please send email to</h1>
                    <h2 class="h2">info@witrealty.co</h2>
                    <h1>or call</h1>
                    <h2 class="h2">+66 98 295-5055</h2>
                </div>
            </div>
        )
    }

}
export default Property