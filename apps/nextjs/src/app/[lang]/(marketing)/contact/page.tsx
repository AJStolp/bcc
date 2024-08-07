"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(
        `${BASE_URL}/api/contact` || "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-5xl font-bold">Contact Us</h1>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto max-w-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded border p-2 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded border p-2 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded border p-2 dark:border-gray-700 dark:bg-gray-800"
              rows={5}
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="rounded bg-[#0d5b5b] px-4 py-2 text-white hover:bg-[#5c087f] hover:underline"
          >
            Send Message
          </motion.button>
        </motion.form>
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center"
          >
            {status}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
