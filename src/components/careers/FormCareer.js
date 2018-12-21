import React, {Component } from 'react';
import bangkok from '../../img/bangkok.png';
import chiangmai from '../../img/chiangmai.png';

class FormCareer extends React.Component {

    render() {
        return(
            <div class="ui fluid container pt-80 pb-80">
                <div class="ui text container center aligned">
                    <h1 class="h1">Join Wit Realty family, please contact : </h1>
                    <div class="ui very padded raised segments">
                        <div class="ui very padded green segment">
                            <div class="art-flex">
                                <div class="child">
                                    <h2 className="h2">E-mail</h2>
                                    <h3 className="h3">info@witrealty.co</h3>
                                </div>
                                <div class="child">
                                    <h2 className="h2">Tel</h2>
                                    <div class="ui middle aligned animated list">
                                        <div class="item pt-20">
                                            <img class="ui avatar image" src={bangkok} alt={bangkok} />
                                            <div class="content">
                                                <div class="header">Bangkok
                                                    <div class="sub header">+66 985 288 637</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item pt-20">
                                            <img class="ui avatar image" src={chiangmai} alt={chiangmai} />
                                            <div class="content">
                                                <div class="header">Chiang Mai
                                                    <div class="sub header">+66 989 019 658</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormCareer