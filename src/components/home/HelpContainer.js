import React, { Component } from 'react';
import condo1 from '../../img/condo1.jpg';
import condo2 from '../../img/condo2.jpg';
import condo3 from '../../img/condo3.jpg';
import condo4 from '../../img/condo4.jpg';
import person from '../../img/person.jpg';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import { NavLink } from "react-router-dom";


class HelpContainer extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        articledata: []
      }

      this.fetchArticlesData = this.fetchArticlesData.bind(this)
    }

    async componentDidMount() {
      await this.fetchArticlesData()
    }

    fetchArticlesData = () => {
      axios.get(`https://www.witrealty.co/api/forums`).then((response) => {
        this.setState({articledata: response.data})
        this.props.setLoaded()
      })
    }
    
    render() {
        return (
            <div class="ui pb-10 pt-50">
                <div class="ui center aligned container grid">
                    <div class="row">
                        <h1>Help you to be sure in making decisions</h1>
                    </div>
                    <div class="row">
                        <h4>Read recent updated news and articles of insights knowledge about real estate from leading experts</h4>
                    </div>
                </div>
                <div class="ui centered left aligned container grid column mt-20">
                    {
                        this.state.articledata.slice(0,3).map(item => {
                            return <div class="five wide computer eight wide tablet sixteen wide mobile column">
                            <NavLink exact to={"/article/"+item.id} className={"text-black"} >
                                <div class="ui card fluid ">
                                        {item[0].imgs.slice(0,1).map(itemimg => <img src={itemimg.img_base} alt={item.title} style={{minHeight:'250px',maxHeight:'250px',width:'100%',objectFit:'cover'}}/>)}
                                    <div class="content">
                                        <h4>{item.forum_title}</h4>
                                        <div class="meta">
                                            <a>21/10/2561</a>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                            </div>
                        })
                    }
                </div>
                <div class="ui center aligned grid pt-50 pb-30">
                    <NavLink exact to="/article" className={"ui inverted secondary button"}>View all articles</NavLink>
                </div>
                <div class="ui fluid pb-40 pt-40">
                    <OwlCarousel
                        className="owl-theme owl-demo"
                        margin={15}
                        autoplay={true}
                        autoplayTimeout={3000}
                        loop
                        items={3}
                    >
                        <div class="item"><img src={condo1} alt={condo1} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo2} alt={condo2} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo3} alt={condo3} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo4} alt={condo4} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo1} alt={condo1} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo2} alt={condo2} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo3} alt={condo3} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                        <div class="item"><img src={condo4} alt={condo4} style={{ minHeight: '100px', maxWidth: '660px' }} /></div>
                    </OwlCarousel>
                </div>
                {/* <div class="ui fluid pb-40 pt-40">
                    <div class="ui center aligned container">
                        <div class="row">
                             <h1>Feel confidence in investing with advice from expertise</h1>
                        </div>
                        <div class="row">
                            <h4>Gain experience that is beyond expectation with advice from Thailand leading expertise in Real Estate Property</h4>
                        </div>
                    </div>
                    <div class="mt-50">
                        <OwlCarousel
                            className="owl-theme owl-demo owl-dots-newline"
                            nav={true}
                            items={1}
                            navClass={['owl-prev','owl-next']}
                            loop
                        >
                            <div class="item">
                                <div class="ui container two column stackable very relaxed grid">
                                    <div class="eight wide computer column grid left aligned">
                                        <div class="ui items">
                                            <div class="item">
                                                <div class="ui small image" style={{marginLeft:'auto',marginRight:'auto'}}>
                                                    <img class="rounded-image-guide" src={person} alt={person} />
                                                </div>
                                                <div class="middle aligned content">
                                                    <div class="header">
                                                        Mark Zuckerberg
                                                </div>
                                                    <div class="description">
                                                        <p>CEO Google Facebook Amazon Alibaba and other.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="eight wide computer column left aligned">
                                        <h3>For property listings in Chiang Mai - Others or property advice</h3>
                                        <ul class="ui list">
                                            <li>Dota2</li>
                                            <li>GTA V</li>
                                            <li>Spiderman</li>
                                        </ul>
                                        <button class="ui inverted secondary button mt-10">Download</button>
                                    </div>
                                </div>
                                <div class="ui vertical divider"></div>
                            </div>
                            <div class="item">
                                <div class="ui container two column stackable very relaxed grid">
                                    <div class="eight wide computer column grid left aligned">
                                        <div class="ui items">
                                            <div class="item">
                                                <div class="ui small image" style={{marginLeft:'auto',marginRight:'auto'}}>
                                                    <img class="rounded-image-guide" src={person} alt={person} />
                                                </div>
                                                <div class="middle aligned content">
                                                    <div class="header">
                                                        Mark Zuckerberg
                                                </div>
                                                    <div class="description">
                                                        <p>CEO Google Facebook Amazon Alibaba and other.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="eight wide computer column left aligned">
                                        <h3>For property listings in Chiang Mai - Others or property advice</h3>
                                        <ul class="ui list">
                                            <li>Dota2</li>
                                            <li>GTA V</li>
                                            <li>Spiderman</li>
                                        </ul>
                                        <button class="ui inverted secondary button mt-10">Download</button>
                                    </div>
                                </div>
                                <div class="ui vertical divider"></div>
                            </div>
                            <div class="item">
                                <div class="ui container two column stackable very relaxed grid ">
                                    <div class="eight wide computer column grid left aligned">
                                        <div class="ui items">
                                            <div class="item">
                                                <div class="ui small image" style={{marginLeft:'auto',marginRight:'auto'}}>
                                                    <img class="rounded-image-guide" src={person} alt={person} />
                                                </div>
                                                <div class="middle aligned content">
                                                    <div class="header">
                                                        Mark Zuckerberg
                                                </div>
                                                    <div class="description">
                                                        <p>CEO Google Facebook Amazon Alibaba and other.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="eight wide computer column left aligned">
                                        <h3>For property listings in Chiang Mai - Others or property advice</h3>
                                        <ul class="ui list">
                                            <li>Dota2</li>
                                            <li>GTA V</li>
                                            <li>Spiderman</li>
                                        </ul>
                                        <button class="ui inverted secondary button mt-10">Download</button>
                                    </div>
                                </div>
                                <div class="ui vertical divider"></div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default HelpContainer