import React, { useEffect, useState } from "react";
import ShopList from "./Shoplist";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filter(searchInput, allrestaurents) {
  const filterData = allrestaurents.filter((restaurent) =>
    restaurent?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurents, setrestaurents] = useState([]);
  const [allrestaurents, setAllrestaurents] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllrestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setrestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            const inputValue = e.target.value;
            setSearchInput(inputValue);

            if (inputValue !== "") {
              const data = filter(inputValue, allrestaurents);
              setrestaurents(data);
            } else {
              setrestaurents(allrestaurents);
            }
          }}
        />
        <button>Search</button>
      </div>
      <div className="shoplist">
        {restaurents.map((restaurent) => {
          return (
            <Link to={"/restaurent/" + restaurent?.info?.id} key={restaurent?.info?.id}>
              <ShopList {...restaurent}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
