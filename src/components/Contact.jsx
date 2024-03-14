import React from 'react';
import NavBar from './NavBar';
import { toast } from 'react-toastify';

const Contact = () => {
    const submitMessage = (event) => {
        event.preventDefault(); 
        toast('Message submitted')
        console.log('Message submitted');
    }

  return (
    <div className="">
        <NavBar />
        <div className="flex flex-col justify-center items-center bg-white p-6 h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

          <form className='w-full max-w-[300px] bg-white rounded-lg shadow-md p-6'>
              <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name" />
              <input type="email" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
              <input type="number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
              <textarea name="message" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Message"></textarea>

              {/* <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Submit</button> */}
              <button onClick={submitMessage} className='bg-[#2195f1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 z-30 text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#f7bf0c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all 
                after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700'>Submit message</button>
          </form>
        </div>
    </div>
  );
};

export default Contact;
