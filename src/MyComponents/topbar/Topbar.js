import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUser,faBell,faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Topbar = () => {
  return (
    <div className='topbarcontainer h-12 w-full bg-blue-600 flex items-center sticky text-white justify-around'>
        <div className="topbarleft flex-3 ">
            <span className='logo text-2xl font-bold'>Gurungsocial</span>     
               </div>
        <div className="topbarcenter ">
            <div className="searchbar bg-white rounded-3xl items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass}  className='text-black '/> 
            <input placeholder='search for anything' className='input w-[424px] rounded-2xl '/>
             </div>
        </div>
        <div className="topbarright flex-4">
            <span className="topbarlinks mr-4"><Link to='/' className='hover:text-red-300' style={{ textDecoration: 'none' }}>Homepage</Link></span>
            <span className="topbarlinks">Timeline</span>
        </div>
        <div className="topbarIcons flex">
            <div className="topbarIconItem mr-3">
                <FontAwesomeIcon icon={faUser} />
                <span className="topbarIconBadge bg-red-700 rounded-full relative bottom-2 text-sm px-[1.5px]">1</span>
            </div>
            <div className="topbarIconItem mr-3">
            <FontAwesomeIcon icon={faComment} />
                <span className="topbarIconBadge bg-red-700 rounded-full relative bottom-2 text-sm px-[1.5px]">1</span>
            </div>
            <div className="topbarIconItem mr-3">
            <FontAwesomeIcon icon={faBell} />
                <span className="topbarIconBadge bg-red-700 rounded-full relative bottom-2 text-sm px-[1.5px]">1</span>
            </div>
         </div>
        <Link to='/profile' className='hover:bg-red-300'>
         <img src='6.jpg' alt="" className='topbarimg h-10 w-10 rounded-full'/>
         </Link>
    </div>
  )
}

export default Topbar