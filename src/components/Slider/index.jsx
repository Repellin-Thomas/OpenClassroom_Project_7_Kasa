import "./Slider.css"
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Slider() {

    const baseUrl = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
    return (<Carousel>
        <div><img src={baseUrl} alt="" />

        </div>
        <div><img src={baseUrl} alt="" />

        </div>
        <div><img src={baseUrl} alt="" />

        </div>

    </Carousel>)
}




export default Slider