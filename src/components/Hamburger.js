import "../styles/styles.scss"
import { useState } from "react";

function Hamburger(){

  const [isActive, setActive] = useState(false)

    function openMenu(){
        document.body.classList.toggle('show')
        setActive(!isActive)
    }

    return (
      <><div className={`hamburger-menu ${isActive ? "is-active" : ""}`} onClick={openMenu}>
        <div className="line-menu half top"></div>
        <div className="line-menu middle"></div>
        <div className="line-menu half bottom"></div>
      </div><div>
          {isActive ?
            <div className="menu-dropdown">
              <ul className="menu-list">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>BLINDS</li>
                <li>SCREENS</li>
                <li>DOORS</li>
                <li>CONTACT</li>
              </ul>
            </div> : "" }
        </div></>
      
 
    )
  }
  
  export default Hamburger;
