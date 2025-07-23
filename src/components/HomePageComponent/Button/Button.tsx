import { useState } from "react";
import styles from "@/sass/HomePage/_Button.module.scss";
type ButtonProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};
function Button({ scrollContainerRef }: ButtonProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // onclick scrollright
  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    }
    setIsVisible(false);
  };

  // onclick scrollleft
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
    setIsVisible(true);
  };
  return (
    <div>
      {isVisible ? (
        <button onClick={scrollRight} className={styles.btnGt}>
          &gt;
        </button>
      ) : (
        <button onClick={scrollLeft} className={styles.btnLt}>
          &lt;
        </button>
      )}
    </div>
  );
}

export default Button;
