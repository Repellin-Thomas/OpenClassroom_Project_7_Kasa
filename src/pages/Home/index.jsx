import homeBaner from "../../assets/homebaner.png"
import Baner from "../../components/Baner";



function Home() {
  const banerContent ="Chez vous, partout et ailleurs"
  return (
    <div>
     <Baner image={homeBaner} content={banerContent}/>
    </div>
  );
}

export default Home;
