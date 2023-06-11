import { useState } from 'react';
import useTheme from '../../../../hooks/useThemeHook';
import {
  StyledQuestion,
  StyledAnswer,
  StyledFAQCard,
  StyledFAQ,
} from '../../../styles/FAQ.styled';
import { v4 as uuidv4 } from 'uuid';
import { FaqToggle } from '../../../styles/animation';
import { LayoutGroup, motion } from 'framer-motion';

const FAQCard = ({ data }) => {
  const { selectedTheme } = useTheme();
  const [isActive, setIsActive] = useState(data.active);

  const clickHandler = () => {
    setIsActive(() => !isActive);
  };

  return (
    <StyledFAQCard layout>
      <StyledQuestion aria-expanded={isActive}>
        <motion.h5 layout className="title-s">
          {data.question}
        </motion.h5>
        <motion.div layout className="faq-chevron" onClick={clickHandler}>
          <svg
            className={isActive ? 'rotation' : ''}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
          >
            <path
              fill="none"
              style={{ stroke: `${selectedTheme.colors.primary}` }}
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </motion.div>
      </StyledQuestion>
      {isActive && (
        <StyledAnswer
          layout
          variants={FaqToggle}
          initial="hidden"
          animate="visible"
        >
          <p>{data.answer}</p>
        </StyledAnswer>
      )}
    </StyledFAQCard>
  );
};

const FAQCards = ({ data, title }) => {
  return (
    <StyledFAQ className="faq">
      <h4 className="title-m">{title}</h4>
      <LayoutGroup>
        {data.map((data) => (
          <FAQCard data={data} key={uuidv4()} />
        ))}
      </LayoutGroup>
    </StyledFAQ>
  );
};

export default FAQCards;
