import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrect, setIncorrect] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/log-in', {
            username: username,
            password: password
        }).then(() => {
            navigate('/home')
        }).catch(setIncorrect(true));
        setUsername('');
        setPassword('');
    };

    return(
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input name="username" placeholder="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                {incorrect ? <span>Username or password incorrect</span>: ''}
                <label for="password">Password</label>
                <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login