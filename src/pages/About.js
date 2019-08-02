import React from "react";
import styled from "styled-components";

import faqs from "../utils/faqs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: ${props => props.theme.colors.neutrals[500]};

  & > h1 {
    align-self: center;

    margin-bottom: 2rem;
    font-weight: bold;
  }
  & > h2 {
    margin-bottom: 1rem;
  }
  & > p {
    margin-bottom: 2rem;
  }
  & > p > ol {
    margin: 1rem;
  }
  & > p > ol > li > p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
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
`;

const FAQ = ({ question, answer }) => {
  return (
    <FAQContainer>
      <h2>{question}</h2>
      <p>{answer}</p>
    </FAQContainer>
  );
};

const About = () => (
  <Container>
    <h1>About</h1>
    {faqs.map((faq, index) => (
      <FAQ key={index} question={faq.question} answer={faq.answer} />
    ))}
  </Container>
);

export default About;
