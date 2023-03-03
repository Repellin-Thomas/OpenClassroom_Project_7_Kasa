import { useParams } from "react-router-dom";
import { houseList } from "../../datas/HousesList";


function HouseComponent() {
    const { pageId } = useParams()
    return (
        houseList.id.find((id => id == pageId)
        )
    )
}



export default HouseComponent