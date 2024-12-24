import {CON_URL} from "../Utils/constants"
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log("resData", resData);
    const { name, cuisines, avgRating, costForTwo  , cloudinaryImageId} =
    resData?.info;
    console.log("costForTwo0",costForTwo);
    
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CON_URL +cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join( ", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
      </div>
    );
  };
  export default RestaurantCard