import React,{useState} from 'react'
import About from "./About"

const Home = () => {

  return (
        <div className='Home-parent-class containerr' id='home'>
            <>
            <div className='home-container'> 
                <div className='candidate-name'>
                        <p style={{color:"orange",fontSize:"45px", fontWeight:"500"}}><b>Hi, I am Smriti Kumari</b></p>              
                        <h1 style={{color:'white'}}><b>A Front-end Developer</b></h1>
                        <br/>
                        <br/>
                        <p className='home-p3'>Get ready to turn ideas in to reality </p>
                        <button className='hire-me-btn'>Hire Me</button>
                        <button className='get-resume-btn'>Get Resume</button>
                </div>  
                <div>
                    <img src="./image/myimg1.png" height="650px" />
                </div> 
            </div> 
            </>
        </div>
  )
}

export default Home