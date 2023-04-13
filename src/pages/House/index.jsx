import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { houseList } from "../../datas/HousesList";
import Slider from "../../components/Slider";
import Tag from "../../components/Tag";
import DescriptionTab from "../../components/Description";
import HostCard from "../../components/HostCard";
import Rating from "../../components/Rating";
import "./House.css"




function HouseComponent() {
    const { id } = useParams()
    const [currentHouse, setItem] = useState();
    const navigate = useNavigate();


    // if you want to show the loader when React loads data again

    useEffect(() => {

        const foundHouse = houseList.find((house) => house.id === id);
        setItem(foundHouse);


        if (!foundHouse) {
            navigate("/*")
        }

    }, []);





    return currentHouse ? (
        <div className="house-container">
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
                <div className="host-info-container">
                    <HostCard name={currentHouse.host.name} picture={currentHouse.host.picture} />
                    <Rating rating={currentHouse.rating} />
                </div>
            </div>

            <div className="house-description">
                <DescriptionTab size="small" name="Description" content={currentHouse.description} />
                <DescriptionTab size="small" name="Équipements" content={currentHouse.equipments} />
            </div>

        </div>

    ) : (<div className="placeholder"></div>)

}



export default HouseComponent