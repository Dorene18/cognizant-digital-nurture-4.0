import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const { cohortId, track, startDate, status, coach, trainer } = cohort;

  return (
    <div className={styles.box}>
      <h3 style={{ color: status === 'Ongoing' ? 'green' : 'blue' }}>
        {cohortId} - {track}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>

        <dt>Current Status</dt>
        <dd>{status}</dd>

        <dt>Coach</dt>
        <dd>{coach}</dd>

        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
