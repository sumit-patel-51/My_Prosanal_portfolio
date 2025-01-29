import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [massege, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("")
  const [padding, setPadding] = useState("")

  const hadleSubmit = (e) => {
    e.preventDefault();

    console.log("hello");
    setName("");
    setEmail("");
    setNumber("");
    setSubject("");
    setMessage("");
    setPadding("0.5rem")
    setSentMessage("Message sent successfully ! Thank You...");
    setTimeout(()=> setSentMessage(""), 3000);
    setTimeout(()=> setPadding(""), 3000);
  };


  return (
    <>
    
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name" required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          name=""
          id=""
          required
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Your Phone"
          minLength={10}
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <textarea
          className="message"
          name=""
          placeholder="Message"
          id=""
          value={massege}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>Send Message</button>
      </form>
      <div className="message-box" style={{padding:`${padding}`}}>{sentMessage}</div>
    </>
  );
}

export default ContactForm;
