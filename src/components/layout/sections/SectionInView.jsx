import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionInView = ({ StyledSection, className, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StyledSection
      className={className ? className : ''}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      {children}
    </StyledSection>
  );
};

export default SectionInView;
