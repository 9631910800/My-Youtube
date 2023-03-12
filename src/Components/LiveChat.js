import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        const i= setInterval(()=>{
            dispatch(addMessage({
                name:"Shubham",
                text:"Hiiiiiiiiiiiiiiiiii"
            }))

       return ()=> clearInterval(i);
        },5000)
    },[])

    return (<div className='w-full h-96 ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
        {chatMessages.map((c)=> <ChatMessage name={c.name} text={c.text}/>)}
    </div>
       
    )
}

export default LiveChat
