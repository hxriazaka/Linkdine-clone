import { Avatar } from "@material-ui/core"
import './sideBar.css'
import bg1 from './imgs/bg-1.jpg'
import { useSelector } from "react-redux"
import { selectUser } from "./features/counter/userSlice"

const SideBar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topic) =>(
        <div className="sidebar-recentitem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>           
        </div>
    )
    return ( 
        <div className='sidebar'>
            <div className="sidebar-top">
                <img src={bg1} alt="" />
                < Avatar src={user.photoUrl}>
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
                <div className="state-bar">
                    <p>Who viewed you</p>
                    <p className="sidebar-num">2,854</p>
                </div>
                <div className="state-bar">
                    <p>Views on post</p>
                    <p className="sidebar-num">1,369</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p> 
                {recentItem('reactjs')} 
                {recentItem('programming')} 
                {recentItem('softwareengineering')} 
                {recentItem('design')} 
                {recentItem('developer')} 
            </div>
        </div>
     );
}
 
export default SideBar;