import React from 'react';
import { faRss ,faMessage, faVideo, faUserGroup, faBookmark, faJpy, faCalendar, faGraduationCap, faBox, faCircleQuestion} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseFriend from './CloseFriend'
import { Users } from './dummyData'

const Sidebar = () => {
  return (
    <div className='sidebar h-[100vh] overflow-y-scroll ' style={{ flex: '3'}}  >
      <div className="sidebarwrapper p-4 ">
        <ul className="sidebarlist ">
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faRss}  />
                <span className="text ml-3">Feed</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faMessage} />
                <span className="text ml-3">Chats</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faVideo} />
                <span className="text ml-3">Videos</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faUserGroup} />
                <span className="text ml-3">Groups</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faBookmark} />
                <span className="text ml-3">Bookmarks</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faCircleQuestion} />
                <span className="text ml-3">Questions</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faBox} />
                <span className="text ml-3">Jobs</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faCalendar} />
                <span className="text ml-3">Events</span>
            </li>
            <li className='sidebarlistitem mb-4 '>
            <FontAwesomeIcon icon={faGraduationCap} />
                <span className="text ml-3">Courses</span>
            </li>
        </ul>
        <button className='show bg-gray-300 p-1 px-3'>Show more</button>
        <div className='friendlist '>
            <ul className=' border-gray-400 border-solid border-t-2 mt-3' >
               
                 {Users.map((u)=>(
                <CloseFriend u={u}/>
               ))}
              
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
