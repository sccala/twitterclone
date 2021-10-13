import './Widget.css'
import SearchIcon from '@material-ui/icons/Search'
import { Timeline, Share, Tweet } from 'react-twitter-widgets'

export const Widget = () => {
  return (
    <div className='widget'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <Tweet tweetId='841418541026877441' />

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'cleverqazi',
          }}
          options={{ height: 400 }}
        />

        <Share
          url={'https://facebook.com'}
          options={{ text: '#reactjs is awesome', via: 'cleverqazi' }}
        />
      </div>
    </div>
  )
}
