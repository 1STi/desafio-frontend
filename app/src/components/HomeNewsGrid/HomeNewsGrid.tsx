// import React, {useEffect} from 'react';
// import MasonryGrid2Rows from '../../ui/components/MasonryGrid2Rows';
// import Box from '../../ui/components/Box/Box';
// import {LayoutProps} from 'styled-system';
// import styled from 'styled-components';
// import CardImage from '../../ui/components/CardImage/CardImage';
// import {gridStyled} from '../../ui/components/Grid/gridStyled';
// import {CardImageProps} from '../../ui/components/CardImage/styled';
// import {GridProps} from '../../ui/components/Grid/Grid';
// import useCapitalActions from '../../state/capitals/useCapitalsActions';
// import {useSelector} from 'react-redux';
//
// const CardImageGridItem = styled(CardImage)<CardImageProps & GridProps>`
//   ${gridStyled}
// `;
//
// type HomeNewsGridProps = LayoutProps;
// const HomeNewsGrid: React.FC<HomeNewsGridProps> = ({...props}) => {
//   const capitalsActions = useCapitalActions();
//   const capitals = useSelector(state => state.capitals.locations);
//
//   useEffect(() => {
//     capitalsActions.get(455827);
//   }, []);
//
//   return (
//     <div>
//       {Object.entries(capitals).map(([key, c]) => (
//         <div key={key}>{JSON.stringify(c)}</div>
//       ))}
//       <MasonryGrid2Rows gridGap={[1, 1, 2]} {...props}>
//         <CardImageGridItem
//           title="Card Title"
//           image="https://i.picsum.photos/id/984/400/400.jpg"
//           logo="https://i.picsum.photos/id/978/100/50.jpg"
//           footerText="Footer Text"
//           gridArea="C3"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C1')}
//         />
//         <Box
//           gridArea="C2"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C2')}>
//           div 2{' '}
//         </Box>
//         <Box
//           gridArea="C1"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C3')}>
//           div 3
//         </Box>
//         <Box
//           gridArea="C4"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C4')}>
//           div 4
//         </Box>
//         <Box
//           gridArea="C5"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C5')}>
//           div 5
//         </Box>
//         <Box
//           gridArea="C6"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C6')}>
//           div 6
//         </Box>
//         <Box
//           gridArea="C7"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C7')}>
//           {MasonryGrid2Rows.displayArea('flex', 'C7')}
//         </Box>
//         <Box
//           gridArea="C8"
//           bg="#f0f"
//           display={MasonryGrid2Rows.displayArea('flex', 'C7')}>
//           div 8 - {MasonryGrid2Rows.displayArea('flex', 'C7')}
//         </Box>
//       </MasonryGrid2Rows>
//     </div>
//   );
// };
//
// export default HomeNewsGrid;
