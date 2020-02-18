import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedin:false
        }
    }
    render() {
        return(
            <div className="grid-container">
                <div className="item1">Menu</div>
                <div className="item2">Main</div>
            </div>
        )
    }
}

export default Main