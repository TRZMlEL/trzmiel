import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7skaeba', 'template_9ko6csp', form.current, 'k7-AOwc8CFU1x21hK')
          .then((result) => {
              alert('The message has been successfully sent. Thank you for contacting me <3')
              console.log(result.text);
          }, (error) => {
                alert('The message was not sent successfully. Try again')
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <div className='pt-4rem pb-4rem  pl-0 pr-0 md:pl-8rem md:pr-8rem lg:pl-32rem lg:pr-32rem flex flex-col text-light'>
        <div className='flex justify-center items-center mb-2rem'>
            <h2 className='font-semibold text-3xl'>CONTACT</h2>
        </div>
        <form className='flex flex-col gap-1rem' ref={form} onSubmit={sendEmail}>
            <input className='bg-dark border-4 h-3rem p-1rem rounded-lg border-color hover:border-light placeholder:text-gray' type='text' placeholder='Full Name' name='user_name' required />

            <input className='bg-dark border-4 h-3rem p-1rem rounded-lg border-color hover:border-light placeholder:text-gray' type='email' placeholder='Email' name='user_email' required />

            <input className='bg-dark border-4 h-3rem p-1rem rounded-lg border-color hover:border-light placeholder:text-gray' type='text' placeholder='Subject' name='subject' required />
            <div className='h-18rem w-full flex items-center gap-1rem'>
                <textarea className='bg-dark border-4 h-full w-full p-1rem rounded-lg border-color resize-none hover:border-light placeholder:text-gray' name='message' placeholder='Message'></textarea>
                <div className='w-3rem'>
                <button className='w-18rem h-3rem rounded-lg -translate-x-7.5rem rotate-90 bg-color hover:bg-light text-dark font-semibold ' type='submit'>SEND</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact