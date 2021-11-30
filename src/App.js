import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login';

function App() {
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
        </Routes>
      </Router>
    </div >
  );
}

export default App;
