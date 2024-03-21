'use client';
import { IoLogoWhatsapp, IoLogoInstagram, IoMailOutline } from 'react-icons/io5';
import Link from 'next/link';
import DropdownMenu from '@/components/header/DropdownMenu';

function NavBar() {
  return (
    <nav>
      {/* Links visíveis em telas grandes */}
      <div className='hidden sm:flex gap-8'>
        <Link href='https://wa.me/5518991518387' target='_blank' passHref>
          <IoLogoWhatsapp
            size={48}
            className='text-[#daa520] hover:text-[#fef7d5] cursor-pointer'
          />
        </Link>
        <Link
          href='https://www.instagram.com/raquelrgsmasson'
          target='_blank'
          passHref
          title='Enviar e-mail'
        >
          <IoLogoInstagram
            size={48}
            className='text-[#daa520] hover:text-[#fef7d5] cursor-pointer'
          />
        </Link>
        <Link href='https://www.instagram.com/raquelrgsmasson' target='_blank' passHref>
          <IoMailOutline size={48} className='text-[#daa520] hover:text-[#fef7d5] cursor-pointer' />
        </Link>
      </div>

      {/* Links visíveis em telas menores */}
      <DropdownMenu />
    </nav>
  );
}

export default NavBar;
