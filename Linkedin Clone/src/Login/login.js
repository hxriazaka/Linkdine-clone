import './login.css'
import linkedinbrand from '../icons/LI-Logo.png'
import { useState} from 'react'
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/counter/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [profilpic, setProfilpic] = useState('')
    const dispatch = useDispatch();

    const loginAPP = (e) =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        })
        .catch((error) => alert(error))
    }

    const register = () =>{
        if (!name){
            return alert('Please enter a full name')
            
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilpic,
            })
            .then (() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilpic
                }))
            })

        })
        .catch((error) => alert(error))
    }

    return ( 
    <div className="login">
        <img src={linkedinbrand} alt="" />
        <form>
            <input placeholder='Full name' value={name} onChange={e => setName(e.target.value)}type= "text" />
            <input placeholder='Profile pic URL' value={profilpic} onChange={e => setProfilpic(e.target.value)} type="text" />
            <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="email" />
            <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="Password" />

            <button type='submit' onClick={loginAPP}>Sign In</button>
        </form>
        <p>Not a member?
            <span className='login-reg' onClick={register}>Register Now</span>
        </p>
    </div> 
    );
}
 
export default Login;