import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import useAuthCheck from './hooks/useAuthCheck';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (<div>Checking authentication</div>)
  :(
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={
                  <PublicRoute>
                      <Login />
                  </PublicRoute>
               
                } />
                <Route path="/signup" element={
                  <PublicRoute>
                      <SignUp />
                  </PublicRoute>
                
                } />
                <Route path="/home" element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                 
                } />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
