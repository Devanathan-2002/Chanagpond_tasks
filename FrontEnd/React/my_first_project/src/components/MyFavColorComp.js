import React, { Component } from 'react'

class MyFavColorComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"violet"
        }
    }
    
    // static getDerivedStateFromProps(props){
    //     return {
    //         color:props.newColor
    //     }
    // }


    componentDidMount(){
        setInterval(()=>{
            this.setState({color:"pink"})
        },2000)
    }

    shouldComponentUpdate(){
        return true;
    }

    render() {
        const textcolor = {
            color: this.state.color,
            fontSize: "30px",
            fontWeight: "bold",
        };
        return (
            <div>
            <h2>My Fav color Comp</h2>
            <h3>The Color: <strong style={textcolor}>{this.state.color}</strong></h3>
            </div>)
    }
}

export default MyFavColorComp;