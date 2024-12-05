import React, { Component } from 'react';
import Dosa from '../assets/Dosa.jpg';
import egg from '../assets/egg.jpg';

class ToggleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkFood: true 
        };
    }

   
    toggleImage = () => {
        this.setState((prevState) => ({
            checkFood: !prevState.checkFood 
        }));
    };

    render() {
        const { checkFood } = this.state; 

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkFood ? Dosa : egg} alt={checkFood ? 'Dosa' : 'egg'} height='200px' width='200px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Toggle Image
                </button>
            </div>
        );
    }
}

export default ToggleImageComp;