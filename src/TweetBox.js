import { Button, Avatar } from '@material-ui/core'
import './TweetBox.css'

export const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
          <input placeholder='whats up' type='text'></input>
          <input
            className='tweetBox__imageInput'
            placeholder='Optional: Enter image URL'
            type='text'
          ></input>
        </div>
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}
