import React from 'react';
import styles from './CohortDetails.module.css';

const cohorts = [
  { id: 1, name: 'React Batch 12', status: 'ongoing', startDate: '2026-05-01', mentor: 'Alice' },
  { id: 2, name: 'Angular Batch 8', status: 'completed', startDate: '2026-02-01', mentor: 'Bob' },
  { id: 3, name: 'Node Batch 5', status: 'ongoing', startDate: '2026-06-15', mentor: 'Charlie' }
];

function CohortDetails() {
  return (
    <div>
      {cohorts.map(cohort => (
        <div key={cohort.id} className={styles.box}>
          <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
            {cohort.name}
          </h3>
          <dl>
            <dt>Status</dt>
            <dd>{cohort.status}</dd>
            <dt>Start Date</dt>
            <dd>{cohort.startDate}</dd>
            <dt>Mentor</dt>
            <dd>{cohort.mentor}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;