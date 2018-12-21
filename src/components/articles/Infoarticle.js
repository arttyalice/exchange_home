import React , { Component } from 'react';
import axios from 'axios';
import bedroom from '../../img/bed.png';
import bathroom from '../../img/bathroom.png';
import condo from '../../img/condo.png';
import logo from '../../img/logo.svg';
import ImageGallery from 'react-image-gallery';
import Loading from '../settings/Loading.js';
import { Facebook, Whatsapp, Twitter, Google, Mail, Linkedin } from 'react-social-sharing'
import { Base64 } from 'js-base64';

class Infoarticle extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        imgna: [],
        articledata: [],
        loaded: false,
      }

      this.fetchCondoData = this.fetchCondoData.bind(this)
    }


    async componentDidMount() {
        await this.fetchCondoData()
    }

    fetchCondoData = () => {
        axios.get(`https://www.witrealty.co/api/forums/${this.props.match.params.id}`).then((response) => {
            response.data[0].forum_content = Base64.decode(response.data[0].forum_content)
            this.setState({articledata: response.data[0], loaded:true},
            () => this.setState({imgna: this.state.articledata[0].imgs}))

            let setimg = []
            for(let getimg of this.state.imgna) {
                let arrimg = {
                    original: getimg.img_base,
                    thumbnail: getimg.img_base
                }
                setimg.push(arrimg)
            }
            this.setState({imgna: setimg, loaded: true})
        })
    }

    render() {
        const { loaded } = this.state
        const sendLoaded = (loaded ? true : false)
        return(
            <div class="ui fluid pt-80 pb-30">
                <Loading loaded={sendLoaded} />
                <div class="ui container one column grid">
                    <div class="column">
                        <h1 class="ui header">
                            <div class="header"><h1>{this.state.articledata.forum_title}</h1></div>
                            <div class="subhead-article">
                                Create date: {this.state.articledata.create_date}
                            </div>
                        </h1>
                        <div style={{display: 'flex'}}>
                            <div class="line-it-button" data-lang="th" data-type="share-c" data-url={`https://witrealty.co/#/article/${this.props.match.params.id}`} style={{marginRight: '9px'}}></div>
                            <div style={{textAlign: 'left', marginLeft: '7px'}} class="sharethis-inline-share-buttons"></div>
                        </div>
                        {/* <Facebook solid small link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                        <Whatsapp solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                        <Twitter solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                        <Google solid small link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                        <Mail solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                        <Linkedin solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/> */}
                    </div>
                    <div class="column">
                        {
                            (() => {
                                if(this.state.imgna.length !== 0) {
                                    return (
                                        <ImageGallery
                                        showPlayButton={false}
                                        showThumbnails={false}
                                        items={this.state.imgna} />
                                    )
                                }
                            })()
                        }
                    </div>
                    <div class="column article-content">
                         <div dangerouslySetInnerHTML={{ __html: this.state.articledata.forum_content }} />
                    </div><hr style={{margin: '30px 0 50px 0px', width: '100%'}}/>

                </div>
                <div style={{textAlign: 'center'}}>
                    <div>
                        <span class="h3">Like our article?</span>
                    </div>
                    
                    <div style={{display: 'inline-flex', textAlign: 'center', marginTop: '15px'}}>
                        <div class="line-it-button" data-lang="th" data-type="share-c" data-url={`https://witrealty.co/#/article/${this.props.match.params.id}`} style={{marginRight: '9px'}}></div>
                        <div style={{marginLeft: '7px'}} class="sharethis-inline-share-buttons"></div>
                    </div>
                    {/* <Facebook solid small link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                    <Whatsapp solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                    <Twitter solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                    <Google solid small link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                    <Mail solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/>
                    <Linkedin solid small message="" link={`https://witrealty.co/#/article/${this.props.match.params.id}`}/> */}
                </div>
            </div>
        )
    }
}

export default Infoarticle
