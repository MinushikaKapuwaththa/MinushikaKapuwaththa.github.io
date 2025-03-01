import React from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard'
import  { useRef } from 'react'; // Import `useRef`
import Slider from 'react-slick'; 

const WorkExperience = () => {

    const sliderRef=useRef();

    // const settings = {
    //     dots: false,
    //     infinite:true,
    //     speed: 500,
    //     slidesToshow:2,
    //     slidesToscroll:1,
    //     arrows:false,
    //     reponsive:[
    //         {
    //             breakpoint: 769,
    //             settings:{
    //                 slidesToshow:1,
    //                 slidesToscroll:1,
    //             },
    //         },
    //     ]
    // }
    return(
        <section className='experience-container'>
            <h5>Work Experience</h5>

            <div className='experience-content'>
                {/* <Slider ref={sliderRef} {...settings}> */}
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard
                     key={item.title}
                     details={item}
                    />
                ))}
                {/* </Slider> */}

            </div>


        </section>
    )
}

export default WorkExperience