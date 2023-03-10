import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { houseList } from "../../datas/HousesList";
import "../../style/House.css"
import Header from "../../components/Header";
import ErrorPage from "../Error";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import DescriptionTab from "../../components/Description";

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
            <div>
                <div className="house-title-container">
                    <div className="house-title">{currentHouse.title}</div>
                    <div className="house-location">{currentHouse.location}</div>
                </div>
                <div className="host-card"></div>
            </div>

            <div className="tags-container">
                {currentHouse.tags.map((tag) => (
                    <Tag tagname={tag} />
                ))}
            </div>
            <div className="house-description">
                <DescriptionTab size="small" content={currentHouse.equipements} />
                <DescriptionTab size="small" />
            </div>
        </div>

    )

}



export default HouseComponent