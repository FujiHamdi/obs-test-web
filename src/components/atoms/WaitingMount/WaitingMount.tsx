import React from 'react';
import {LinearProgress, Typography} from '@mui/material';
import styles from './WaitingMount.module.scss';

export default function WaitingMount() {
  return (
    <>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{mt: '50vh'}}
        className={styles['linear-label']}>
        Getting your pages
      </Typography>
      <LinearProgress
        classes={{
          root: styles['linear-root'],
          bar1Indeterminate: styles['linear-bar1'],
          bar2Indeterminate: styles['linear-bar2'],
        }}
      />
    </>
  );
}
