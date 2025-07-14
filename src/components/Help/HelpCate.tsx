import { Link } from "react-router-dom";
import styles from "../../sass/help/_HelpCate.module.scss";
import { list } from "./HelpCateConstant";
function HelpCate() {
  return (
    <div className={styles.cate}>
      <h2 className={styles.cateTitle}>Danh mục</h2>
      <div className={styles.cateList}>
        {list.map((item) => (
          <Link className={styles.cateListLink} to={item.link} key={item.id}>
            <div className={styles.cateListItem}>
              <img
                className={styles.cateListItemImg}
                src={item.image}
                alt={item.title}
              />
              <p className={styles.cateListItemName}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default HelpCate;
