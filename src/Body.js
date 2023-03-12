import RestaurantCard from "./RestaurantCard"
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";

function setFilterData(searchText,restaurantData){
    const filterData=restaurantData.filter(restaurantData => restaurantData.data.name.toLowerCase().includes(searchText.toLowerCase()))
    return filterData;
}

const Body=()=>{
    const [searchText,setsearchText]=useState();
    const [restaurantData,setrestaurantData]=useState([]);
    const [filteredRestaurantData,setfilteredRestaurantData]=useState([]);

    
    useEffect(()=>{
        getRestaurantData();
    },[]);

    async function getRestaurantData(){

        const getData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6558126&lng=77.2419522&page_type=DESKTOP_WEB_LISTING")
        const json= await getData.json();

        setrestaurantData(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    
    }   
    const isOnline=useOnline();
    if(!isOnline){
        return (<h1> Your are Offline check Your Internet Connection!!</h1>)
    }



 

    return (filteredRestaurantData.length==0)?<Shimmer/>:(<>
        <div className="bg-pink-50 m-2 p-5">
        
        <input type="text" placeholder="Search" className="border-solid"  value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>

        <button className="p-2 m-3 bg-purple-900 text-white rounded-lg" onClick={()=>{
            const data= setFilterData(searchText,restaurantData);
            setfilteredRestaurantData(data);
        }}> Search</button>
    </div>
    
    

    <div className="flex flex-wrap">
        {filteredRestaurantData.map((restaurant)=><Link to={"/restaurant/ "+restaurant.data.id} key={restaurant.data.id}><RestaurantCard  {...restaurant.data}/></Link>)}
    
    </div>
       
    </>
    
    );
}
export default Body;