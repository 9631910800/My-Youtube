import React from 'react'
 
const Comment=({data})=>{
  const{name,text}=data;
  return(      <div className='flex bg-slate-100 m-1 p-1 shadow-lg'>
    <img className='h-10 w-10' alt="user" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"/>  
    <div className=''>
    <h1 className='font-bold ml-1'>{name}</h1>
    <h2 className='ml-1'>{text}</h2>
    </div>
   </div>)
}

const CommentList=({comments})=>{
  return(
    <div>
      {comments.map((comment,index)=><div>
        <Comment key={index} data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
        <CommentList comments={comment.replies}/>
        </div>
        </div>)}
    </div>
  )
}
const commentsData=[
  { name:"Shubham",
      text:"I love my India",
      replies:[]
  },
  {name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[]

  }]

  }]

  },{name:"Shubham",
  text:"I love my India",
  replies:[]

  },{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[]

  },{name:"Shubham",
  text:"I love my India",
  replies:[]

  },{name:"Shubham",
  text:"I love my India",
  replies:[]

  },{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[]

  }]

  }]

  },{name:"Shubham",
  text:"I love my India",
  replies:[]

  }]

  }]

  },{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[{name:"Shubham",
  text:"I love my India",
  replies:[]

  },{name:"Shubham",
  text:"I love my India",
  replies:[]

  }]

  }]

  }]

  }]



  

const CommentsContainer = () => {
 
return (
    <div >
        <h1 className='font-bold m-2 p-2'>Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer