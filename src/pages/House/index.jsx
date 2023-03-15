import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { houseList } from "../../datas/HousesList";
import Header from "../../components/Header";
import ErrorPage from "../Error";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import DescriptionTab from "../../components/Description";
import HostCard from "../../components/HostCard";
import Rating from "../../components/Rating";
import "./House.css"

function HouseComponent() {
    const { id } = useParams()
    const [currentHouse, setItem] = useState();
    let isLoading = true;



    useEffect(() => {
        const foundHouse = houseList.find((house) => house.id === id);

        setItem(foundHouse);
        isLoading = false
        if (!foundHouse) {
            return <ErrorPage />;
        }

    }, []);
    if (!currentHouse) {
        return (<div className="placeholder"></div>)
    }
    return (
        <div className="house-container">
            <Header />
            <Slider slides={currentHouse.pictures} />
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
                <div>
                    <HostCard name={currentHouse.host.name} picture={currentHouse.host.picture} />
                    <Rating rating={currentHouse.rating} />
                </div>
            </div>

            <div className="house-description">
                <DescriptionTab size="small" name="Description" content={currentHouse.description} />
                <DescriptionTab size="small" name="Équipements" content={currentHouse.equipments} />
            </div>

        </div>

    )

}



export default HouseComponent