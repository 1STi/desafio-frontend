import React from "react";
import {
  CapitalListContainer,
  ListContainer,
  ListRow,
  ListItem,
  ListItemHeader,
  ColumnsContainer
} from "./CapitalListStyled";
import Typography from "../Typography/Typography";
import { HorizontalLineContainer } from "../HorizontalLine/HorizontalLineStyled";

const CapitalList = ({ list }) => {
  return (
    <CapitalListContainer>
      <HorizontalLineContainer />
      <Typography type="title">Capitais</Typography>
      <ColumnsContainer>
        <ListContainer>
          <ListRow>
            <ListItemHeader>Min</ListItemHeader>
            <ListItemHeader>Máx</ListItemHeader>
          </ListRow>
          {list.map(item => (
            <ListRow key={item.id}>
              <ListItem>{item.main.temp_min.toFixed(0)}º</ListItem>
              <ListItem>{item.main.temp_max.toFixed(0)}º</ListItem>
              <ListItem>{item.name}</ListItem>
            </ListRow>
          ))}
        </ListContainer>
        <ListContainer>
          <ListRow className="only-desktop">
            <ListItemHeader>Min</ListItemHeader>
            <ListItemHeader>Máx</ListItemHeader>
          </ListRow>
          {list.map(item => (
            <ListRow key={item.id}>
              <ListItem>{item.main.temp_min.toFixed(0)}º</ListItem>
              <ListItem>{item.main.temp_max.toFixed(0)}º</ListItem>
              <ListItem>{item.name}</ListItem>
            </ListRow>
          ))}
        </ListContainer>
      </ColumnsContainer>
    </CapitalListContainer>
  );
};

export default CapitalList;
