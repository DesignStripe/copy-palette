import React from "react";
import styled from "styled-components";

import faqs from "../utils/faqs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 70%;

  & > h1 {
    align-self: center;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  color: ${props => props.theme.colors.neutrals[500]};
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;

  & > *:first-child {
    margin-bottom: 1rem;
  }
  & > p {
    line-height: 1.7;
  }
`;

const FAQ = ({ question, answer, isHtml }) => {
  return (
    <FAQContainer>
      <h2>{question}</h2>
      {isHtml ? (
        <div dangerouslySetInnerHTML={{ __html: answer }} />
      ) : (
        <p>{answer}</p>
      )}
    </FAQContainer>
  );
};

const About = () => (
  <Container>
    <h1>
      <b>About</b>
    </h1>
    {faqs.map((faq, index) => (
      <FAQ
        key={index}
        question={faq.question}
        answer={faq.answer}
        isHtml={faq.isHtml}
      />
    ))}
  </Container>
);

export default About;
