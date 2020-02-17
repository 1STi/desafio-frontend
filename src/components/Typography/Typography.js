import React from "react";
import { Title } from "./TypographyStyled";

const Typography = props => {
  const types = {
    title: Title
  };
  const ComponentSelected = types[props.type || "default"];
  return <ComponentSelected>{props.children}</ComponentSelected>;
};

export default Typography;
