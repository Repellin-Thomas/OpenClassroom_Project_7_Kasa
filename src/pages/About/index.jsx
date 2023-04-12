import Baner from '../../components/Baner'
import aboutBaner from '../../assets/aboutbaner.png'
import DescriptionTab from '../../components/Description'
import { aboutList } from '../../datas/AboutList'
import './About.css'

function About() {

    return (
        <div className="about-container">
            <Baner image={aboutBaner} content="" category="custom-baner" />
            <ul className="tabs-container">
                {aboutList.map(({ name, content }) => (
                    <DescriptionTab name={name} content={content} size="large" />
                ))}
            </ul>
        </div>
    )
}

export default About