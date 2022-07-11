import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {forwardRef} from 'react'

const Post= forwardRef(({ avatar,name,description,message },ref) => {
    
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
          <Avatar src={avatar}> {name[0].toUpperCase()} </Avatar>
          <div className="post__info">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
      </div>

      <div className="post__body">
          {message}
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} text='Like' color='grey' />
        <InputOption Icon={ChatBubbleOutlineOutlinedIcon} text='Comment' color='grey' />
        <InputOption Icon={ShareOutlinedIcon} text='Share' color='grey' />
        <InputOption Icon={SendOutlinedIcon} text='Send' color='grey' />
      </div>
    </div>
  )
})

export default Post
