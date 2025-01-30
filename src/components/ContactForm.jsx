import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    number: "",
    message: "",
  });
  const [sentMessage, setSentMessage] = useState("");
  const [padding, setPadding] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const hadleSubmit = async (e) => {
    e.preventDefault();
    const response = await emailjs.send(
      "service_i5vfhc4",
      "template_ou88ggx",
      formData,
      "Fm0Ba7Db4uHtPMhge"
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      number: "",
      message: "",
    });
    setPadding("0.5rem");
    setSentMessage("Message sent successfully ! Thank You...");
    setTimeout(() => setSentMessage(""), 3000);
    setTimeout(() => setPadding(""), 3000);
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          id=""
          required
        />
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your Phone"
          minLength={10}
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          className="message"
          name="message"
          placeholder="Message"
          id=""
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button>Send Message</button>
      </form>
      <div className="message-box" style={{ padding: `${padding}` }}>
        {sentMessage}
      </div>
    </>
  );
}

export default ContactForm;
