import React from 'react';
import condo1 from '../../img/condo1.jpg';
import condo2 from '../../img/condo2.jpg';
import condo3 from '../../img/condo3.jpg';
import condo4 from '../../img/condo4.jpg';
import OwlCarousel from 'react-owl-carousel';
import { dropdown } from '../settings/Dropdown.js';
import axios from 'axios'
import Loading from '../settings/Loading.js';
import { NavLink } from "react-router-dom";
import noimg from '../../img/noimg.png'

class Article extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loaded: false,
        }

        this.fetchArticleData = this.fetchArticleData.bind(this)
    }

    async componentDidMount(){
        dropdown()
        await this.fetchArticleData()
    }

    fetchArticleData = () => {
        axios.get('https://www.witrealty.co/api/forums').then((response) => {
            this.setState({data: response.data, loaded: true})
        })
    }

    render() {
        const { loaded } = this.state
        const sendLoaded = (loaded ? true : false)
        return(
            <div class="ui fluid pb-100">
                <Loading loaded={sendLoaded} />
                <div class="ui container pt-30">
                    <OwlCarousel
                        className="owl-carousel owl-theme full-width-img-carousel"
                        loop
                        items={1}
                    >
                        <div class="item"><img src={condo1} alt={condo1} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo2} alt={condo2} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo3} alt={condo3} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo4} alt={condo4} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo1} alt={condo1} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo2} alt={condo2} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo3} alt={condo3} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo4} alt={condo4} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                    </OwlCarousel>
                </div>
                <div class="ui center aligned container pt-50">
                    <div class="ui text container">
                        <h1 class="ui header">
                            News & Article
                        </h1>
                    </div>
                    <h4 class="ui header">
                        <div class="sub header">Here you can find latest updated News & Article related to real estate provide by experts who have high experience in Thailand property. News update, Real estate article , Infrastruce news , Economic & Finance news , Decorate Guide are waiting for you to explore.</div>
                    </h4>
                </div>
                <div class="ui pt-30">
                    <div class="ui centered aligned container grid column mt-20">
                        {
                            this.state.data.map(item => {
                                return  <div class="five wide computer seven wide tablet fifteen wide mobile column">
                                    <NavLink exact target="_blank" to={"/article/"+item.uniq_id} className={"text-black"}>
                                            <div class="ui card fluid">
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
                                                                            <img src={itemimg.img_base} alt={item.forum_title} style={{minHeight:'250px',maxHeight:'250px',width:'100%',objectFit:'cover'}}/>
                                                                        </div>)
                                                                    }
                                                            </OwlCarousel>
                                                        )
                                                }

                                                <div class="content">
                                                    <h4>{item.forum_title}</h4>
                                                    <div class="meta">
                                                        <a>Create date: {item.create_date}</a>
                                                    </div>
                                                </div>
                                            </div>
                                    </NavLink>
                                        </div>
                            })
                        }
                    </div>
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

export default Article
