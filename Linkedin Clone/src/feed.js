import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import './feed.css'
import FeedOp from './feedOp'
import Post from './post';
import { useState, useEffect } from 'react';
import {db} from './firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {                
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendpost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name:user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return ( 
        <div className="feed">
            <div className="feed-inputcont">
                <div className="feed-input">
                    < CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendpost} type='submite'>Send</button>
                    </form>
                </div>
                <div className="feed-inputopt">
                    < FeedOp Icon = {ImageIcon} title='Photo' color='#70B5f9'/>
                    < FeedOp Icon = {SubscriptionsIcon} title='Video' color='#7fc15e'/>
                    < FeedOp Icon = {EventNoteIcon} title='Event' color='#e7a33e'/>
                    < FeedOp Icon = {CalendarViewDayIcon} title='Write article' color='#fc9295'/>
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data:{ name, description, message, photoUrl}}) =>(
                < Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
                ))}
            </FlipMove>

            < Post name='Riazaka' description='riazaka.dev@gmail.com' message='Hello'/>
        </div>
     );
}
 
export default Feed;