import React from 'react'
import './skill.css';
import frontend from '../../img/frontend.jpg';
import flutter from '../../img/flutter.jpg';
import websDesign  from '../../img/webDesign.jpg'

 function Skill() {
  return (
    <div>
      <section id='skill'>
        <span className="skillTitle">what Can i do</span>
        <span className="skillDesc">   i'm working for this section for many years and now  <br/> 
              i'm so exicated to see  and introduce my self in my profession<br/></span>
              <div className="SkillBars">
                <div className="SkillBar">
                    <img src={frontend} alt="" className='skillBarimg' />
                    <div className="skillBarText">
                    <h2>frontend</h2>
                    <p>Now i have'been working for many years</p>
                </div>
                    
                </div>
               
                <div className="SkillBar">
                    <img src={flutter} alt="" className='skillBarimg' />
                    <div className="skillBarText">
                    <h2>flutter</h2>
                    <p>it is so fun to build my owrn MObile App</p>
                </div>
                </div>
                
                <div className="SkillBar">
                    <img src={websDesign} alt=""   className='skillBarimg'/>
                    <div className="skillBarText">
                    <h2>WebDe</h2>
                    <p>you can code  your own web Design </p>
                </div>
                </div>
                
              
              </div>
           

      </section>
    </div>
  )
}
export default Skill
