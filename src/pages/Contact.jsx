import { Header, ContactInfo } from '../components/ExportComponents';
import ContactImageMobile from '../assets/images/contact-mobile.jpg';
import ContactImageTablet from '../assets/images/contact-tablet.jpg';
import ContactImageDesktop from '../assets/images/contact-desktop.jpg';

const Contact = () => {
  const headerContent = {
    heroImages: {
      mobile: ContactImageMobile,
      tablet: ContactImageTablet,
      desktop: ContactImageDesktop,
    },
    title: 'Contact',
  };
  return (
    <>
      <Header data={headerContent} sectionClass="section-features" />
      <ContactInfo />
    </>
  );
};

export default Contact;
