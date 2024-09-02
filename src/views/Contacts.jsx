import React from 'react'
import { useState } from 'react';
import '../styles/Section.css';

export default function Contacts() {
  //Here we set 3 variables, fullname, email and message using 'useState'
  const [fullName, setFullName] = useState('');  //default value is an empty string
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    //getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value

    if(inputType ==='fullname'){
      setFullName(inputValue);
    }else if (inputType ==='email'){
      setEmail(inputValue);
    }else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    //preventing the default behavior of the form submit(which is to refresh the page)
    e.preventDefault();

    //first we check to see if the email is not valid or if the username is empty. if so we set an error message to be displayed on the page.
    if(!validEmail(email) || !fullName || !message){
      setErrorMessage('Email or fullname is invalid or a message');
      
      return;
    }
    //we want to clear out the input after a successful registration
    setFullName('');
    setEmail('');
    setMessage('');
  }

  return (

    <div className="container text-center">
    <h1>Contacts</h1>
    <form className="contact" onSubmit={handleFormSubmit}>
      <input
        value={fullName}
        name="fullname"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Full Name"
      />
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Enter an email"
      />
      <input
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter a message"
      />
      <button type="submit">Submit</button>
    </form>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
  </div>
  );
}

