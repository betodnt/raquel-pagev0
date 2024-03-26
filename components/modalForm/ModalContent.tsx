'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, onChange }) => (
  <label className='block mt-3'>
    {label}:
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm'
    />
  </label>
);

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange }) => (
  <label className='block mt-3'>
    {label}:
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm'
    />
  </label>
);

interface ModalContentProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleCloseModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ handleCloseModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    console.log(formState);
    handleCloseModal();
  };

  return (
    <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
      <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <h2 className='text-lg leading-6 font-medium text-gray-900'>Me envie uma mensagem</h2>
        <form onSubmit={handleSubmit} className='mt-2'>
          <FormField
            label='Nome'
            type='text'
            name='name'
            value={formState.name}
            onChange={handleChange}
          />
          <FormField
            label='Email'
            type='email'
            name='email'
            value={formState.email}
            onChange={handleChange}
          />
          <FormField
            label='Telefone'
            type='tel'
            name='phone'
            value={formState.phone}
            onChange={handleChange}
          />
          <TextAreaField
            label='Mensagem'
            name='message'
            value={formState.message}
            onChange={handleChange}
          />
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <button
              type='submit'
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#112d3b] text-base font-medium text-white hover:bg-[#3d5c66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
            >
              Enviar
            </button>
            <button
              type='button'
              onClick={handleCloseModal}
              className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;
