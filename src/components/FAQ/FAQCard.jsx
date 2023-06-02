import useTheme from '../../hooks/useThemeHook';

const FAQCard = ({ title, ariaExpanded, question, answer }) => {
  const { selectedTheme } = useTheme();

  return (
    <div className="faq">
      <h4>{title}</h4>
      <div className="faq-card">
        <div className="faq-question" aria-expanded={ariaExpanded}>
          {question}
          <div className="faq-chevron">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                style={{ stroke: `${selectedTheme.colors.primary}` }}
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
        </div>
        <div className="faq-answer">{answer}</div>
      </div>
    </div>
  );
};

export default FAQCard;
