import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceDizzy, faFaceFlushed, faLocation, faLocationDot, faPhotoFilm, faTag, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'

const Share = () => {
  return (
    <div className='share h-40 w-full border-solid border-gray-200 border-2 shadow-md'>
        <div className="sgarewrap">
            <div className="top flex p-2 py-4">
                <img src='6.jpg' className='h-8 w-8 border-solid border-gray-800 border-2 rounded-full mr-2'/>
                <input type='text' placeholder='Whats on your mind' className='shareinput'/>
            </div>
            <div className="bottom ">
                <div className="shareoptions flex justify-center">
                    <div className="option flex space-x-3 py-3 border-solid border-gray-300 border-t-2 w-[530px] ">
                        <div className="optiontext">
                        <FontAwesomeIcon icon={faPhotoFilm} className='text-red-500 mr-1' />
                            <span className='sp'>Photo or Video</span>
                        </div>
                       
                        <div className="optiontext">
                        <FontAwesomeIcon icon={faTags} className='text-blue-600 mr-1'/>
                            <span className='sp'>Tags</span>
                        </div>
                        <div className="optiontext">
                        <FontAwesomeIcon icon={faLocationDot} className='text-green-600 mr-1'/>
                            <span className='sp'>Location</span>
                        </div>
                        <div className="optiontext">
                        <FontAwesomeIcon icon={faFaceDizzy} className='mr-1'/>
                            <span className='sp'>Feelings</span>
                        </div>
                        <div className="share">
                        <button className='bg-green-600 px-2 py-1 text-white ml-16 rounded-md'>Share</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share