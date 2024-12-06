import React, { Component } from 'react';
import Dosa from '../assets/Dosa.jpg';
import egg from '../assets/egg.jpg';
import idly from '../assets/idly.jpg'; 

class MultipleImgComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='200px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: Dosa, alt: 'Dosa' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Dosa
                </button>
                <button
                    onClick={() => this.toggleImage({ src: egg, alt: 'egg' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Egg
                </button>
                <button
                    onClick={() => this.toggleImage({ src: idly, alt: 'idly' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Idly
                </button>
            </div>
        );
    }
}

export default MultipleImgComp;