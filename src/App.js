import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import SignupPage from './Pages/Signup'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='/signup' element={<SignupPage />}>
          </Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
