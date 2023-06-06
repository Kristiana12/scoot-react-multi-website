import { Cards } from '../../../ExportComponents';

const ProductsBookSection = () => {
  const content = [
    {
      title: 'Book Your Appointment Today',
      titleClass: 'section-title-l',
      paragraph:
        'Book an appointment today to see and test ride our fleet of stylish and well-maintained scooters. Our friendly staff will be there to answer all your questions, ensuring that you have complete clarity before making your decision.',
      button: 'Book now',
      buttonClass: 'btn-primary',
      urlLocation: '/contact',
      className: 'book-card',
    },
  ];

  return <Cards dataArr={content} sectionClass="section-booking" />;
};

export default ProductsBookSection;
