import React from 'react'

function ContactForm() {
  return (
    <>
        <form>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Email' name="" id="" />
            <input type="number" placeholder='Your Phone' minLength={10} />
            <input type="text" placeholder='Subject' />
            <textarea className='message' name="" placeholder='Message' id=""></textarea>
            <button type="submit">Send Message</button>
        </form>
    </>
  )
}

export default ContactForm
