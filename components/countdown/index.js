import { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import { calculateDiff } from "./utils";

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

export default function Countdown({ date }) {
  const [timeInMs, setTimeInMs] = useState(date.getTime());
  const [remainingTime, setRemainingTime] = useState();
  useEffect(() => {
    setTimeInMs(date.getTime());
  }, [date])
  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timeInMs);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeInMs]);
  const updateRemainingTime = (timeInMs) => {
    setRemainingTime(calculateDiff(timeInMs));
  }
  return (
    <div className={styles.countdown}>
        {
          [...Array(remainingTime?.days.length).keys()].map((d, i) => (
            <span>{remainingTime?.days.slice(i, i + 1)}</span>
          ))
        }
        <b>:</b>
        {
          [...Array(remainingTime?.hours.length).keys()].map((d, i) => (
            <span>{remainingTime?.hours.slice(i, i + 1)}</span>
          ))
        }
        <b>:</b>
        {
          [...Array(remainingTime?.minutes.length).keys()].map((d, i) => (
            <span>{remainingTime?.minutes.slice(i, i + 1)}</span>
          ))
        }
        <b>:</b>
        {
          [...Array(remainingTime?.seconds.length).keys()].map((d, i) => (
            <span>{remainingTime?.seconds.slice(i, i + 1)}</span>
          ))
        }
    </div>
  )
}
