import React from "react";
import styled from "styled-components";

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

const About = () => (
  <Container>
    <h1>About</h1>
    <h2>What is CopyPalette</h2>
    <p>
      CopyPalette was build for User Interface designers that struggle (or just
      feel bored) to generate a consistent monochromatic color palette. By
      fine-tuning some parameters you can effortlessly create different shades
      and depths of a single hue and export your palette in a single click!
    </p>
    <h2>How does CopyPalette work?</h2>
    <p>
      CopyPalette app is pretty straightforward! It works as simple as that.
      There are 3 main parameters: the base color, the contrast, variations.
    </p>
    <h2>Which parameters are available? </h2>
    <p>
      Monochromatic palettes can be boring when done poorly. Thus, CopyPalette
      provides 3 parameters to skyrocket your palette:
    </p>
    <ol>
      <li>
        <h3>Base color</h3>
        <p>The basic hue to create</p>
      </li>
      <li>
        <h3>Contrast</h3>
        <p>The basic hue to create</p>
      </li>
      <li>
        <h3>Variations</h3>
        <p>The basic hue to create</p>
      </li>
    </ol>
    <h2>Who created CopyPalette? </h2>
    <p>
      Woddd was created as a fun side project by Dimitris Raptis who used to
      search for hours and kill wods every Sunday. Dimitris is the co-founder of
      Loceye and a fitness freak. User Interface design and Front-end
      development are his geek interests.
    </p>
  </Container>
);

export default About;
