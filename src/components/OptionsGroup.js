import styled from "styled-components";

const OptionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;
  border-radius: 16px;

  background-color: #063285;

  & > * {
    margin-right: 32px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export default OptionsGroup;