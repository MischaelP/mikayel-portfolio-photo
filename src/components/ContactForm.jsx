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
      <div className='flex md:flex-cols  max-w-[1280px] py-3 mx-auto p-10'>
          <div>
            <p>About me</p>
          </div>




          <div className='flex-col md:flex-cols  max-w-[1280px] py-3 mx-auto p-10'>

            <div className='w-full md:w-[700px] p-4 bg-gray-50 rounded-1-md order-1'>
              <form>
                <div className="flex flex-col md:flex-row mb-2">
                  <label htmlFor="Nom" className=" p-1 mb-2 ml-2">Nom</label>
                  <input name="Nom"
                    placeholder="Votre nom"
                    type="text"
                    className="w-full mb-2"
                    onChange={(e) => setNom(e.target.value)}/>
                </div>

                <div className="flex flex-col md:flex-row mb-2">
                  <label htmlFor="Prenom" className='"mb-2 ml-2 p-1'>Prenom</label><br/>
                  <input nom="Prenom" placeholder='Votre prenom' type='text' onChange={(e) =>setPrenom(e.target.value)} className="w-full mb-2 ml-2"/><br/>
                </div>

                <div className="flex flex-col md:flex-row mb-2 p-1">
                  <label htmlFor="email">Email</label><br/>
                  <input name="email" placeholder='Votre email' type='text' onChange={(e) => setEmail(e.target.value)} className="w-full mb-2 ml-2"/><br/>
                </div>

                <div className="flex flex-col md:flex-row mb-2 p-1">
                  <label htmlFor="message">Message</label><br/>
                  <textarea name='message' placeholder='Votre message' onChange={(e) => setMessage(e.target.value)} className='md:w-auto w-full mb-2 ml-2'></textarea><br/>
                </div>
                  <button onClick={handleSubmit} className='mx-auto'>Envoyer</button>
              </form>
            </div>
          </div>
       </div>
    </>
  )
}

export default ContactForm