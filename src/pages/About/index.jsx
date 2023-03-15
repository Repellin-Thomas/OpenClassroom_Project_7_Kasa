import Baner from '../../components/Baner'
import aboutBaner from '../../assets/aboutbaner.png'
import DescriptionTab from '../../components/Description'
import Header from '../../components/Header'
import { aboutList } from '../../datas/AboutList'
import './About.css'

function About() {

    return (
        <div>
            <Header />
            <Baner image={aboutBaner} content="" />
            <ul>
                {aboutList.map(({ name, content }) => (
                    <DescriptionTab name={name} content={content} size="large" />
                ))}
            </ul>
        </div>
    )
}

export default About