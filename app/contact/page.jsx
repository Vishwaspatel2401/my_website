"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 669-340-8432",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vishwaspatel2401@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Santa Clara, CA, USA",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    setErrorMessage('');

    const form = e.target;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      form.reset(); // Clear the form
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(error.text || "Failed to send message. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto h-full overflow-hidden">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I&apos;m always open to new opportunities and collaborations. Let&apos;s connect and create something great together.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="from_name" 
                  type="text" 
                  placeholder="First Name" 
                  required 
                />
                <Input 
                  name="last_name" 
                  type="text" 
                  placeholder="Last Name" 
                  required 
                />
                <Input 
                  name="from_email" 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                />
                <Input 
                  name="phone" 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                />
              </div>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              {/* Status message */}
              {status === 'success' && (
                <p className="text-green-500">Thank you! Your message has been sent successfully.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500">{errorMessage}</p>
              )}
              {/* btn */}
              <Button 
                type="submit" 
                size="md" 
                className="max-w-40 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 