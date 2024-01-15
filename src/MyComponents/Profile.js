import React from 'react'
import Topbar from './topbar/Topbar'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'

const Profile = () => {
  return (
    <div className=''>
    <Topbar/>
    <div className="profile flex">
        <Sidebar/>
    <div className="Profileright" style={{flex: '9'}}>
        <div className="profileRightTop relative">
            <div className="profilecover relative">
            <img src='4.png' className='cover h-[400px] w-full'/>
            <img src='6.jpg' className='user rounded-full absolute h-32 w-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>


            </div>
           <div className="profileInfo relative flex flex-col items-center mt-20 mb-8">
            <h4 className='text-2xl font-bold'>Lalisa Manoban</h4>
            <span>Hello, This is Lisa from Blackpink</span>
           </div>
        </div>
        <div className="profileRightbottom flex">
        <Feed/>
         <Rightbar profile/>
            </div>
  
    </div>
    </div>
   </div>
  )
}

export default Profile