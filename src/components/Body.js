import RestaurantCard from "./RestaurantCard";
import restaurants from "../Utils/MockData";
import { useState } from "react";

const Body = () => {
const [ListOfRestaurants,setListOfRestaurants]=useState( restaurants)
       

//   let ListOfRestaurants = [
//     {
//       info: {
//         id: "55473",
//         name: "Pizza Hut",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/d281ae33-578d-482f-a4e2-8cf0d8ee3d58_55473.jpg",
//         locality: "Sector 10",
//         areaName: "Rohini",
//         costForTwo: "₹350 for two",
//         cuisines: ["Pizzas"],
//         avgRating: 3.1,
//         avgRatingString: "4.1",
//       },
//     },
//     {
//         info: {
//           id: "55473",
//           name: "MCD",
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/d281ae33-578d-482f-a4e2-8cf0d8ee3d58_55473.jpg",
//           locality: "Sector 10",
//           areaName: "Rohini",
//           costForTwo: "₹350 for two",
//           cuisines: ["Pizzas"],
//           avgRating: 4.8,
//           avgRatingString: "4.1",
//         },
//       },
//     {
//       info: {
//         id: "55477",
//         name: "Kfc",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/d281ae33-578d-482f-a4e2-8cf0d8ee3d58_55473.jpg",
//         locality: "Sector 10",
//         areaName: "Rohini",
//         costForTwo: "₹350 for two",
//         cuisines: ["Pizzas"],
//         avgRating: 4.1,
//         avgRatingString: "4.1",
//       },
//     },
//   ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(ListOfRestaurants,"filteredList");
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
