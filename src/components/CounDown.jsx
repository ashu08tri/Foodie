"use client"
import Countdown from 'react-countdown';
import styles from './style.module.css';

const currentDate = new Date().getDate()+1;
const endingDate = new Date(`2024-03-${currentDate}`);

function CounDown() {
  return (
    <Countdown className={styles.count} date={endingDate}/>
  )
}

export default CounDown;
