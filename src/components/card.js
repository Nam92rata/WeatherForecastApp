import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div className="card1">{this.props.children}</div>
        )
    }
}

export default Card;