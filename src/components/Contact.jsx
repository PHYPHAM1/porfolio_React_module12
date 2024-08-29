import { useState } from 'react';
import '../styles/Section.css';

function Contact() {
    //need to declare a state variable to store the user's input
    const [fullName, setFullName] = useState('');  //initial value is an empty string
    const [email, setEmail] = useState('');         //initial value is an empty string
    const [message, setMessage] = useState('');     //initial value is an empty string

    const handleInputChange = (e) => {
        //need to update the state variable when the user types in the input field
        const { name, value } = e.target;

        return name === 'fullName' ? setFullName(value) : name === 'email' ? setEmail(value) : setMessage(value);

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();    //prevent the page from refreshing
    };

    return (
        <div className="container-contact">
            <h1>Contact</h1>
            <form className='contact' onSubmit={handleFormSubmit}>
                <input 
                    value= {fullName}
                    name="fullName"
                    onChange={handleInputChange}  //call the handleInputChange function when the user types in the input field
                    type="text"
                    placeholder='Enter your full name'
                    />
                <input 
                    value={email}
                    name="email"
                    onChange={handleInputChange} //call the handleInputChange function when the user types in the input field
                    type="email"
                    placeholder='Enter your email'
                />
                <input 
                    value={message}
                    name="message"
                    onChange={handleInputChange} //call the handleInputChange function when the user types in the input field
                    type="text"
                    placeholder='Enter your message'
                />
                <button type="submit">Submit</button>
            </form>
        </div>   
    );
}

export default Contact;


