import React , { Component } from 'react';

class Search extends React.Component {
    render() {
        return(
            <div class="ui segments grid pl-20 pr-20">
                    <div class="middle aligned eight wide computer fifteen wide tablet column">
                        <div class="ui breadcrumb">
                            <a class="section">Home</a>
                            <i class="right chevron icon divider"></i>
                            <a class="section">Registration</a>
                        </div>
                    </div>
                    <div class="middle aligned eight wide computer fifteen wide tablet column">
                        <div class="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i class="inverted circular search link icon"></i>
                        </div>
                    </div>  
            </div>
        )
    }
}

export default Search
