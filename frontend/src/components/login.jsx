import '../styles/login.scss'
import { UserContext } from '../App';
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const user = useContext(UserContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.user) {
            navigate('/home')
        }
    }, [user.user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', {
            username: email,
            password: password,
        }).then(response => {
            if (!response.data) {
                setError('Invalid email or password');
            } else {
                user.getUser();
            }
        });
    }
    
    return(
        <div className="wrapper">
            <div className="wrapper-small">
                <h1 className="hero-text">fakebook</h1>
                <p className="hero-desc">Fakebook helps you connect and share with the people in your life.</p>
                </div>
            <div className="wrapper-small">
                <form onSubmit={handleSubmit}>
                    <input value={email || ''} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input value={password || ''} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span>{error}</span><br/>
                    <input type="submit" value="submit"/>
                </form>
                <span>Don't have an account? <a href='./signup'>Sign up</a></span>
            </div>
        </div>
    );
}

export default Login