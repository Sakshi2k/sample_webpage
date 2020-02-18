import React from 'react'
import './Header1.css'
function Header() {
        return(
                <header className="navBar">
                <img src="./logo.jpg" width="100" height="20" alt="__" />
                    <nav>
                        <a href="#" id="a" >Menu</a><br/><br/>
                        <a href="#" id="b" >Name Here</a>
                    </nav>
                </header>
        )
}

export default Header