import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'


const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                message="WOW this works!"
                timestamp="This is a timestamp"
                username="sshangga"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EHbxAIv86EkedPB45QJaXIirvByt5RTZcg&usqp=CAU"
                />
            <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                message="WOW this works!"
                timestamp="This is a timestamp"
                username="sshangga"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EHbxAIv86EkedPB45QJaXIirvByt5RTZcg&usqp=CAU"
                />
            <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                message="WOW this works!"
                timestamp="This is a timestamp"
                username="sshangga"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EHbxAIv86EkedPB45QJaXIirvByt5RTZcg&usqp=CAU"
                />
        </div>
    )
}

export default Feed
