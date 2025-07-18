import Clock from "../Clock/Clock";
import styles from "../../../sass/HomePage/_Sale.module.scss";
import SeeAll from "../SeeAll/SeeAll";
import Button from "../Button/Button";
import productDatas from "../../../products.json";
import { Link } from "react-router-dom";
import { mySlug } from "../../../utils/Slug";

function Sale() {
  const allProduct = productDatas.products;
  const productsToRender = allProduct.slice(24);
  return (
    <div className={styles.sale}>
      <div className={styles.saleTitle}>
        <div className={styles.saleTitleLeft}>
          <img
            className={styles.saleTitleLeftIcon}
            src="/img/flashsale.png"
            alt="..."
          />
          <Clock />
        </div>
        <SeeAll />
      </div>
      <div className={styles.saleList}>
        {productsToRender.map((product) => (
          <div className={styles.saleListItem} key={product.id}>
            <div>
              <Link
                className={styles.saleListItemLink}
                to={`/product/${mySlug(product.name)}`}
              >
                <img
                  className={styles.saleListItemImg}
                  src={product.images[0]}
                  alt="///"
                />
                <div className={styles.saleListItemSale}>
                  <i className="fa-solid fa-bolt-lightning"></i>
                  <p>{product.sale}%</p>
                </div>
              </Link>
            </div>
            <div>
              <div className={styles.saleListItemPrice}>
                <span style={{ fontSize: "1rem" }}>&#8363;</span>
                <strong>{product.sale_price}.000</strong>
              </div>
              <p className={styles.saleListItemSold}>ĐÃ BÁN {product.sold}</p>
            </div>
          </div>
        ))}
        {/* <Button /> */}
      </div>
    </div>
  );
}
export default Sale;
