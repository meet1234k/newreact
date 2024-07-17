import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import image1 from '../assets/3 (3).jpg'
import image2 from '../assets/4.jpg'
const Services = () => {
  return (
   <Carousel
   infiniteLoop autoPlay showStatus={false} showThumbs={false} interval={3000}
   >
        <div>
            <img src={image1} alt="" />
            <h3>Full-Stack</h3>
        </div>
        <div>
            <img src={image2} alt="" />
            <h3>Peer to Peer Support</h3>
        </div>
   </Carousel>
  )
}

export default Services
