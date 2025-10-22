import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

void motion;

const NOTIFICATION_DURATION = 5000; // 5 seconds

// Notification component with z-index to ensure it's always visible
function Notification({ message, type, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-[#00FF94] text-black' : 'bg-red-500 text-white'
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{type === 'success' ? '✅' : '❌'}</span>
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 hover:opacity-75 transition-opacity"
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
}

const contactInfo = {
  email: "pprakash1278@gmail.com",
  linkedin: "krypto-xic",
  github: "krypto-xic"
};


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Auto-dismiss notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, NOTIFICATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  function validateForm() {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setNotification({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      setForm({ name: "", email: "", message: "" });
      
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center bg-[#030606] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="App">Get in Touch</span>
          </h2>
          <p className="text-gray-400">
            Ready to bring your <span className="altText">ideas to life</span>? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-[#00FF94]">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a 
                    href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#00FF94]"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">👨‍💻</span>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a 
                    href={`https://github.com/${contactInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#00FF94]"
                  >
                    {contactInfo.github}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className={`w-full px-4 py-3 bg-[#0D0D0D] border rounded-lg text-white focus:outline-none focus:border-[#00FF94] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-zinc-800'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={`w-full px-4 py-3 bg-[#0D0D0D] border rounded-lg text-white focus:outline-none focus:border-[#00FF94] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-zinc-800'
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-[#0D0D0D] border rounded-lg text-white focus:outline-none focus:border-[#00FF94] transition-colors ${
                    errors.message ? 'border-red-500' : 'border-zinc-800'
                  }`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-[#00FF94] text-black font-semibold rounded-lg transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 duration-500'
                }`} style={{backgroundColor: 'var(--textColor)'}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <AnimatePresence>
                {notification && (
                  <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                  />
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

