import React, { Component } from 'react';
import condo1 from '../../img/condo1.jpg';
import condo2 from '../../img/condo2.jpg';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import noimg from '../../img/noimg.png';
import { decimalWithComma } from '../scripts/NumberComma'

class ArticleSelection extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        condodata: []
      }

      this.checkTypeID = this.checkTypeID.bind(this)
      this.fetchCondoData = this.fetchCondoData.bind(this)
    }

    async componentDidMount() {
      await this.fetchCondoData()
    }

    fetchCondoData = () => {
      axios.get(`https://www.witrealty.co/api/estates`).then((response) => {
        this.setState({condodata: response.data})
        this.props.setLoaded()
      })
    }
    
    checkTypeID(type_id) {
        let typename
        if(type_id === "1") typename = "Condominium"
        if(type_id === "2") typename = "Townhouse"
        if(type_id === "3") typename = "Singlehouse"
        if(type_id === "4") typename = "Land House"
        if(type_id === "5") typename = "Detached House"
        if(type_id === "6") typename = "Commercial Building"
        if(type_id === "7") typename = "Hotel & Resort"
        return typename
    }

    render() {
      return (
        <article class="ui pb-50">
          <div class="ui text">
            <div class="ui center aligned container grid mt-50">
              <div class="ui"><h1>We meticulously select the best property especially for you</h1></div>
              <div class="ui mt-25">Get updated news about all property types including condo, townhouse, apartment, service apartment, and estate</div>
            </div>
          </div>
          <div class="ui grid mt-25 centered">
            {this.state.condodata.slice(0,6).map(item => {
              return <div class="five wide computer five wide tablet sixteen wide mobile column left">
                <NavLink exact to={"/condo/"+item.estate_id} className={"text-black"} >
                  <div class="ui card centered aligned">
                      {
                        (!item[0].imgs.length > 0 ? <img src={noimg} alt={noimg} style={{minHeight:'250px',maxHeight:'250px',width:'100%',objectFit:'cover'}}/>
                          :
                          <OwlCarousel
                            className="owl-theme owl-carousel owl-demo full-width-img-carousel"
                            items={1}
                            autoplay={true}
                          >
                          {
                            item[0].imgs.map(itemimg => 
                            <div class="item">
                              <img src={itemimg.img_base} alt={item.estate_title} style={{minHeight:'230px',maxHeight:'230px',width:'100%',objectFit:'cover'}}/>
                            </div>)
                        }
                        </OwlCarousel>
                        )
                      }
                    <div class="content">
                      <div class="row">
                        <h2>{item.estate_title}</h2>
                      </div>
                      <div class="row mt-10">
                        <div class="meta">
                          <span class="date" style={{whiteSpace:'normal'}}>{item.estate_address}</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="meta">
                          <span class="date">{this.checkTypeID(item.estate_type_id)}</span>
                        </div>
                      </div>
                      <div class="row mt-10">
                        {decimalWithComma(item.estate_price)} THB
                      </div>
                      <div class="row mt-10">
                        <div class="ui grid">
                          <div class="four wide column">{item.estate_bedroom} BD</div>
                          <div class="four wide column">{item.estate_bathroom} BA</div>
                          <div class="six wide column">{item.estate_size} SQM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </NavLink>
              </div>
            })}
          </div>
            <div class="ui center aligned grid mt-50">
              <div class="ui inverted">
                <NavLink exact to={"/condo"} className={"ui inverted secondary button"} >View All Condo</NavLink>
              </div>
          </div>
        </article>
      )
    }
  }

export default ArticleSelection