function LegalJourneySection() {
  return (
    <section className='bg-white p-8 rounded-lg shadow-2xl'>
      <h2 className='text-2xl md:text-3xl my-6'>Minha Jornada no Mundo Jurídico</h2>
      <ul className='list-inside my-2'>
        <li>
          <span className='font-bold'>Formação Sólida:</span> No final de 2023, concluí minha
          graduação em direito, obtendo o título de bacharel. Essa jornada acadêmica me proporcionou
          uma base sólida e me preparou para enfrentar os desafios do campo jurídico.
        </li>
        <li>
          <span className='font-bold'>Estágios Enriquecedores:</span>
          <ul className='ml-4 md:ml-8'>
            <li className='my-4'>
              <span className='text-[#daa520] text-2xl'>&#10004;</span>
              <span className='font-bold'> Tribunal de Justiça:</span> Durante meus estudos, tive a
              oportunidade de estagiar no Tribunal de Justiça no interior de São Paulo. Lá,
              mergulhei nas complexidades do sistema legal e aprendi com os melhores profissionais.
            </li>
            <li className='my-4'>
              <span className='text-[#daa520] text-2xl'>&#10004;</span>
              <span className='font-bold'> INSS:</span> Também realizei um estágio de nível médio no
              Instituto Nacional de Seguro Social (INSS). Essa experiência foi crucial para moldar
              minha visão sobre o direito social e suas implicações na vida das pessoas.
            </li>
            <li className='my-4'>
              <span className='text-[#daa520] text-2xl'>&#10004;</span>
              <span className='font-bold'> Advogado Mentor:</span> Trabalhei diretamente com o
              renomado Doutor e Professor Luiz Fernando Cassiano de Freitas. Seu conhecimento e
              orientação foram fundamentais para minha formação como operadora do direito e como ser
              humano.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default LegalJourneySection;
