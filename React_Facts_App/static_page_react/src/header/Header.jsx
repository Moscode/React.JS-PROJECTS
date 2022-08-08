import React from "react"
import '../App.css'
import logo from "./logo192.png"

function Header(){
    return(
        <header className="header">
          <img src={logo} alt="" className="img-logo"/>
          <h1>ReactFacts</h1>
          <nav>
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }

  export default Header;