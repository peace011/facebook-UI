import React from 'react'


const CloseFriend = ({u}) => {
    return (
        <div>
            <li className='sidebarfrnd flex mt-3'>
                <img src={u.profilePicture} className='h-12 w-12 border-black border-solid border-2 rounded-full mr-2' />
            <span className='frnd name'>{u.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend