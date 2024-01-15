import React from 'react'

const Online = ({u}) => {
  return (
    <div>
         <li className='rightbarfriend mb-3'>
                    <div className="rightbarprofileimgcontainer flex px-2 relative">
                        <img src={u.profilePicture} className='h-12 w-12 rounded-full ' />
                        <span className='bg-green-700 rounded-full w-3 h-3 relative right-5 top-1 border-solid border-white border-2'></span>                 
                        <p className='font-bold p-1 pt-2 text-lg'>{u.username}</p>
                        </div>
                </li>
    </div>
  )
}

export default Online