import { ReactElement } from 'react';
import styles from './ActiveLists.module.css';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

export default function ActiveLists({children}: {children: ReactElement}) {

  return (
    <>
      <Header />
      <div className={styles.activeListsContainer}>
        {children}
      </div>
      <Footer />
    </>

  )
  
}