import { useEffect, useState } from 'react'
import './Feed.css'
import db, { firebaseApp } from './firebase'
import { Post } from './Post'
import { TweetBox } from './TweetBox'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import FlipMove from 'react-flip-move'

export const Feed = () => {
  const [posts, setPosts] = useState([])
  //   useEffect(() => {
  //     db.collection('posts').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())))
  //   }, [])

//   const db = getFirestore(firebaseApp)
//   const q = query(collection(db, 'cities'), where('capital', '==', true))

//   useEffect(() => {
//     const querySnapshot = await getDocs(q)
//     querySnapshot.forEach(doc => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, ' => ', doc.data())
//     })
//   }, [])

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(post => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}
