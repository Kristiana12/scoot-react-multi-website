const useResponsiveImages = ({ mobile, tablet, desktop }) => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={mobile} />
      <source media="(min-width: 769px and max-width='1023')" srcSet={tablet} />
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <img src={desktop} alt="man driving a scooter" />
    </picture>
  );
};

export default useResponsiveImages;
