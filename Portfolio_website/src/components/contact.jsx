import './css/contact.css'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = ()=>{
    
    
    return(
        <>
        <div id="contact">
            <h1>Contact</h1>
            <h3>
                 Lets talk!
            </h3>
            <div id="formContainer">
                
            <form id='contactForm' mailTo="obonolomodd@gmail.com">
                <label for="clientEmail">  Email:                  
                </label><br/>
                <input id="clientEmail" required type="email"></input><br/>

                <label for="message">Message:</label><br></br>               
                <textarea id="message" maxLength={10000} required></textarea>

                <button>Send</button>           

            </form>


            </div>
            
            

        </div>
        
           
        </>

    )
}

export default Contact;