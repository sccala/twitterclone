import './Feed.css'
import { Post } from './Post'
import { TweetBox } from "./TweetBox"

export const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post 
      displayName='' 
      username='' 
      verified='' 
      timestamp='' 
      text image='' />
    </div>
  )
}
