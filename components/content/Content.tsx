import { ModalForm } from '../modalForm/ModalForm';
import ContactSection from './ContactSection';
import ImageSection from './ImageSection';
import InfoSection from './InfoSection';
import LegalJourneySection from './LegalJourneySection';

function Content() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 flex flex-col items-center  gap-8 mt-10 max-w-5xl mx-auto">
      <h1 id="head" className=" text-center text-4xl font-bold">
        Assessoria Jurídica com Paixão e Conhecimento
      </h1>
      <ImageSection />
      <LegalJourneySection />
      <InfoSection />
      <ContactSection />
      <ModalForm />
    </main>
  );
}

export default Content;
