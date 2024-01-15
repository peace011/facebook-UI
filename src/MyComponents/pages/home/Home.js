import React from 'react'
import Topbar from '../../topbar/Topbar'
import Feed from '../../Feed'
import Sidebar from '../../Sidebar'
import Rightbar from '../../Rightbar'

export default function Home(){
    return(
     <>
        <Topbar/>
        <div className="homecontainer flex">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
       </>
    )
}