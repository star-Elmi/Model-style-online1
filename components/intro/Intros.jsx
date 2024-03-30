import React from 'react'
import './intro.css';
import img from '../../img/star.webp';
import {Link} from 'react-scroll'
import contact from '../../img/contact.png'

 function Intro() {
  return (
    
     <div>
      <section id="intro">
      <div className="introcontent">
          <span className="hello">Hello ,</span>
            <span className="intotext">I'm <span className="introName">Istar liin</span> <br/>Frontend Developer</span>
            <p className="introparagraph">
            I am working on this section for many years and now  <br/> 
              i'm so exicated to introduce my self in my profession <br/>
            </p>

            
            <Link><button className="btn"><img src={contact} className='btnimg' alt="" />Hire Me</button></Link>
          
        </div>
        <img src={img} className='profile'    alt="profileimg" /> 
      </section>
     </div>
        
      
      
    
    
  )
}
export default Intro
