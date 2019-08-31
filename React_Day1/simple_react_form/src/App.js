import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './'
import Dashboard from './dashboard';
import Login from './login'



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
