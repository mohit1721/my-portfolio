import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
const ContactForm = () => {
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    // const form = useRef();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
    
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            () => {
              setSuccess(true);
              form.current.reset();
            },
            () => {
              setError(true);
            }
          );
      };
    

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}
      className="lg:h-full lg:w-1/2 bg-red-50 gap-2 justify-center p-4 rounded-xl text-xl flex flex-col "
      >  
      <label className="font-semibold text-2xl">Dear Mohit Kumar,</label>
        <textarea name="user_message" required
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
         />   
        <label className="font-semibold text-2xl">My mail address is:</label>
        <input type="email" name="user_email" placeholder="abc@gmail.com" required
            className="bg-transparent border-b-2 border-b-black outline-none "
         />
        
        <span>Regards</span>
       
        <input type="email" name="user_email" placeholder="Enter your name" required
            className="bg-transparent border-b-2 border-b-black outline-none "
         />
<button
className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
>Send</button>
{success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          ) }
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
      </form>
    </StyledContactForm>
  );
};


export default ContactForm

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;