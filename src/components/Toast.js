import styled from "styled-components";

const Toast = styled.div`
  background-color: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.primary[100]};
  border-radius: ${props => props.theme.radius};
  padding: 0.5rem;
`;

export default Toast;
