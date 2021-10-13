import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
import { Avatar } from '@material-ui/core'

export const Post = ({ displayName, username, verified, timestamp, image, text }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='headerText'>
            <h3 className=''>
              Rafeh Qazi
              <span>
                <VerifiedUserIcon className='post__badge' />
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt='' />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}
