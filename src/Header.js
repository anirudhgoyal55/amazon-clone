import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
        />
      </Link>
      <div className="address-option">
        <LocationOnIcon fontSize="medium" />
        <span className="ad-op-cl"> Select your address</span>
      </div>

      <div className="header-search">
        <input className="search-input" type="text" />
        <SearchIcon className="header-searchicon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header_optionLineOne">Hello, Anirudh!</span>
          <span className="header_optionLineTwo">Sign In!</span>
        </div>

        <div className="header-option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="header-basketCount header_optionLineTwo">{basket.length}</span>

          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
