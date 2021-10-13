import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt=""
        />
        <div className="home-row">
          <Product
            title="Oculus Quest 2"
            image="https://m.media-amazon.com/images/I/519XvHWeb9S._AC_UY218_.jpg"
            price="29,999.00"
            rating="⭐⭐⭐⭐"
          />
          <Product
            title="Nintendo Switch"
            image="https://m.media-amazon.com/images/I/61i421VnFYL._AC_UY218_.jpg"
            price="39,999.00"
            rating="⭐⭐⭐⭐⭐"
          />
        </div>

        <div className="home-row">
          <Product
            title="XBox Series S"
            image="https://m.media-amazon.com/images/I/61Q2hRo4BCL._AC_UY218_.jpg"
            price="54,499.00"
            rating="⭐⭐⭐"
          />
          <Product
            title="Playstation 4 Slim"
            image="https://m.media-amazon.com/images/I/517K0j5HfvL._AC_UY218_.jpg"
            price="49,999.00"
            rating="⭐⭐⭐⭐"
          />
          <Product
            title="Razer Wolverine Controller"
            image="https://m.media-amazon.com/images/I/81kKfnnHeuL._AC_UY218_.jpg"
            price="18,499.00"
            rating="⭐⭐⭐⭐⭐"
          />
        </div>

        <div className="home-row">
          <Product
            title="LG 55' Curved 4K TV"
            image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
            price="75,499.00"
            rating="⭐⭐⭐⭐⭐"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

