import React, { Component } from 'react'


export default class Cell extends Component {

    

    state={color:this.props.value}




    clickListener =() =>{this.setState({color:"#333"})
    } 

    render() {

        return (
            <div classname="cell" style={{backgroundColor: this.state.color}} onClick={this.clickListener}     >
            {this.props.value}
            </div>
        )
    }
}
