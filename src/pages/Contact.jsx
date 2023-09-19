import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in all fields.');
    } else {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setFormSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div>
      <h1 className="title">Name</h1>
      <input
        className="input is-primary"
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <h1 className="title">Email</h1>
      <input
        className="input is-primary"
        type="text"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <h1 className="title">Message</h1>
      <input
        className="textarea is-primary"
        type="text"
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <button type="button" className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>

      {formSubmitted && <p className="success-message">Form submitted successfully!</p>}
    </div>
  );
}