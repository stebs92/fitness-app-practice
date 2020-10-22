import React from 'react'
import './styles/Welcome.css'

function Welcome(props){
    return(
        <div className="Fitness-User-Info text-center pt-2 pb-2 m-0 bg-primary mb-2">
        <h1>
            Welcome {props.username}
        </h1>
        
        <h2>Lets get started!</h2>
    </div>
    )
}

export default Welcome