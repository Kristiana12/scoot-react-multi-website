const ResponsiveImages = ({ images }) => {
  return (
    <picture>
      <source media="(max-width: 599px)" srcSet={images.mobile} />
      <source
        media="(min-width: 600px and max-width= 990px)"
        srcSet={images.tablet}
      />
      <source media="(min-width: 991px)" srcSet={images.desktop} />
      <img src={images.tablet} alt="traffic" />
    </picture>
  );
};

export default ResponsiveImages;
