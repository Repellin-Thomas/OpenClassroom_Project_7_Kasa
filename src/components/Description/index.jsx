import { useState } from 'react'
import '../../style/Description.css'
import arrow from '../../assets/descriptionarrow.png'




function DescriptionTab(props) {

    const name = props.name;
    const content=props.content;
    
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='description-container'>
            <div className='description-header'>
                <span className='description-name'>{name}</span>
                <img src={arrow} className='description-arrow-open' alt='description-déroulante' onClick={() => setIsOpen(false)} />
            </div>
            <span className='description-content'>{content}</span>
        </div >

    ) : (
        <div className='description-container'>
            <div className='description-header'>
            <span className='description-name'>{name}</span>
            <img src={arrow} className='description-arrow-close' alt='description-déroulante' onClick={() => setIsOpen(true)} />
            </div>
        </div>
    )
}


export default DescriptionTab