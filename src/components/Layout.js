import styled from "styled-components";

const Layout = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 1rem 5vw;
  box-sizing: border-box;

  & > *:first-child {
    margin-bottom: 4rem;
    margin-top: 1rem;
  }
  & > * {
    margin-bottom: 2rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  background-color: ${props => props.theme.colors.primary[100]};
`;

export default Layout;
