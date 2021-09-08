import './headOp.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

const HeadOp = ({Icon, title, onClick, avatar}) => {
    const user = useSelector(selectUser)
    return ( 
        <div onClick={onClick} className="headop">
            {Icon && < Icon className='headop-icon' />}
            {avatar && (
                            < Avatar src={user?.photoUrl} className='headop-icon'>
                            {user?.email[0]}</Avatar>
            )}
            <h3 className='headop-title'>{title}</h3>
        </div>
     );
}
 
export default HeadOp;