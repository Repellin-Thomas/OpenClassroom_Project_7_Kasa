import React, { useState } from 'react'
import './Slider.css'
import leftArrow from '../../assets/leftsliderarrow.png'
import rightArrow from '../../assets/rightsliderarrow.png'

function Slider(props) {

    const slides = props.slides
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    if (!Array.isArray(slides) || slides.lenght <= 0) {
        return null
    }
    return (
        <div className="slider-container">
            <img src={leftArrow} alt="left arrow" className="left-arrow" onClick={prevSlide} />
            <img src={rightArrow} alt="right arrow" className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
                        {index === currentSlide && (<img key={index} src={slide} alt="" className="slider-image" />)}

                    </div>
                )
            })}
        </div>
    )
}

export default Slider
