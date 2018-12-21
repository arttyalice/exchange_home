import React , { Component } from 'react';
import { dropdown } from '../settings/Dropdown.js';
import axios from 'axios'
import Loading from '../settings/Loading.js';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from "react-router-dom";
import noimg from '../../img/noimg.png';
import { decimalWithComma } from '../scripts/NumberComma'

class Condo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loaded: false,
        }

        this.fetchCondoData = this.fetchCondoData.bind(this)
        this.checkTypeID = this.checkTypeID.bind(this)
    }

    async componentDidMount(){
        dropdown()
        await this.fetchCondoData()
    }

    fetchCondoData = () => {
        axios.get('https://www.witrealty.co/api/estates').then((response) => {
            this.setState({data: response.data, loaded: true})
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
        const { loaded } = this.state
        const sendLoaded = (loaded ? true : false)
        return(
            <div class="ui fluid pb-100">
                <Loading loaded={sendLoaded} />
                <div class="ui center aligned container pt-100">
                    <div class="ui text container">
                        <h1 class="ui header">
                            Condo Lists
                        </h1>
                    </div>
                    <h4 class="ui header">
                        <div class="sub header">Here you can find latest updated condo related to real estate provide by experts who have high experience in Thailand property. News update, Real estate article , Infrastruce news , Economic & Finance news , Decorate Guide are waiting for you to explore.</div>
                    </h4>
                </div>
                <div class="ui container pt-30">
                    {
                        this.state.data.map(item => {
                            return  <div class="ui card green segment mb-50" style={{maxWidth: '100%', minWidth: '100%'}}>
                                        <div class="content" style={{padding: '0'}}>
                                            <div class="ui items">
                                                <div class="item">
                                                    <div class="ui medium image">
                                                    {
                                                        (!item[0].imgs.length > 0 ? <img src={noimg} alt={noimg}  style={{minHeight:'230px',maxHeight:'230px',minWidth:'100%',objectFit:'cover'}} />
                                                            :
                                                            <OwlCarousel
                                                                className="owl-theme owl-carousel owl-demo full-width-img-carousel"
                                                                items={1}
                                                                autoplay={true}
                                                                >
                                                                    {
                                                                        item[0].imgs.map(itemimg =>
                                                                        <div class="item">
                                                                            <img src={itemimg.img_base} alt={item.estate_title}  style={{minHeight:'230px',maxHeight:'230px',minWidth:'100%',objectFit:'cover'}} />
                                                                        </div>)
                                                                    }
                                                            </OwlCarousel>
                                                        )
                                                    }
                                                    </div>
                                                    <div class="content" style={{padding: '1rem'}}>
                                                        <h2 class="header">{item.estate_title}</h2>
                                                        <div class="meta">
                                                            <span class="cinema">{item.estate_address}</span>
                                                        </div>
                                                        <div class="meta">
                                                            <span class="cinema">Price: {decimalWithComma(item.estate_price)} Baht</span>
                                                        </div>
                                                        <div class="meta">
                                                            <span class="cinema">Ref Code.: {item.estate_refcode}</span>
                                                        </div>
                                                        <div class="description">
                                                            <p>{item.estate_description}</p>
                                                        </div>
                                                        <div class="extra">
                                                            <div class="ui label"><i class="home icon"></i>{this.checkTypeID(item.estate_type_id)}</div>
                                                            <div class="ui label"><i class="money bill alternate outline icon"></i>{(this.estate_sale_type === 0 ? 'Rent' : 'Buy')}</div>
                                                            <NavLink exact target="_blank" to={"/condo/"+item.estate_id} >
                                                                <div class="ui right floated green button">
                                                                    More
                                                                    <i class="right chevron icon"></i>
                                                                </div>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
                {/* <div class="ui center aligned text container pt-50">
                    <h2 class="ui header">
                        <div class="sub header">Hot Story</div>
                    </h2>
                </div>
                <div class="ui pt-30">
                    <div class="ui centered left aligned grid column mt-20">
                        <div class="five wide computer five wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo2} alt={condo2} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        <a>Something is wrong :(</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer five wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo2} alt={condo2} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer five wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo2} alt={condo2} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Condo
