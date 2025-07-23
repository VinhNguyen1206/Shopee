import { Link } from "react-router-dom";
import styles from "../../../sass/Homepage/_List.module.scss";
// import { Listitem } from "./ListConstants";
import productsData from "../../../../public/products.json";
import { mySlug } from "../../../utils/Slug";

const List = () => {
  return (
    <div className={styles.list}>
      {productsData.products.map((product) => (
        <div key={product.id} className={styles.listGroup}>
          <Link
            className={styles.listLink}
            to={`/product/${mySlug(product.name)}`}
          >
            <div className={styles.listItem}>
              <div className={styles.listItemTop}>
                <img
                  className={styles.listItemTopImg}
                  src={product.images[0]}
                  alt={product.name}
                />
                <img
                  className={styles.listItemTopFont}
                  src="img/ListItem/ListItemsale.png"
                  alt=""
                />
                <p className={styles.listItemTopSale}>{product.sale}%</p>
              </div>
              <div className={styles.listItemBot}>
                <p className={styles.listItemBotName}>{product.name}</p>
                <div className={styles.listItemBotTag}>Rẻ Vô Địch</div>
                <div className={styles.listItemBotPrice}>
                  <span style={{ fontSize: "1rem", paddingRight: "2px" }}>
                    đ
                  </span>
                  <strong>{product.sale_price}.000</strong>
                </div>
              </div>
            </div>
          </Link>
          <footer className={styles.listLinkFooter}>
            Tìm sản phẩm tương tự
          </footer>
        </div>
      ))}
    </div>
  );
};

export default List;
