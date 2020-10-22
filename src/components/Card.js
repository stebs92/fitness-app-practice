import React from 'react'
import './styles/Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: this.props.img
        }
    }

    render(){
        const {title, background, img, leftColor, rightColor, description} = this.props
        return (
            <div className="card mx-auto Fitness-Card" style={{
                backgroundImage: `url(${background}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}>
                 <div className="card-body">
                        <div className="row body">

                            <div className="col-6">
                                <img src ={this.state.img} className="float-right"/>
                            </div>
                            <div className="col-6 Fitness-Card-Info" >
                                <h1>
                                    {title}
                                </h1>
                                <p>
                                    {description}
                                </p>
                             </div>
                        </div>
                
                </div>
            </div>
            
        )
    } 
}

export default Card