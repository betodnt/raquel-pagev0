import Image from 'next/image';
import NavBar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className=' bg-[#361b28] border-b-8 border-[#112d3b] py-3 px-2 sm:px-4 lg:px-6 items-center '>
        <div className='flex  justify-around items-center relative z-10 p-3'>
          <Image src='/images/logo.png' alt='Logo' width={100} height={100} className='' />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
