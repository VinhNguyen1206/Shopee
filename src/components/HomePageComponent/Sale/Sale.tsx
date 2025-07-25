import Clock from "../Clock/Clock";
import SeeAll from "../SeeAll/SeeAll";
import Button from "../Button/Button";
import productDatas from "../../../../public/products.json";
import { Link } from "react-router-dom";
import { mySlug } from "../../../utils/Slug";
import { useRef } from "react";
import styles from "@/sass/HomePage/_Sale.module.scss";

function Sale() {
  const allProduct = productDatas.products;
  const productsToRender = allProduct.slice(24);
  const scrollRef = useRef<HTMLDivElement>(null);
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
        <Button scrollContainerRef={scrollRef} />
        <div ref={scrollRef} className={styles.scrollContainer}>
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
        </div>
      </div>
    </div>
  );
}
export default Sale;
