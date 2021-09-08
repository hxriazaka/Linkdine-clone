import { Avatar } from '@material-ui/core'
import FeedOp from './feedOp'
import './post.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { forwardRef } from 'react';


const Post = forwardRef(({name, description, message, photoUrl},ref) => {
    
    return ( 
        <div ref={ref} className="post">
            <div className='post-header'>
                < Avatar className='ava' src={photoUrl}>{name[0]}</Avatar>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-button">
                < FeedOp Icon={ThumbUpOutlinedIcon} title='Like' color='gray'/>
                < FeedOp Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
                < FeedOp Icon={ShareOutlinedIcon} title='Share' color='gray'/>
                < FeedOp Icon={SendOutlinedIcon} title='Send' color='gray'/>
            </div>
        </div>
     );
})
 
export default Post;