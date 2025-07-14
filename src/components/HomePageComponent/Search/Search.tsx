import styles from "../../../sass/HomePage/_Search.module.scss";
import Button from "../Button/Button";
import SeeAll from "../SeeAll/SeeAll";
import { list } from "./SearchConstants";

function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.searchTop}>
        <span className={styles.searchTopTitle}>TÌM KIẾM HÀNG ĐẦU</span>
        <SeeAll />
      </div>
      <ul className={styles.searchList}>
        {list.map((item) => (
          <div key={item.id} className={styles.searchListItem}>
            <a className={styles.searchListItemLink} href={item.url}>
              <div className={styles.searchListItemCover}>
                <img
                  className={styles.searchListItemImg}
                  src={item.src}
                  alt={item.title}
                />
                <p className={styles.searchListItemSold}>Bán {item.sold}</p>
                <img
                  className={styles.searchListItemSpan}
                  src="./src/img/searchspan.png"
                  alt=""
                />
              </div>
              <p className={styles.searchListItemTitle}>{item.title}</p>
            </a>
          </div>
        ))}
      </ul>
      {/* <Button /> */}
    </div>
  );
}
export default Search;
