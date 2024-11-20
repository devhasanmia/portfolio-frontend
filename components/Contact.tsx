import React from 'react';
import MagicButton from './ui/MagicButton';

const Contact = () => {
  return (
    <div className=" py-12 px-6">
      <div className="max-w-3xl mx-auto border-2 border-gray-500 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Contact Us
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <a href="#" className='w-full'>
            <MagicButton title='Send Message'/>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
