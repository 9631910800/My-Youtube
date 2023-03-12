import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_LOGO,HAMBURGER_MENU,USER_ICON } from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResult } from "../utils/searchSlice";
const Header=()=>{

    const [searchQuery,setSearchQuery]=useState("");
    const [showSuggetsion,setshowSuggetsion]=useState(false);
    const [suggestions,setSuggestions]=useState({});

    
    const searchCache=useSelector((store)=>store.search);
    
    const dispatch=useDispatch();    
    const toggleHandler=()=>{
        dispatch(toggleMenu());

    }

useEffect(()=>{
    
    const timer=setTimeout(()=>{
        if(searchCache[searchQuery]){
                console.log(suggestions);
        }
        else{
            getSuggestion();
        }
    },200);

    return ()=>{
        clearTimeout(timer);
    }

},[searchQuery]);

    
const getSuggestion= async()=>{
        setSuggestions({
            [searchQuery]:[1,2,3],
        })
       
        dispatch(cacheResult({
            [searchQuery]:[1,2,3]
        }))
       
        console.log(suggestions);
    }
   
    return (
    <div className="grid grid-cols-4 gap-4 shadow-lg bg-slate-100 h-16">
    <div>
        <img onClick={()=>toggleHandler()} alt="menu" src={HAMBURGER_MENU}
            className="h-10 m-1  cursor-pointer" />
    </div>
    <div>
        <a href="/">
        <img className="h-10 m-1 " alt="youtube.logo" src={YOUTUBE_LOGO}/>
        </a>
    </div>
    <div >
        <input  className=" h-10  mt-1 " type="text" value={searchQuery} 
        onChange={(e)=>{setSearchQuery(e.target.value)}}
        onFocus={()=>{setshowSuggetsion(true)}}
        onBlur={()=>{setshowSuggetsion(false)}}/>
        <button className=" h-10  bg-slate-200 mt-1">search</button>
      {showSuggetsion &&   <ul className="bg-white  absolute shadow-lg w-56 mt-1">
            <li className="m-1 py-1 px-2 shadow-sm hover:bg-black">Shubham</li>
            <li className="m-1 py-1 px-2 shadow-sm">Shubham</li>
            <li className="m-1 py-1 px-2 shadow-sm">Shubham</li>
            <li className="m-1 py-1 px-2 shadow-sm">Shubham</li>
           
        </ul>
}
    </div>
    <div>
        <img className=" h-10 " alt="usericon" src={USER_ICON}/>
    </div>

    </div>);

}
export default Header;
