import styled from "styled-components";

const Badge = styled.span`
  background-color: ${props => props.theme.colors.neutrals[500]};
  color: ${props => props.theme.colors.neutrals[100]};
  padding: 4px 6px;
  border-radius: 8px;

  font-size: 12px;
  font-weight: bold;
`;

export default Badge;
