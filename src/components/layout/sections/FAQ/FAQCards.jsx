import useTheme from '../../../../hooks/useThemeHook';
import {
  StyledQuestion,
  StyledAnswer,
  StyledFAQCard,
  StyledFAQ,
} from '../../../styles/FAQ.styled';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const FAQCard = ({ data }) => {
  const { selectedTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const expandCardHandler = () => {};

  return (
    <StyledFAQCard className={`faq-card ${data.isExpanded ? 'show' : ''}`}>
      <StyledQuestion className="faq-question" aria-expanded={data.isExpanded}>
        <h5 className="title-s">{data.question}</h5>
        <div className="faq-chevron" onClick={expandCardHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              style={{ stroke: `${selectedTheme.colors.primary}` }}
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </StyledQuestion>
      <StyledAnswer className="faq-answer">
        <p>{data.answer}</p>
      </StyledAnswer>
    </StyledFAQCard>
  );
};

const FAQCards = ({ data, title }) => {
  return (
    <StyledFAQ className="faq">
      <h4 className="title-m">{title}</h4>

      {data.map((data) => (
        <FAQCard data={data} key={uuidv4()} />
      ))}
    </StyledFAQ>
  );
};

export default FAQCards;
