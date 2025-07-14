import Clock from "../Clock/Clock";
import styles from "../../../sass/HomePage/_Sale.module.scss";
import { saleItems } from "./SaleConstants";
import SeeAll from "../SeeAll/SeeAll";
import Button from "../Button/Button";
function Sale() {
  return (
    <div className={styles.sale}>
      <div className={styles.saleTitle}>
        <div className={styles.saleTitleLeft}>
          <img
            className={styles.saleTitleLeftIcon}
            src="./src/img/flashsale.png"
            alt="..."
          />
          <Clock />
        </div>
        <SeeAll />
      </div>
      <div className={styles.saleList}>
        {saleItems.map((saleItem) => (
          <div className={styles.saleListItem} key={saleItem.id}>
            <div>
              <a className={styles.saleListItemLink} href={saleItem.url}>
                <img
                  className={styles.saleListItemImg}
                  src={saleItem.src}
                  alt="///"
                />
                <div className={styles.saleListItemSale}>
                  <i className="fa-solid fa-bolt-lightning"></i>
                  <p>{saleItem.sale}%</p>
                </div>
              </a>
            </div>
            <div>
              <div className={styles.saleListItemPrice}>
                <span style={{ fontSize: "1rem" }}>&#8363;</span>
                <strong>{saleItem.price}.000</strong>
              </div>
              <p className={styles.saleListItemSold}>ĐÃ BÁN {saleItem.sold}</p>
            </div>
          </div>
        ))}
        {/* <Button /> */}
      </div>
    </div>
  );
}
export default Sale;
