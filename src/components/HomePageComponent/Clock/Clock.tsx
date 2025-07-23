import styles from "@/sass/HomePage/_Clock.module.scss";
import { useEffect, useState } from "react";

function formatDate(date: Date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}
function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();
      const newTime = formatDate(now);
      setTime(newTime);
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);
  return <p className={styles.clock}>{time}</p>;
}

export default Clock;
