import Image from 'next/image';

function ImageSection() {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between'>
      <Image
        src='/images/profile.png'
        alt='Raquel Rodrigues Masson'
        width={1000}
        height={1000}
        className='rounded-full my-7 w-32 h-32 md:mr-10 md:mb-0'
      />
      <p className='text-center text-2xl md:text-left md:mt-11 md:text-xl'>
        Olá! Seja bem-vindo(a) <br />
        Me chamo Raquel Rodrigues Masson, uma recém-formada em direito apaixonada por justiça e
        comprometida em ajudar você a garantir seus direitos.
      </p>
    </div>
  );
}

export default ImageSection;
