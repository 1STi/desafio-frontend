import styled from "styled-components";

const HorizontalLineContainer = styled.div`
  margin: ${props => props.theme.margin.small} 0;
  border-bottom: solid 1px
    ${props => (props.type === "primary" ? props.theme.colors.primary : "#fff")};
  width: ${props => props.width || "100%"};
`;
export { HorizontalLineContainer };
