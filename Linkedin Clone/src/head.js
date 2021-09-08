import "./head.css"
import SearchIcon from '@material-ui/icons/Search';
import linkedinicon from './icons/linkedin.png'
import HeadOp from "./headerOp";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import avatar from './imgs/avatar.png'
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/counter/userSlice";

const Head = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOFAPP = () =>{
        dispatch(logout())
        auth.signOut();   
    };
    return ( 
        <div className='head'>
            <div className="head-left">
                <img src={linkedinicon} alt="" />
                <div className="head-search">
                    < SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>
            <div className="head-right">
                < HeadOp Icon={HomeIcon} title='Home'/>
                < HeadOp Icon={SupervisorAccountIcon} title='My Network'/>
                < HeadOp Icon={BusinessCenterIcon} title='Jobs'/>
                < HeadOp Icon={ChatIcon} title='Messaging'/>
                < HeadOp Icon={NotificationsIcon} title='Notifications'/>
                < HeadOp avatar={true} title='Me' onClick={logoutOFAPP}/>
            </div>
        </div>
    );
}
 
export default Head;



