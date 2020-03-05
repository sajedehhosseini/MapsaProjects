import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList/UserList'

function App() {
  return (
    <div style={{flex: 1,backgroundColor: '#c7c3c7',  width: '100%',
    height: '100%'}}>
    <UserList/>
    </div>
  );
}

export default App;
