import { useState } from "react";
import styles from "../../../sass/HomePage/_Button.module.scss";
function Button() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleButton = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible ? (
        <button onClick={toggleButton} className={styles.btnGt}>
          &gt;
        </button>
      ) : (
        <button onClick={toggleButton} className={styles.btnLt}>
          &lt;
        </button>
      )}
    </div>
  );
}

export default Button;
