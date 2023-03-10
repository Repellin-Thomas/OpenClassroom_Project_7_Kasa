import { useState } from 'react'
import '../../style/Description.css'
import arrow from '../../assets/descriptionarrow.png'




function DescriptionTab(props) {

    const size = props.size
    const name = props.name;
    const content = props.content;
    const customClass = "description-container " + size;
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className={customClass}>
            <div className='description-header'>
                <span className='description-name'>{name}</span>
                <img src={arrow} className='description-arrow-open' alt='description-déroulante' onClick={() => setIsOpen(false)} />
            </div>
            <div className='description-content'>{content}</div>
        </div >

    ) : (
        <div className={customClass}>
            <div className='description-header'>
                <span className='description-name'>{name}</span>
                <img src={arrow} className='description-arrow-close' alt='description-déroulante' onClick={() => setIsOpen(true)} />
            </div>
        </div>
    )
}


export default DescriptionTab