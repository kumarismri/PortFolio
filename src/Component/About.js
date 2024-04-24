import React,{useContext} from 'react'
import { Globalinfo } from './AboutProp';

const About = () => {

  const [obj] = useContext(Globalinfo);

  return (
    <div className='about-container' id='about'>
      <div className='about-image'>
        <div className='about-image-inside'>
        <img className='my-img2' src="./image/myimg2.png" alt=''/>
        </div>
      </div>
      <div className='about-para'>
        <h1>Hello! I am Smriti Kumari</h1>
        <p>I'm a 2 years experienced web designer & front-end developer.</p>
        <p>I'm interested in all kinds of visual communication, but my major</p>
        <p>focus is on designing web, mobile & tablet interfaces.</p>
            <br/>
            <br/>
        <p>I enjoy turning complex problems into simple,beautiful and intutive </p>
        <p>designs. And to work in a dynamic and challenging environment and</p>
        <p>achieve desired goals with full sincerity, dedication and honesty by</p>
        <p>using my coding skills, which would also help me to grow as a professional.</p>
      </div>
      
      <div className="box item1">
        <div>
        <p>languages/library/technology</p>
          {
           obj.filter((check) => check.category === "about").map((content) => <img key={content.id} src={content.img} alt={content.img} className="tech-logo" />)
          }
        </div>
      </div>
    </div>
  )
}

export default About