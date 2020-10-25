import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatList from './containers/Chat/ChatList'
import ChatRouter from './routers/ChatRouters'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
