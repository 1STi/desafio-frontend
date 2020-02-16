import React from 'react';
import {buildDisplayArea, DisplayAreaProp} from '../theme/helpers';
import {ReactChildren} from 'react';
import Grid, {GridProps} from './Grid/Grid';

const template = {
  mobile: {
    rows: 'repeat(5, 1fr);',
    columns: 'repeat(2, 1fr)',
    area: `
    "C1 C3"
    "C1 C3"
    "C2 C3"
    "C2 C4"
    "C2 C4"
   `,
  },
  tablet: {
    rows: 'repeat(5, 1fr);',
    columns: 'repeat(3, 1fr)',
    area: `
    "C1 C3 C5"
    "C1 C3 C5"
    "C1 C4 C5"
    "C2 C4 C6"
    "C2 C4 C6"
   `,
  },
  desktop: {
    rows: 'repeat(5, 1fr);',
    columns: 'repeat(4, 1fr)',
    area: `
   "C1 C3 C5 C7"
   "C1 C3 C5 C7"
   "C1 C4 C5 C8"
   "C2 C4 C6 C8"
   "C2 C4 C6 C8"
   `,
  },
};

const displayAreas = {
  C1: [1],
  C2: [1],
  C3: [1],
  C4: [1],
  C5: [0, 1, 1],
  C6: [0, 1, 1],
  C7: [0, 0, 1],
  C8: [0, 0, 1],
};

export const displayArea = buildDisplayArea(displayAreas);

type MasonryGrid2RowsProps = GridProps;
const MasonryGrid2Rows: React.FC<MasonryGrid2RowsProps> & DisplayAreaProp = ({
  children,
  ...props
}) => {
  return (
    // @ts-ignore
    <Grid
      height="100%"
      width="100%"
      gridTemplateColumns={[
        template.mobile.columns,
        template.tablet.columns,
        template.desktop.columns,
      ]}
      gridTemplateRows={[
        template.mobile.rows,
        template.tablet.rows,
        template.desktop.rows,
      ]}
      gridTemplateAreas={[
        template.mobile.area,
        template.tablet.area,
        template.desktop.area,
      ]}
      {...props}>
      {children}
    </Grid>
  );
};

MasonryGrid2Rows.displayArea = displayArea;
export default MasonryGrid2Rows;
