import ScootinImageDesktop from '../assets/images/scootin-desktop.jpg';
import ScootinImageTablet from '../assets/images/scootin-tablet.jpg';
import ScootinImageMobile from '../assets/images/scootin-mobile.jpg';
import { Header, Container } from '../components/ExportComponents';
import {
  ProductsFeatures,
  ProductsPreview,
  ProductsBookSection,
} from '../components/ExportComponents';

const Products = () => {
  const headerContent = {
    heroImages: {
      mobile: ScootinImageMobile,
      tablet: ScootinImageTablet,
      desktop: ScootinImageDesktop,
    },
    title: 'Products',
  };

  return (
    <>
      <Header data={headerContent} />
      <Container>
        <ProductsFeatures />
        <ProductsPreview />
        <ProductsBookSection />
      </Container>
    </>
  );
};

export default Products;
