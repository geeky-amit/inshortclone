import React from 'react'
import "./Appbar.css"
import Navdrawer from './Navdrawer'

const Appbar = ({setCategory}) => {
  return (
    <div className="nav">
        <div className="icon">
            <Navdrawer setCategory={setCategory}/>
        </div>

        <img style={{cursor:"pointer"}} 
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        height="80%"
        alt="logo"/>
    </div>
  )
}

export default Appbar