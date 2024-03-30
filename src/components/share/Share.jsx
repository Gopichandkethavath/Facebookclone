import React from 'react'
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room, Tag } from '@mui/icons-material'

function Share() {
  return (
    <div className="sharemain">
        <div className="sharedata">
            <img src="/assests/person2.jpeg" alt="person2" className='shareimg' />
           <input type="text" name="" id="" placeholder='what is in your mind?' className='searchinput' />
        </div>

        <hr />
        <div className="share">
          <div className="shareoptions">
          <PermMedia htmlColor='red'/>
          <span>videos </span>
          </div>
          <div className="shareoptions">
          <Label htmlColor='blue'/>
          <span>Tag</span>
          </div>
          <div className="shareoptions" >
          <Room htmlColor='green'/>
          <span>Location </span>
          </div>
          <div className="shareoptions">
          <EmojiEmotions htmlColor='yellow'/>
          <span>Feelings </span>
          </div>
          <button className='sharebtn'>Share</button>
         

        </div>
        
    </div>
  )
}

export default Share