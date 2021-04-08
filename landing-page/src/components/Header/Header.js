import React from 'react';
import Logo from '../../assets/img/top-logo.svg';
import Nav from 'react-bootstrap/Nav';


const Header = () =>{
  const navItems = [
    {
      title: 'Home',
      href: '#home'
    },
    {
      title: 'About',
      href: '#about'
    },
    {
      title: 'Products',
      href: '#products'
    },
    {
      title: 'Services',
      href: '#services'
    }, 
    {
      title: 'Contact',
      href: '#contact'
    }
  ];

  return (
    <header className="header">
        <div className="container">
            <a href="www.google.com">
            <img src={Logo} alt="Landing Page"/>
            </a>
            <Nav className='navbar'>
                {
                    navItems.map(({title, href}) => 
                        <Nav.Item key={href}>
                            <Nav.Link className="navbar-item" href={href}>{title}</Nav.Link>
                        </Nav.Item> 
                    )
                }
            </Nav>             
        </div>
    </header>
  )
}

export default Header;