import React from 'react'
import '../topbar/Topbar.css'
import { Search,Person,Message, Notifications} from '@mui/icons-material'

function Topbar() {
  return (
    <div className="Topconatiner">
        <div className="left">
            <span className="text">SearchMedia</span>

        </div>
        <div className="center">
            <div className="searchbar">
            <Search className='searchicon'/>
            <input type="search for video or post" placeholder='search for friends or posts'  className='searchinput'/>
            </div>
            


        </div>
        <div className="right">
            <div className="links">
                <span className="home">Home</span>
                <span className="timeline">timeline</span>
            </div>
            <div className="topbaricons">
                <span className="image">
                    <Person/>
                </span>
                <span className="iconbadge">1</span>

                <span className="message">
                    <Message/>
                </span>
                <span className="iconbadge">1</span>

            
                <span className="notify"><Notifications/></span>
                <span className="iconbadge">1</span>
                <img src="/assests/profile.jpg"  alt="" className="topbarimg" /> 
            </div>
            
        </div>
    </div>
  )
}

export default Topbar