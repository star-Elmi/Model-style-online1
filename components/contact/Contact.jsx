import React from 'react'
import './contact.css';
import walmart from '../../img/walmart.jpg';
import Google from '../../img/google.jpg';
import micro from '../../img/11.jpg';
import linked  from '../../img/link.png';

import githb from '../../img/github.png';

 function Contact() {
  return (
    <div>
        <section className="contactPage">
            <div id="client">
                <div className="contactPageTitle">
                    <p className="contactDesc">i haven't get any client yet but i hope in thr Future .</p>
                    <div className="cleintimgs">
                        <img src={walmart} alt="" className="clientimg" />
                        <img src={Google} alt="" className="clientimg" />
                        <img src={micro} alt="" className="clientimg" />
                    </div>
                </div>
                <div id="contact">
                    <h1 className="conatctPageTitle">Contact Me</h1>
                    <span className="contactDesc">Please fill  form</span>
                    <form className="contactform">
                        <input type="text" className='name' placeholder='Your Name' />
                        <input type="email" className='email' placeholder='Your Email' />
                        <textarea className='msg' name='message' rows="5" placeholder='your Message'></textarea>
                        <button className="summitbtn"value="send" type='submit'>Submit</button>
                        <div className="links">
                            

                        <a href="https://www.linkedin.com/in/istar-mohamed-940607300/"> <img src={linked} alt='' className="Link" /></a>
                        <a href="https://github.com/star-Elmi"><img src={githb} alt='' className="Link" /></a>

                          
                        </div>
                    </form>
                </div>
            </div>
        </section>
      
    </div>
  )
}
export default Contact
