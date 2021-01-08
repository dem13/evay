import React from 'react';

import classes from './Segment.module.css'

const Segment = (props) => {
  return (
    <div className={classes.Segment + " " + props.className}>
      <div className={classes.SegmentHeader}>
        {props.title}
      </div>
      <div className={classes.SegmentBody}>
        Soon...
      </div>
      <div className={classes.SegmentFooter}>

      </div>
    </div>
  );
};

export default Segment;