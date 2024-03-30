import React from 'react'
import './Right.css'
import Share from '../share/Share'
import { PhonePausedOutlined } from '@mui/icons-material'
import Post from '../posts/Post'

function Right() {
  return (
    <div className='Right'>
      <Share/>
      <Post/>
      <Post/>

    </div>
  )
}

export default Right