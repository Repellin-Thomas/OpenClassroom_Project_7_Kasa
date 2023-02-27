import Baner from "../../components/Baner"
import  aboutBaner  from'../../assets/aboutbaner.png'
import DescriptionTab from "../../components/Description"
import { aboutList } from "../../datas/AboutList"


function About() {

    return (
        <div>
            <Baner image={aboutBaner} content=""/>
            <ul>
                {aboutList.map(({name, content})=>(
                    <DescriptionTab name={name} content={content}/>
                ))}
            </ul>
        </div>
    )
}

export default About