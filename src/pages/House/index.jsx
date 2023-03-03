import { useState } from "react";
import { useParams } from "react-router-dom";
import { houseList } from "../../datas/HousesList";
import "../../style/House.css"

function HouseComponent() {
    const { id } = useParams()

    /*
    const currentHouse = useEffect(() => {
        houselist.find()
    }, [])
*/
    return (
        <div className="house-container">{id}</div>
    )

}



export default HouseComponent