import Image from 'next/image';
import NavBar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className=' bg-[#361b28] p-3 border-b-8 border-[#ffffff] items-center '>
        <div className='flex  justify-around items-center p-1'>
          <Image src='/logo.png' alt='Logo' width={100} height={100} className='p-0' />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
