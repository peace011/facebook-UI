import React from 'react'
import Share from './Share'
import Post from './Post'
import {Posts} from './dummyData'

const Feed = () => {
  return (
    <div className='feed' style={{ flex: '5' }}>
        <div className="feedwrapper">
            <Share/>
            {Posts.map((p)=>(
              <div key={p.id} >
            <Post p={p}/>

                </div>
            ))}
           

        </div>
    </div>
  )
}

export default Feed