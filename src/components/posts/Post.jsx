import React from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material'
function Post() {
  return (
    <div className="postmain">
        <div className="postdetail">
            <div className="post">
            <img src="/assests/person2.jpeg" alt="" className='postimg' />
            <span className='min'  >Chinnu</span>
            <span className='mins'>5 mins ago</span>
            <span className='setting'><MoreVert/></span>
            </div>
            
            <div>
                <img src="./assests/main.jpeg" alt="photo"c className='mainimg' />
            </div>
            
        </div>
       
       
    </div>
  )
}

export default Post