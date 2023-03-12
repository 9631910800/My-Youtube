import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [params]=useSearchParams();
    console.log(params.get("v"));
    const videoid=params.get("v");
    const [videoData,setVideoData]=useState();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());


    },[])

  return (
 <div className='flex w-full'>
  <div>
      <iframe id="player" type="text/html" width="640" height="390"
        src={"https://www.youtube.com/embed/"+videoid}
        frameborder="0"></iframe>
      <CommentsContainer/>
      </div>  
      <div className='w-full mx-1 mt-3'>
      <LiveChat/>
      </div>
        
       
 </div>
  )
}

export default WatchPage
