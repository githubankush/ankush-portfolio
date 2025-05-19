"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);  // <--- add this line
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setError("Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <h1 className="h1 mb-8 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 bg-transparent border border-[#00ff99] rounded-lg text-white placeholder:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 bg-transparent border border-[#00ff99] rounded-lg text-white placeholder:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-4 bg-transparent border border-[#00ff99] rounded-lg text-white placeholder:text-white resize-none"
          ></textarea>
          <button
            type="submit"
            className="uppercase w-full py-3 border border-[#00ff99] rounded-lg text-[#00ff99] hover:bg-[#00ff99] hover:text-white transition-all duration-300"
          >
            Send Message
          </button>
          {success && <p className="text-green-400 text-center">Message sent successfully!</p>}
          {error && <p className="text-red-400 text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
