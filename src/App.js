// kolla resten här https://www.youtube.com/watch?v=7wzuievFjrk
import React from 'react';
import './App.css';
import EmailAndButton from './EmailAndButton';

function App() {
  return (
    <div className="App">
      <h1><span id="ping">PING</span><span id='dot'>.</span></h1>
      <p>
      <span id="we-launching">We are launching </span><span id='soon'>soon!</span><br></br>
      <p id='subscribe'>Subscribe and get notified </p>
      </p>
      <EmailAndButton />
      <img src='./illustration-dashboard.png' alt='illustration'></img>
      
     
      {/* insert social media icons and links */}
      <div className='images'>
      <img className='logo' src='./facebook_logo.png' alt='facebook_logo'></img>
      <img className='logo' src='./instagram_logo.png' alt='instagram_logo'></img>
      <img className='logo' src='./twitter_logo.png' alt='twitter_logo'></img>
      </div>
      <div className='copyright'>
      &copy; Copyright Ping. All rights reserved.
      </div>



      {/* useState() to validate email input:
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; */}
    </div>
  );
}

export default App;