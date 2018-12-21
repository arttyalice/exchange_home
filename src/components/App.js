import React, { Component } from 'react';

import './App.css';
import './fontStyle.css'

import Header from './Header.js';
import Home from './home/Home.js';
import Search from './search/Search.js';
import Property from './property/Property.js';
import Condo from './condo/Condo.js';
import Article from './articles/Article.js';
import Contact from './contact/Contact.js';
import Footer from './Footer.js';
import Error from './error/error.js';

import Infocondo from './condo/Infocondo.js';
import Infoarticle from './articles/Infoarticle.js';

import FormCareer from './careers/FormCareer.js';

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import {BrowserRouter , Route, Switch, HashRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import "react-image-gallery/styles/css/image-gallery.css";

class App extends Component {
  render() {
    const Content = withRouter(props =>
       (props.location.pathname === "/article" || props.location.pathname === '/contact') ? 
       <div class="pt-50">
        <Search />
       </div> : ''
    );
    return (

      <div className="App">

        <HashRouter>
          <div>
          <Header />
          <Content />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/property" component={Property} />
            <Route path="/article" component={Article} exact/>
            <Route path="/article/:id" component={Infoarticle}  />
            <Route path="/contact" component={Contact} />
            <Route path="/condo" component={Condo} exact/>
            <Route path="/condo/:id" component={Infocondo} />
            <Route path="/career" component={FormCareer} />
            <Route component={Error} />
          </Switch>
          <Footer />
          </div>
        </HashRouter>

      </div>
    )
  }
}





export default App;
