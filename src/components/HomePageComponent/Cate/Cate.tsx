import { Link } from "react-router-dom";
import styles from "@/sass/HomePage/_Cate.module.scss";
import Button from "../Button/Button";
import { Item1s, Item2s } from "./CateConstants";
import { useRef } from "react";
function Cate() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.cate}>
      <div className={styles.cateTitle}>
        <div className={styles.cateTitleName}>DANH MỤC</div>
      </div>
      <div className={styles.cateList}>
        <Button scrollContainerRef={scrollRef} />
        <div ref={scrollRef} className={styles.scrollContainer}>
          <div className={styles.cateListTop}>
            {Item1s.map((item1) => (
              <div className={styles.cateListItem} key={item1.id}>
                <Link className={styles.cateListItemLink} to={item1.url}>
                  <img
                    className={styles.cateListItemImg}
                    src={item1.image}
                    alt="///"
                  />
                  <p className={styles.cateListItemName}>{item1.name}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.cateListBot}>
            {Item2s.map((item2) => (
              <div className={styles.cateListItem} key={item2.id}>
                <Link className={styles.cateListItemLink} to={item2.url}>
                  <img
                    className={styles.cateListItemImg}
                    src={item2.image}
                    alt="///"
                  />
                  <p className={styles.cateListItemName}>{item2.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cate;
