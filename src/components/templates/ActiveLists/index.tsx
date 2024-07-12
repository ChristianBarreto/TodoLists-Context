import { ReactElement } from 'react';
import styles from './ActiveLists.module.css';

export default function ActiveLists({children}: {children: ReactElement}) {

  return (
    <div className={styles.activeListsContainer}>
      {children}
    </div>
  )
  
}