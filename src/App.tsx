import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRouter from './routers/ChatRouters'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <ChatRouter />
      </div>
    </Router>
  );
}

export default App;
