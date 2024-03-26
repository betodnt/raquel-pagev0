import ModalForm from '../modalForm/ModalForm';
import ContactSection from './ContactSection';
import ImageSection from './ImageSection';
import InfoListSection from './InfoListSection';
import LegalJourneySection from './LegalJourneySection';

function Content() {
  return (
    <main className='px-4 sm:px-6 lg:px-8 flex flex-col gap-8 mt-10 max-w-5xl mx-auto'>
      <ImageSection />
      <LegalJourneySection />
      <InfoListSection />
      <ContactSection />
      <ModalForm />
    </main>
  );
}

export default Content;
