import React, { useState } from 'react';
import { FaPlus, FaTimes, FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import image2 from '/Assets/icons/msngr.png';
import image3 from '/Assets/icons/whatsapp.png';

const SocialToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);  // For social links popup
  const [chatbotOpen, setChatbotOpen] = useState(false);  // For chatbot visibility

  // Toggle the social links popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the chatbot visibility with custom button
  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  // Animation variants for the social links popup
  const popupVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.8 },
  };

  return (
    <div className="fixed lg:bottom-12 lg:right-12 bottom-6 right-4 z-50 bg-green-200 rounded-full px-2 py-2">
      {/* Social Links Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col space-y-3 mb-4 items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            transition={{ duration: 0.6 }}
          >
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/01303436227"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center rounded-full shadow-lg pt-1 transform translate scale-105"
            >
              <img className="w-12 h-12 rounded-full" src={image3} alt="WhatsApp" />
            </a>

            {/* Custom Chatbot Toggle Button */}
            <button
              onClick={toggleChatbot}
              className="flex items-center justify-center rounded-full shadow-lg bg-purple-600 p-3 hover:bg-black text-white"
            >
              <FaRobot className="text-2xl" />
              {chatbotOpen ? "" : ""} 
            </button>

            {/* Messenger Link */}
            <a
              href="https://www.facebook.com/profile.php?id=100063900621703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center rounded-full shadow-lg bg-black p-1 hover:bg-gray-800"
            >
              <img className="w-10 h-10" src={image2} alt="Messenger" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Display (using iframe) */}
      {chatbotOpen && (
        <motion.div
          className="fixed bottom-24 right-4 w-80 bg-white rounded-lg shadow-lg p-2 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Chatbot Button */}
          <button
            onClick={toggleChatbot}
            className="absolute text-lg top-8 right-16 text-black  p-1 rounded-full"
          >
            <FaTimes />
          </button>

          <iframe
            src="https://www.chatbase.co/chatbot-iframe/9wiYOY6BIepsUoiQtC3Zg"
            width="100%"
            style={{ height: '100%', minHeight: '600px' }}
            frameBorder="0"
          />
        </motion.div>
      )}

      {/* Main Toggle Button (open/close social links) */}
      <button
        onClick={togglePopup}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaPlus className="text-2xl" />}
      </button>
    </div>
  );
};

export default SocialToggleButton;
