import React, { useState } from 'react';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react';
import { IoLogoWhatsapp, IoLogoInstagram, IoMailOutline } from 'react-icons/io5';

const DropdownMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sm:hidden flex relative'>
      <Hamburger
        size={48}
        rounded
        hideOutline={false}
        color='#daa520 '
        toggled={isMenuOpen}
        toggle={toggle}
      />
      {isMenuOpen && (
        <div className='absolute right-0 top-full rounded-lg bg-[#f6f6d6] shadow- flex flex-col gap-2 p-4 justify-end items-end mt-5'>
          <Link href='https://wa.me/5518991518387' target='_blank' passHref>
            <IoLogoWhatsapp size={48} className='text-[#112d3b]' />
          </Link>
          <Link
            href='https://www.instagram.com/raquelrgsmasson'
            target='_blank'
            passHref
            title='Enviar e-mail'
          >
            <IoLogoInstagram size={48} className='text-[#112d3b]' />
          </Link>
          <Link
            href='mailto:massonraquelrodrigues@gmail.com?subject=Tenho uma dúvida&body=Corpo do e-mail'
            target='_blank'
            passHref
          >
            <IoMailOutline size={48} className='text-[#112d3b]' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
