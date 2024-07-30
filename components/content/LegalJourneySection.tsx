function LegalJourneySection() {
  return (
    <section className='bg-white p-8 rounded-lg shadow-3xl'>
      <h2 className='text-3xl text-center font-bold my-6'>Minha Jornada no Mundo Jurídico</h2>
      <ul className='list-inside my-2'>
        <li>
          <p className="text-2xl md:text-lg"><span className='font-bold text-2xl md:text-lg'>Formação Sólida:</span> No final de 2023, concluí minha
          graduação em direito, obtendo o título de bacharel. Essa jornada acadêmica me proporcionou
          uma base sólida e me preparou para enfrentar os desafios do campo jurídico.</p>
        </li>
        <li>
          <p className='font-bold text-2xl md:text-lg mt-8'>Estágios Enriquecedores:</p>
          <ul className='ml-4 md:ml-8'>
            <li className='my-4'>
               <p className="text-2xl md:text-lg"><span className='text-[#daa520] text-3xl'aria-label='checkmark'>&#10004;</span>
              <span className='font-bold'> Tribunal de Justiça:</span> Durante meus estudos, tive a
              oportunidade de estagiar no Tribunal de Justiça no interior de São Paulo. Lá,
              mergulhei nas complexidades do sistema legal e aprendi com os melhores profissionais.</p>
            </li>
            <li className='my-4'>
              <p className="text-2xl md:text-lg"><span className='text-[#daa520] text-3xl'aria-label='checkmark'>&#10004;</span>
              <span className='font-bold'> INSS:</span> Também realizei um estágio de nível médio no
              Instituto Nacional de Seguro Social (INSS). Essa experiência foi crucial para moldar
              minha visão sobre o direito social e suas implicações na vida das pessoas.</p>
            </li>
            <li className='my-4'>
              <p className="text-2xl md:text-lg"><span className='text-[#daa520] text-3xl'aria-label='checkmark'>&#10004;</span>
              <span className='font-bold'> Advogado Mentor:</span> Trabalhei diretamente com o
              renomado Doutor e Professor Luiz Fernando Cassiano de Freitas. Seu conhecimento e
              orientação foram fundamentais para minha formação como operadora do direito e como ser
              humano.</p> 
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default LegalJourneySection;
