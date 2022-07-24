import { Avatar } from '@mui/material'
import './Post.css'
import {forwardRef} from 'react'

const Post= forwardRef(({ avatar,name,description,message },ref) => {
    
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
          <Avatar src={avatar}> {name?.slice(0,1).toUpperCase()} </Avatar>
          <div className="post__info">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
      </div>

      <div className="post__body">
          {message}
      </div>

    </div>
  )
})

export default Post
