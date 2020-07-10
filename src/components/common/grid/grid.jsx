import React from 'react';

import {
  Container as ReactContainer,
  Row as ReactRow,
  Col as ReactCol
} from 'react-grid';

import "~components/common/grid/grid.scss"; // custom overrides

// TODO create utility function where breakpoint sizes are defined.
// TODO Investigate if it's possible to share between the definitions with the breakpoints.scss file.
const styles = {
  breakpoints: { xs: 0, sm: 480, md: 600, lg: 720, xl: 840 },
  containerMaxWidths: { sm: 1180, md: 1180, lg: 1180, xl: 1180 },
  columns: 12,
  gutterWidth: 30
};

export const GridContainer = props => <ReactContainer {...props} styles={styles} className="grid-container" />;
export const Row = props => <ReactRow {...props} styles={styles} />;
export const Col = props => <ReactCol {...props} styles={styles} />;