import { Avatar, Button } from '@mui/material'
import React, {useState}from 'react'
import "./TweetBox.css"
import db from './firebase'

function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState('')
    const[tweetImage, setTweetImage] = useState('')
    const sendTweet = e => {
        e.preventDefault()

        db.collection('posts').add({
            displayName: 'EnocK lubowa',
            username:'enocklubowa',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:'https://media-exp1.licdn.com/dms/image/C4D03AQHZIMg27MGnOQ/profile-displayphoto-shrink_800_800/0/1659382700043?e=1667433600&v=beta&t=DXKa0yuI6KgN7y5MsU3-KNECvdnyMG9qmgh_DheR_x4'
        })
        setTweetMessage("")
        setTweetImage("")
    }
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHZIMg27MGnOQ/profile-displayphoto-shrink_800_800/0/1659382700043?e=1667433600&v=beta&t=DXKa0yuI6KgN7y5MsU3-KNECvdnyMG9qmgh_DheR_x4"/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value ={tweetMessage} placeholder='Whats happening?' type="text"/>
            </div>
                <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder='Optional: Enter image URL' 
                type="text"/>
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>
                Tweet
            </Button>

        </form>
      
    </div>
  )
}

export default TweetBox
