import React from 'react'
import './works.css';
import work1  from '../../img/cart.png';
 import work2  from '../../img/2.png';
 import work3  from '../../img/3.png';
 import work4  from '../../img/4.png';  
 import work5  from '../../img/gov.png';
 import work6  from '../../img/ji.gif';


 function Works() {
  return (
    <div>
      <section className="works">
        <span className="worksTitle"><h2>My portfolio</h2></span>
        <span className="worksDesc">i'm so exicated to see you to introduce my portfolio <br/></span>
        <div className="worksImgs">
            <img src={work1} alt="works" className='workImg' />
            <img src={work2} alt="works" className='workImg' />
            <img src={work3} alt="works" className='workImg' /><br/> <img src={work4} alt="works" className='workImg' /><br/>
           
            <img src={work5} alt="works" className='workImg' />
            <img src={work6} alt="works" className='workImg' /><br/>
            <button className="workBtn">See More</button>
        </div>
      </section>
    </div>
  )
}

export default Works
