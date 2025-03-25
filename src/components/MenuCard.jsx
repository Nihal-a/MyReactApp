import React from "react";

const MenuCard = ({ info }) => {
  return (
    <div className="card">
      {info.imageId ? (
        <img
          src={`
            https://media-assets.swiggy.com/swiggy/image/upload/${info?.imageId}
          `}
        />
      ) : null}

      <h3>{info?.name}</h3>
      {/* <h3>Cuisines : {info?.cuisines.join(", ")}</h3> */}
      {/* <h4>Cost for Two : {info.costForTwo} </h4>
      <p>{info?.avgRating} stars</p> */}
    </div>
  );
};

export default MenuCard;
