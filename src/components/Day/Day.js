import React, {Component} from 'react';
import Segment from "./Segment/Segment";

import classes from './Day.module.css'

class Day extends Component {
  render() {
    return (
      <div className={classes.Day}>
        <Segment className={classes.DaySegment} title="Create an app for planning my day"/>

        <div className={classes.SegmentDivider}/>

      </div>
    );
  }
}

export default Day;