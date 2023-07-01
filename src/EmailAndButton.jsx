import React, { useState } from 'react';

function EmailInput() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function handleChange(event) {
      const inputValue = event.target.value;
      setEmail(inputValue);
      validateEmail(inputValue);
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(email));
    }
  
    function handleNotifyClick() {
      setIsSubmitted(true);
      if (isValid && isSubmitted) {
        return(
          alert("You will be notified via email!")
        )
      }
    }
  return (
    <div>
      <input
        id='input'
        type="text"
        value={email}
        onChange={handleChange}
        style={{
          border: `1px solid ${!isValid && isSubmitted ? 'red' : 'rgb(161, 187, 252)'}`,
        }}
        placeholder="Your email address..."/>
        {!isValid && isSubmitted && <p id='invalid-email'><p id='invalidEmail'><p id='error-msg'>Please provide a valid email address.</p></p></p>}
      
      <button
      id='notify-btn'
      onClick={handleNotifyClick}
      style={{
        boxShadow: '1px 1px 8px rgb(79, 125, 243)',
      }}
      >Notify Me</button>
    
    </div>
  );
};

export default EmailInput;
