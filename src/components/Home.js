import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Dynamic Routing Example</h1>
      <ul>
        <li><Link to="/user/101">User 101</Link></li>
        <li><Link to="/user/102">User 102</Link></li>
        <li><Link to="/user/103">User 103</Link></li>
      </ul>
    </div>
  );
}

export default Home;
