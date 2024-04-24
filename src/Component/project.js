import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const project = () => {
  return (
    <div className='project containerr' id='project'>
        <h1 className='heading'>Project</h1>
    <div className='craousel'>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <a href='https://kumarismri.github.io/ClockProject/' text-decoration="none">
        <img
          className="d-block w-100"
          src="./image/clock.png"
          alt="clock project"
        />
        </a>
        <Carousel.Caption>
          <h5>Clock Project</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://dazzling-sammet-3688b0.netlify.app/' text-decoration="none">
        <img
          className="d-block w-100"
          src="./image/blog.png"
          alt="Blog project"
        /></a>
        <Carousel.Caption>
          <h5>Blog Project</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://kumarismri.github.io/todoDynamic/' text-decoration="none" ><img
          className="d-block w-100"
          src="./image/todo.png"
          alt="Todo APP"
        /></a>
        <Carousel.Caption>
          <h5>Todo App</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default project