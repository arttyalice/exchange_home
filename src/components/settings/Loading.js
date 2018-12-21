import React, { Component } from 'react'

class Loading extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div class="layer-preloader" className={"layer-preloader " + (this.props.loaded ? 'hide-loader' : '')}>
                <div class="loading">
                    <div class="loader firstColor">
                    <div class="loader secondColor">
                        <div class="loader thirdColor"></div> 
                    </div> 
                    </div> 
                </div> 
            </div>
        )
    }
}

export default Loading