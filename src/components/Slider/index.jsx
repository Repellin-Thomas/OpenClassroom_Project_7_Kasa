import React from 'react'
import { houseList } from '../../datas/HousesList'

function Slider(props) {

    const slides = props.slides


    return (
        <div>
            {slides.map(({ slide, index }) => {
                return (
                    <img key={index} src={slide} alt="" />
                )
            })}
        </div>
    )
}

export default Slider
