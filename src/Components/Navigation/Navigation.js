import React from 'react'

import './Navigation.css';
import icon_search from './res/search.png';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <div className="navigation_total">
    <div className="navigation">
        <div></div>
        <Link className="navigation_link" to="/">HOME</Link>
        <Link className="navigation_link" to="/About">ABOUT PROJECT</Link>  
        <Link className="navigation_link" to="/DiscoverNWCStories">DISCOVER NWC STORIES</Link>  
        <Link className="navigation_link" to="/WhyTheNWCMatters">WHY THE NWC MATTERS</Link>
        <Link className="navigation_link" to="/MappingNWC">MAPPING THE NWC</Link>
        <Link className="navigation_link" to="/HowToContribute">HOW TO CONTRIBUTE</Link>
        <img className="navigation_search" src={icon_search}/>
    </div>
    <div className="navigation_border">
      
    </div>
    </div>
  )
}

export default Navigation
