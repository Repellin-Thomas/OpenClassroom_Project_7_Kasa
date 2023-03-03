import Header from "../../components/Header";
import Baner from "../../components/Baner";
import Card from "../../components/Card";
import homeBaner from "../../assets/homebaner.png"
import "../../style/Home.css"
import { houseList } from "../../datas/HousesList";



function Home() {
  const banerContent = "Chez vous, partout et ailleurs"
  return (
    <div>
      <Header />
      <Baner image={homeBaner} content={banerContent} />
      <ul className="cards-container">
        {houseList.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
