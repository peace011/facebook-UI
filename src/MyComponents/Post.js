import React, { useState ,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {Users} from './dummyData'

const Post = ({p}) => {

    const [like, setLike] = useState(p.id)
    //     () => {
    //     const storedLike = localStorage.getItem(`like-${p.id}`);
    //     return storedLike ? parseInt(storedLike, 10) : p.like;
    //   });

    const[isliked,setIsLiked]=useState(false)

    // const onLike=()=>{
    //     setLike(isliked? like-1 : like+1);
    //     setIsLiked(!isliked);
    //     localStorage.setItem(`like-${p.id}`, like.toString());
    // }
    const onLike = () => {
        const updatedLike = isliked ? like - 1 : like + 1;
        setLike(updatedLike);
        setIsLiked(!isliked);
        // localStorage.setItem(`like-${p.id}`, updatedLike.toString());
      };
      
   

    
  return (
    <div className='post p-3 mt-3'>
        <div className="postwrapper border-solid border-gray-300 border-2 shadow-lg p-4">
            <div className="top flex justify-between">
                <div className="topbarleft flex space-x-2 ">
                    <img src={Users.filter((u)=>u.id===p.userId)[0].profilePicture} className='h-12 w-12 rounded-full'/>
                    <span className='username font-bold '>{Users.filter((u)=>u.id===p.userId)[0].username}</span>
                    <span className='date text-sm pt-1'>{p.date}</span>

                </div>
                <div className="topbarright">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
            </div>
            <div className="ceneter">
                <span className='posttext'>{p.desc}</span>
                <img src={p.photo} className='h-[500px] w-full'/>
            </div>
            <div className="bottom mt-3 flex justify-between ">
                <div className="left space-x-2">
                <FontAwesomeIcon icon={faThumbsUp} onClick={onLike} className='text-1xl text-white bg-blue-700 rounded-full p-1'/>
                <FontAwesomeIcon icon={faHeart} onClick={onLike} className='text-1xl bg-red-700 text-white rounded-full p-1' />
                <span className=''>{like}</span>
               
                </div>
                <div className="right">
                    <span className="l">{p.comment}</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Post