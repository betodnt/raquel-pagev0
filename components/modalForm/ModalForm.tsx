'use client';

import { useState, useEffect } from 'react';
import ModalContent from './ModalContent';

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  useEffect(() => {
    return () => {
      setShowModal(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    };
  }, []);

  return (
    <div className='text-center'>
      <button
        onClick={handleOpenModal}
        className='bg-[#112d3b] hover:bg-[#3d5c66] text-white font-bold rounded mb-8 py-2 px-4 mt-4 inline-block w-fit h-fit'
      >
        Me envie uma mensagem
      </button>

      {showModal && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              ​
            </span>
            <ModalContent
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              message={message}
              setMessage={setMessage}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
