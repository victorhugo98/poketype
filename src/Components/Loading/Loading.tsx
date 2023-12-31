import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingElement}></div>
    </div>
  );
}

export default Loading
