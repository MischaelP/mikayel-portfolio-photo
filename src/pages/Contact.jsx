import React from 'react'
import ContactForm from '../components/ContactForm'


function Contact() {


  return (
    <>
     <div className='flex flex-col max-w-[1280px]  mx-auto sm:pt-2 sm:flex-row h-[100px] p-12'>
      <p>Send me an Email</p>
     </div>
    <ContactForm />
    </>
  )
}

export default Contact