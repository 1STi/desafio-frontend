import styled from "styled-components";

const CapitalListContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.padding.large};
  flex-direction: column;
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 242px;
`;
const ListRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListItem = styled.div`
  display: flex;
  padding: ${props => props.theme.padding.small};
  font-weight: 700;
  min-width: 40px;
`;

const ListItemHeader = styled.div`
  display: flex;
  padding: ${props => props.theme.padding.small};
  font-weight: 300;
`;

export {
  CapitalListContainer,
  ListContainer,
  ListRow,
  ListItem,
  ListItemHeader,
  ColumnsContainer
};
