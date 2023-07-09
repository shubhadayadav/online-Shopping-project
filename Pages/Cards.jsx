import React from "react";
import './Home.css';
 



const Cards=()=>{
    return(
        <>
    <div className="container-fluid card-body   ">
      <div className="main-cards ">
        
        <div className="card text-bg-dark">
           <img src="https://img.freepik.com/free-photo/portrait-pretty-blonde-model-sitting-table-white-casual-warm-knitted-sweater-black-hat_273443-2244.jpg " className="card-img" alt="..." />
          <div className="card-img-overlay text-danger">
            <h3 className="card-title text-white ">Women</h3>
             <p className="card-text  ">
                Spring 2023
            </p>
            <p className="card-text1 fs-5">
                <small>SHOP NOW</small>
            </p>
         </div>
         </div>
        

       <div className="card text-bg-dark">
           <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-jacket-jeans-fashion-male-posing-studio-near-grey-wall_158538-23972.jpg" className="card-img" alt="..." />
          <div className="card-img-overlay text-danger ">
            <h3 className="card-title text-white">Men</h3>
             <p className="card-text ">
                Spring 2023
            </p>
            <p className="card-text1 fs-5">
                <small>SHOP NOW</small>
            </p>
         </div>
       </div>

       <div className="card text-bg-dark">
           <img src="https://burst.shopifycdn.com/photos/makeup-and-jewelry.jpg?width=1200&format=pjpg&exif=1&iptc=1 " className="card-img" alt="..." />
          <div className="card-img-overlay text-danger">
            <h3 className="card-title text-white ">Accesories</h3>
             <p className="card-text">
                New Trends
            </p>
            <p className="card-text1 fs-5 fw-9">
                <small>SHOP NOW</small>
            </p>
         </div>
       </div>
  
       
      </div>
    </div>
        </>
    )
};


export default Cards;