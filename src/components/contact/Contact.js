import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const emailValidation = () => {
    return String(formData.email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg("");
    if (!formData.username) {
      setErrMsg("Username is required!");
    } else if (!formData.phoneNumber) {
      setErrMsg("Phone number is required!");
    } else if (!formData.email) {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation()) {
      setErrMsg("Give a valid Email!");
    } else if (!formData.subject) {
      setErrMsg("Please give your Subject!");
    } else if (!formData.message) {
      setErrMsg("Message is required!");
    } else {

      setSuccessMsg(
        `Thank you, Your Message has been sent successfully!`
      );
      setTimeout(() => {

        setSuccessMsg('')
      }, 3000)

      setFormData({ username: "", phoneNumber: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="flex justify-center items-center text-center">
        {/* Directly adding the Title JSX in Contact Component */}
        <div className="title-container">
          <h1 className="contact-title">CONTACT</h1>
        </div>
      </div>
      <div className="w-full">
        <div className="contact-container">
          <div className="contact-form-container">
            <form className="contact-form">
              {errMsg && <p className="error-msg">{errMsg}</p>}
              <div className="input-group">
                {["username", "phoneNumber", "email", "subject"].map((field, idx) => (
                  <div key={idx} className="input-field">
                    <p className="input-label">{field === "phoneNumber" ? "Phone Number" : field}</p>
                    <input
                      onChange={handleChange}
                      value={formData[field]}
                      name={field}
                      className={`input ${errMsg === `${field.charAt(0).toUpperCase() + field.slice(1)} is required!` ? "input-error" : ""}`}
                      type={field === "email" ? "email" : "text"}
                    />
                  </div>
                ))}
              </div>
              <div className="input-field">
                <p className="input-label">Message</p>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  className={`textarea ${errMsg === "Message is required!" ? "input-error" : ""}`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="submit-button">
                <button
                  onClick={handleSend}
                  className="submit-btn"
                >
                  Send Message
                </button>

                {successMsg && <p className="success-msg">{successMsg}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
