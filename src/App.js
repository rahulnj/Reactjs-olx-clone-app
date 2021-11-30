import React, { useEffect, useContext } from 'react';
import './App.css';
import { AuthContext, FirebaseContext } from './store/Context';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login';
import Create from './Components/Create/Create';

function App() {
  const { user, setUser } = useContext(AuthContext)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        // User is signed out
      }
    });
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='/signup' element={<SignupPage />}>
          </Route>
          <Route exact path='/login' element={<LoginPage />}>
          </Route>
          <Route exact path='/Create' element={<Create />}>
          </Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
