import "./Home.css";
import golfImg from "../../img/Golf.jpg"
import soccerImg from "../../img/soccer.jpg"
import hoverImg1 from "../../img/voll.png"

function Home() {
  


  return (
    <>
    <section className="home_main">
      <div className="container">
              
          <h3 className="home_main_tit">Clothes from asics are</h3>
          <p className="home_main_txt">Gadgets are a bridge between reality and the world of the future, the  embodiment of humanity’s dream of conquering time and space.</p>
                			
      </div>
    </section>

    <section className="hover_card">
      <div className="container">
        <div className="hover_cards flex">

        <div class="hover-effect-btn">
          <img className="vol_img" src={hoverImg1} alt="" />
          <h3 class="title">Volleyball</h3>
          <div class="overlay"></div>
        <div class="button"><a href="#">shop</a></div>
        </div>

        <div class="hover-effect-btn">
          <img className="shop_img" src={golfImg} alt="" />
          <h3 class="title">Golf </h3>
          <div class="overlay"></div>
        <div class="button"><a href="#">shop</a></div>
        </div>

        <div class="hover-effect-btn">
          <img className="shop_img" src={soccerImg} alt="" />
          <h3 class="title">Soccer </h3>
          <div class="overlay"></div>
        <div class="button"><a href="#">shop</a></div>
        </div>

        </div>
      </div>
    </section>
      
    </>
  );
}

export default Home;