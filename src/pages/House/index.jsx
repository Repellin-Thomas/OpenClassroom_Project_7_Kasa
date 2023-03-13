import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { houseList } from "../../datas/HousesList";
import Header from "../../components/Header";
import ErrorPage from "../Error";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import DescriptionTab from "../../components/Description";
import HostCard from "../../components/HostCard";
import "./House.css"

function HouseComponent() {
    const { id } = useParams()
    const [currentHouse, setItem] = useState();


    useEffect(() => {
        const foundHouse = houseList.find((house) => house.id === id);

        setItem(foundHouse);
    }, []);
    if (!currentHouse) {
        return <ErrorPage />;
    }
    return (

        <div className="house-container">
            <Header />
            <div className="slider-container"><Slider /></div>
            <div className="house-header">
                <div className="house-title-container">
                    <div className="house-title">{currentHouse.title}</div>
                    <div className="house-location">{currentHouse.location}</div>
                    <div className="tags-container">
                        {currentHouse.tags.map((tag) => (
                            <Tag tagname={tag} />
                        ))}
                    </div>
                </div>
                <HostCard name={currentHouse.host.name} picture={currentHouse.host.picture} />
            </div>
            <div className="house-description">
                <DescriptionTab size="small" name="Description" content={currentHouse.description} />

            </div>
            <div className="house-description">
                <DescriptionTab size="small" name="Équipements" content="équipements" />
            </div>

        </div>

    )

}



export default HouseComponent