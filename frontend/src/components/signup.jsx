import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user.user) {
      navigate('/home')
    }
  }, [user.user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post('/signup', {
          username: username,
          password: password,
      }).then(response => {
        if (response.data === "Success") {
          navigate('/');
        } else {
          setError(response.data);
        }
      })
  }

  return(
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          {error ? <span>{error}</span> : null}
          <input type="submit" value="submit"/>
        </form>
        <span>Already have an account? <a href='./'>Login</a></span>
      </div>
  );
}

export default Signup