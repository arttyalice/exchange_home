import React , { Component } from 'react';
import Content from './Content.js';
import ArticleSelection from './ArticleSelection.js';
import StepContainer from './StepContainer.js';
import HelpContainer from './HelpContainer.js';
import Loading from '../settings/Loading.js';


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loadedcondo: false,
            loadedarticle: false,
            loadedall: false,
        }

        this.setLoadedCondo = this.setLoadedCondo.bind(this)
        this.setLoadedArticle = this.setLoadedArticle.bind(this)
        this.checkLoadedAll = this.checkLoadedAll.bind(this)
    }

    checkLoadedAll = () => {
        if(this.state.loadedcondo && this.state.loadedarticle) { this.setState({loadedall: true}) }
    }

    setLoadedCondo = () => {
        this.setState({loadedcondo: true})
        this.checkLoadedAll()
    }

    setLoadedArticle = () => {
        this.setState({loadedarticle: true})
        this.checkLoadedAll()
    }

    render() {
        return(
            <div>
            <Content />
            <ArticleSelection setLoaded={this.setLoadedCondo}/>
            {/* <StepContainer /> */}
            <Loading loaded={this.state.loadedall}/>
            <HelpContainer setLoaded={this.setLoadedArticle}/>
            </div>
        )
    }
}



export default Home