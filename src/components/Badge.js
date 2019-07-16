import styled from "styled-components";
import theme from "../utils/theme";

const Badge = styled.span`
  background-color: ${theme.colors.tertiary};
  color: ${theme.colors.dark};
  padding: 4px 6px;
  border-radius: 8px;

  font-size: 12px;
  font-weight: bold;
`;

export default Badge;
