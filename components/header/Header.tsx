import Image from 'next/image';
import NavBar from './Navbar';

const Header = () => {
  return (
    <header className='bg-[url("/images/direito.webp")] bg-cover bg-center bg-no-repeat  border-b-8 border-[#112d3b]'>
      <div className=' py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-[#112d3b] to-transparent '>
        <div className='flex  justify-around items-baseline relative z-10'>
          <Image src='/images/logo.png' alt='Logo' width={200} height={200} className='' />
          <NavBar />
        </div>
        <div className='text-center pt-10'>
          <h1 id='head' className='text-3xl md:text-5xl font-bold text-[#f6f6d6] font-300  my-5'>
            Assessoria Juridica com Paixão e Conhecimento
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
