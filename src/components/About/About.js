import React from 'react'
import Img4 from "../../assets/img4.png"
import "./About.css"

function About() {
  return (
    <section className='container2'>
        <h2 className='title'>EDUCATION</h2>
    <div className='about-content'>

        <img src={Img4} alt="" className='about-img'/>
       
       <ul className='about-Items'>
        <li className='about-Item'>
            <h3>
                University of Moratuwa - Final Year Undergraduate
            </h3>
            <h4>B.Sc. (Hons.) in Information Technology and Management</h4>
            <p>Final-year undergraduate at the University of Moratuwa, pursuing a degree in Information Technology and Management. Passionate about exploring new technologies, I approach tasks with maturity and responsibility, applying my knowledge through self-study and hard work to continuously grow in the field</p>
        </li>
        <li className='about-Item'>
            <h3>
               MT/ Sri Sangamitta Girls National School
            </h3>
            <p>completed the Advanced Level examination in the Arts stream, specializing in Information and Communication Technology (ICT), Dancing, and Geography. I achieved a Merit Pass, securing 2nd place in the district and ranking 85th in Sri Lanka.</p>

        </li>
       

        



       </ul>

    </div>
    </section>
  )
}

export default About