import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";

const RestaurentMenu = () => {
  const [menu, setmenu] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setmenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
    );
  }
  return (
    <div className="shoplist">
      {menu.map((item) => {
        const map1 = item.card?.card?.itemCards;
        return map1
          ? map1.map((item) => {
              return (
               <MenuCard {...item.card} key={item.card?.info?.id} />
              );
            })
          : null;
          
      })}
    </div>
  );
};

export default RestaurentMenu;
