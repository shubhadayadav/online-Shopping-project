import React from "react";
import "./Home.css";
import Cards from "./Cards";
import Featuredprdct from "./Featuredprdct";

 


const Home=()=>{
    return(
        <>
  <div className="container-fluid bg-color  ">
 
   <div
  id="carouselExampleControls"
  className="carousel slide   "
  data-bs-ride="carousel"
 > 
  
<div className="carousel-inner ">
   <div className="carousel-item active data-bs-interval=1000">
     <img src="https://thumbs.dreamstime.com/b/beautiful-fashionable-girl-long-curly-hair-pink-dress-studio-pink-background-beautiful-fashionable-girl-109954384.jpg" className="fullscreen1"   alt="..." />
     
    </div>
    {/* https://thumbs.dreamstime.com/b/beautiful-fashion-women-shopping-bags-trendy-lifestyle-urban-portrait-city-background-147859140.jpg */}
     
    <div className="carousel-item active data-bs-interval=1000">
      <img src="https://www.cleanipedia.com/images/yvwvo5xgjuhg/60DoTVufNYbtAJEEV43O1j/b3721fdb1382367c5178c8479420fa7c/Mi5fSG93X3RvX0tlZXBfQ2xvdGhlc19Mb29raW5nX05ld2VyX2Zvcl9Mb25nZXItSGVyb19fMV8uanBn/990w-660h/how-to-keep-clothes-looking-new-for-longer.jpg" className="  fullscreen1" alt="..." />
    </div>
   {/* https://www.cleanipedia.com/images/yvwvo5xgjuhg/60DoTVufNYbtAJEEV43O1j/b3721fdb1382367c5178c8479420fa7c/Mi5fSG93X3RvX0tlZXBfQ2xvdGhlc19Mb29raW5nX05ld2VyX2Zvcl9Mb25nZXItSGVyb19fMV8uanBn/990w-660h/how-to-keep-clothes-looking-new-for-longer.jpg */}
    <div className="carousel-item active data-bs-interval=1000">
      <img src="https://image.cnbcfm.com/api/v1/image/107218787-1680290025704-GettyImages-1365356947_2.jpg?v=1680357624" className="fullscreen1" alt="..." />
      
    </div>
    </div>
    <div className="container">
      <div className="hero-section">
    <h1 className="elementor-heading-title elementor-size-default">Raining Offers For 
    <br/>
    <span className=""> Hot Summer !</span> </h1>
    
     <h5 className="elementor-heading-title sub-heading">25% Off On All Products</h5>
     <button type="button" className="btn btn-primary  hero-btn btn-md">SHOP NOW</button>
     <button type="button" className="btn btn-primary  hero-btn2   ">FIND MORE</button>
      
     </div>  
     </div>
  
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
 

</div>
</div>

{/* carousal end */}
   <Cards/>
 
 <Featuredprdct  />
  
 </>
 

        
    );
};

export default Home;