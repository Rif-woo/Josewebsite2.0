import React from 'react';
import { motion } from 'framer-motion';

const OrderConfirmation = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <svg 
              className="w-16 h-16 text-green-500 mx-auto" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M22 4L12 14.01l-3-3"
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          
          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            Commande Envoyée!
          </h2>
          
          <p className="mt-4 text-gray-600">
            Votre commande a été envoyée avec succès. Nous vous contacterons bientôt pour confirmer les détails.
          </p>

          <button
            onClick={onClose}
            className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Fermer
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;
