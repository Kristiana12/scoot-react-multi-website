const useResponsiveImages = ({ mobile, tablet, desktop }) => {
  return (
    <picture>
      <source media="(max-width: 499px)" srcSet={mobile} />
      <source
        media="(min-width: 500px and max-width='1339px')"
        srcSet={tablet}
      />
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <img src={desktop} alt="man driving a scooter" />
    </picture>
  );
};

export default useResponsiveImages;