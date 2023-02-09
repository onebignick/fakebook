import { useState } from "react";
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/sign-up', {
            username: username,
            password: password
        }).then(()=>{
            setUsername('');
            setPassword('');
        })
    };
    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input name="username" placeholder="username" type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <label for="password">Password</label>
                <input name="password" type="password" onChange={(e)=>setUsername(e.target.value)}/>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;