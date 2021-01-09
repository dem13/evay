import React from 'react';

import classes from './Segment.module.css'
import SegmentProgressBar from "./SegmentProgressBar/SegmentProgressBar";
import {currentMinutes, formatMinutes} from "../../../utils/Utils";


const Segment = ({segment, className}) => {
  const currentTime = currentMinutes();

  let progress = 0;

  let progressTitle;

  const active = segment.start <= currentTime;

  if (active) {
    const duration = segment.end - segment.start;

    const timePassed = currentTime - segment.start;
    const timeLeft = segment.end - currentTime;

    progress = timePassed * 100 / duration;

    progressTitle = formatMinutes(timeLeft);
  } else {
    progressTitle = "Starts in " + formatMinutes(segment.start - currentTime);
  }

  return (
    <div className={classes.Segment + " " + className}>
      <div className={classes.SegmentHeader}>
        {segment.title}
      </div>
      <div className={classes.SegmentBody}>
        <div className={classes.SegmentDescription}>{segment.description}</div>
        <div className={classes.SegmentTimeContainer}>
          <div className={classes.SegmentTime}>
            <div>{formatMinutes(segment.start)}</div>
            <div>{formatMinutes(segment.end)}</div>
          </div>
        </div>
      </div>
      <div className={classes.SegmentFooter}>
        <SegmentProgressBar progress={progress} title={progressTitle}/>
      </div>
    </div>
  );
};

export default Segment;