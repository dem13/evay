import React from 'react';

import classes from './SegmentProgressBar.module.css'

const SegmentProgressBar = (props) => {
  return (
    <div className={classes.ProgressBar}>
      {props.title ? <div className={classes.ProgressBarTitle}>{props.title}</div> : null}
      <div className={classes.ProgressBarProgress} style={{width: props.progress + "%"}}/>
    </div>
  );
};

export default SegmentProgressBar;