import Link from 'next/link';
import { IoLogoWhatsapp, IoLogoInstagram, IoMailOutline } from 'react-icons/io5';

function ContactSection() {
  return (
    <section>
      <h2 className='text-3xl my-6 font-bold'>Vamos Garantir Seus Direitos?</h2>
      <p className='text-2xl md:text-xl'>
        Se você precisa de orientação jurídica, esclarecimento de dúvidas ou busca proteger seus
        interesses legais, conte comigo! Juntos, vamos trilhar o caminho da justiça e assegurar seus
        direitos.
      </p>
      <h2 className='text-3xl my-6 font-bold'>Entre em contato</h2>
      <p className='text-2xl md:text-xl'>
        Estou à disposição para ajudá-lo a navegar pelo mundo jurídico. Entre em contato comigo por
        qualquer um dos seguintes meios:
      </p>
      <ul className='list-inside text-base md:text-lg md:ml-8 my-6'>
        <li className='my-2'>
          <Link
            href='https://wa.me/5518991518387'
            target='_blank'
            passHref
            className='flex items-center cursor-pointer'
          >
            <IoLogoWhatsapp size={32} className='text-[#112d3b]' />
            <span className='ml-1 md:ml-2'> <span className='hidden md:inline'>WhatsApp: </span>18 99151-8387</span>
          </Link>
        </li>

        <li className='my-2'>
          <Link
            href='https://www.instagram.com/raquelrgsmasson'
            target='_blank'
            passHref
            className='flex items-center cursor-pointer'
          >
            <IoLogoInstagram size={32} className='text-[#112d3b] ' />
            <span className='ml-1 md:ml-2'>
              <span className='hidden md:inline'>Instagram: </span>@raquelrgsmasson
            </span>
          </Link>
        </li>
        <li className='my-2'>
          <Link
            href='mailto:massonraquelrodrigues@gmail.com?subject=Tenho uma dúvida&body=Corpo do e-mail'
            target='_blank'
            passHref
            className='flex items-center hover:text-bold cursor-pointer'
          >
            <IoMailOutline size={32} className='text-[#112d3b]' />
            <span className='ml-1 md:ml-2'>
              <span className='hidden md:inline'>E-mail: </span>massonraquelrodrigues@gmail.com
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default ContactSection;
