import React from 'react';
import Logo from '../../assets/img/top-logo.svg'

const Header = () =>{
    return (
       <header className="header">
         <div className="container">
            <a href="www.google.com">
                <img src={Logo} alt="Landing Page"/>
            </a>
            <nav className='navbar'>
        <ul>
          <li>
            <a href='#inicio'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#products'>Products</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
         </div>
       </header>
    )
}

export default Header;