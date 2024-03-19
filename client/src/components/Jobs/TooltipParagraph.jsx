import React from 'react';
import styles from './AllJobs.module.css'; // Import your CSS module

function TooltipParagraph({ text }) {
  const words = text.join(', ').trim().split(' ');
  return (
    <p className={styles.paraSmallHeading}>
      <span className={styles.firstWord}>
        {
          words[0].includes(',') ?
            words[0].substr(0, words[0].length - 1) : words[0]
        }
      </span>
      <span className={styles.hiddenWords}>{words.slice(0).join(' ')}</span>
    </p>
  );
}

export default TooltipParagraph;
