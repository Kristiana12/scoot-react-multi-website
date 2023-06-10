import { styled } from 'styled-components';
import devices from '../styles/devices';
import { motion } from 'framer-motion';

export const StyledFAQSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.heading};

  @media ${devices.laptop} {
    padding: 7.5rem 2rem 2.5rem;
    gap: 4.5rem;
  }

  @media ${devices.desktop} {
    padding: 7.5rem 0 2.5rem;
  }
`;
export const StyledFAQ = styled(motion.div)`
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, max-content);
  }

  h4 {
    text-align: center;
    margin-bottom: 2rem;

    @media ${devices.laptop} {
      grid-row: 1 / -1;
      text-align: left;
    }
  }
`;

export const StyledFAQCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background2};
  padding: 2rem;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const StyledQuestion = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .faq-chevron {
    cursor: pointer;
  }

  svg {
    transition: transform 0.3s;
  }

  svg.rotation {
    transform: rotate(180deg);
  }
`;

export const StyledAnswer = styled(motion(motion.div))`
  margin-top: 1.5rem;
`;
