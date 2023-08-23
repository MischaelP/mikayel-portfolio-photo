import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function ContactForm() {
  const [nom,setNom] = useState("");
  const [prenom,setPrenom] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const readMessage = false;

  const handleSubmit = (e) => {
    const checked = false;
        if(nom.length > 3 && prenom.length > 3 && message.length >3){

                  e.preventDefault();
                  const formData = {
                    Nom : nom,
                    Prenom : prenom,
                    Email : email,
                    Message : message,
                    Read : readMessage

                  };
                  
                  axios.post('http://127.0.0.1:3002/contacts', formData)
                      .then(response => {
                          console.log("Form send");
                      })
                      .catch(error => {
                          console.log("Erreur envoi du formulaire", error.data);
                      });

                    setNom("");
                    setPrenom("");
                    setEmail("");
                    setMessage("");

              }
       
  }
  
  

  return (
    <>
      <div className='flex m-4'>
        <div className='w-1/2 p-4 bg-gray-50 rounded-1-md'>
            <form>
                <label htmlFor="Nom" className='block mb-2 font-semibold'>Nom :</label>
                <input name='Nom' placeholder='Votre nom' type='text' onChange={(e) => setNom(e.target.value)} className='block mb-2 font-semibold'/>
                <label htmlFor="Prenom">Prenom :</label>
                <input nom="Prenom" placeholder='Votre prenom' type='text' onChange={(e) =>setPrenom(e.target.value)}/>
                <label htmlFor="email">Email :</label>
                <input name="email" placeholder='Votre email' type='text' onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="message">Message :</label>
                <textarea name='message' placeholder='Votre message' onChange={(e) => setMessage(e.target.value)}></textarea>
                <button onClick={handleSubmit}>Envoyer</button>
            </form>
        </div>
        <div className='w-1/2 p-4 bg-white rounded-r-md ml-4'>
          <p>lorem</p>

        </div>
      </div>
    </>
  )
}

export default ContactForm