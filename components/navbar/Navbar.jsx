import React from 'react'
// import logo from '../../img/logo.png'
// import logo1 from '../../img/i.jpg'
import './Navbar.css'
import {Link} from 'react-scroll'
// import contactimg  from '../../contact.png'
import contactimg from '../../img/contact.png'
import logo from '../../img/logo.png'



 function Navbar() {
  return (
    <div>
      <nav className='navbar'>
      {/* <img src={logo1}  className="logo"alt="" /> */}
      <p className='logo'>IstarLiin</p>
        <div className="desktopMenu">
      <Link activeClass='active' to='intros' span={true}  smooth={true}   offset={-0} duration={500}   className="desktopMenulist">Home</Link>
      <Link activeClass='active' to='skill' span={true}  smooth={true}   offset={-0} duration={500}   className="desktopMenulist">About</Link>
      <Link activeClass='active' to='works' span={true}  smooth={true}   offset={-0} duration={500}  className="desktopMenulist">Portfolio</Link>
      <Link  activeClass='active' to='client' span={true}  smooth={true}   offset={-0} duration={500} className="desktopMenulist">Clients</Link>

        </div>
        <button className='DesktopMenuButton' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactimg} className='DesktopMenuimg' alt="" /> ContactMe
        </button>
      </nav>
     
    </div>
  )
}
export default  Navbar
