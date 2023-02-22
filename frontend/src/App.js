import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import { useState, createContext } from 'react';
import axios from 'axios';
import Profile from './components/profile';

export const UserContext = createContext(null);

const ProtectedRoute = ({user, redirectPath='/'}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace/>;
  }
  return <Outlet/>;
};

function App() {
  const [user, setUser] = useState(null);

  const getUser = () => {
    axios.get('/user').then(response => {
      setUser(response.data)
    })
  }

  return (
    <Router>
      <UserContext.Provider value={{user, getUser}}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
