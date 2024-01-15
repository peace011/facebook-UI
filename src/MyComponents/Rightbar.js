import React from 'react'
import {Users} from './dummyData'
import Online from './Online'
import { Home } from '@mui/icons-material'

const Rightbar = ({profile}) => {

  const HomeRightbar=()=>{
    return(
      <>
       <div className="birthcalendar flex ">
                <img src='bday.jpg' className='h-14 '/>
                    <span className='text ml-2 text-lg'><b>Tzuyu</b> and <b>3 others</b> have a birthday today</span>
              
            </div>
            <img className='w-full p-2' src='2.jpg'/>
            <h4 className='font-bold p-2 mt-3 text-lg'>Online Friends</h4>
            <ul className=' rightbarFriendlist'>
               {Users.map((u)=>(
                <Online u={u}/>
               ))}
              
                
            </ul>
      </>
    )
  }

  const ProfilRightBar=()=>{
    return(
<>
<div className="rightbarTitle text-xl font-semibold">User Information</div>
<div className="rightbarInfo mt-1">
  <div className="rightbarInfo pt-1 space-x-4">
    <span className="rightbarInfokey">City:</span>
    <span className="rightbarInfokey">New York</span>
  </div>
  <div className="rightbarInfo pt-1 space-x-4">
    <span className="rightbarInfokey">From:</span>
    <span className="rightbarInfokey">Thailand</span>
  </div>
  <div className="rightbarInfo pt-1 space-x-4">
    <span className="rightbarInfokey">Relationship:</span>
    <span className="rightbarInfokey">Single</span>
  </div>
</div>
<h4 className='font-bold text-lg mt-4'>User friends</h4>
<div className="rightbarFollowings flex flex-wrap mt-3">
  <div className="rightbarFollowings w-1/3 p-2 ">
    <img src='vprf.webp' className=' h-28 '/>
    <span className='rightbarfollowingname'>Jennie Kim</span>
  </div>
  <div className="rightbarFollowings w-1/3 p-2 ">
    <img src='2.jpg' className=' h-28'/>
    <span className='rightbarfollowingname'>Jennie Kim</span>
  </div>
  <div className="rightbarFollowings w-1/3 p-2">
    <img src='3.jpg' className=' h-28'/>
    <span className='rightbarfollowingname'>Jennie Kim</span>
  </div>
  <div className="rightbarFollowings w-1/3 p-2">
    <img src='4.png' className=' h-28'/>
    <span className='rightbarfollowingname'>Jennie Kim</span>
  </div>
  <div className="rightbarFollowings w-1/3 p-2 ">
    <img src='6.jpg' className=' h-28'/>
    <span className='rightbarfollowingname'>Jennie Kim</span>
  </div>
  <div className="rightbarFollowings w-1/3 p-2 ">
    <img src='jk.jpg' className=' h-28'/>
    <span className='rightbarfollowingname'>Jennie Kim</span>
  </div>
</div>
</>
  )}

  return (
    <div className='rightbar' style={{ flex: '3' }}>
        <div className="rightbarwrapper ">
        {profile? <ProfilRightBar/> :  <HomeRightbar/> } 
        
        </div>
    </div>
  )
}

export default Rightbar