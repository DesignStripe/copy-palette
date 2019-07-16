import styled from "styled-components";
import theme from "../utils/theme";

const Layout = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;

  & > *:first-child {
    margin-bottom: 6rem;
    margin-top: 1rem;
  }
  & > * {
    margin-bottom: 2rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  background-color: ${theme.colors.primary};
`;

export default Layout;
