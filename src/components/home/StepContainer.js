import React, { Component } from 'react';

class StepContainer extends React.Component {
    render() {
        return(
            <div class="ui fluid" style={{paddingTop:'100px',paddingBottom:'100px',backgroundColor:'#e2e1dc'}}>
                <div class="ui two column doubling grid left aligned container">
                    <div class="six wide computer one wide tablet one wide mobile column "></div>
                    <div class="nine wide computer fiveteen wide tablet fiveteen wide mobile column">
                        <h1> Step by Step - From Buyer to Owner</h1>
                        <h4> To buy real estate such as Single house , Town house , Condominium , Shop House or Land recently not only demand is enough but also consider about budget , area are very significant to maximize the your own profit ... Read more please download</h4>
                        <button class="ui inverted secondary button mt-10">Download</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StepContainer