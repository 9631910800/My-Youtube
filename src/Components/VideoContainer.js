import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';


const VideoContainer = () => {
    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos= async ()=>{
        const data =await fetch(YOUTUBE_API);
        const JSON= await data.json();

        console.log(JSON.items);
        setVideos(JSON.items);
        console.log(videos);
      

    }
   
    return (
    <div className='flex flex-wrap'>
        {videos.map((video)=><Link key={video.id} to={"watch?v="+ video.id}> <VideoCard   info={video}/></Link>)}
    </div>
  )
}

export default VideoContainer
