import React from 'react'
import Img from '../images/exercise.png'
import Background from '../images/circles.png'
import Welcome from '../components/Welcome'
import Card from '../components/Card'

class Excercises extends React.Component{
    render(){
        return(
            <div>
                <Welcome username="Esteban" />
                <Card 
                                title="Exercise #1"
                                background= {Background}
                                img={Img}
                                leftColor="#b56af3"
                                rightColor="#617BFB"
                                description="ola ke ase"
                />
            </div>
        )
    }
}

export default Excercises