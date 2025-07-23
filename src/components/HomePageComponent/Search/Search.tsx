import { Link } from "react-router-dom";
import styles from "../../../sass/HomePage/_Search.module.scss";
import Button from "../Button/Button";
import SeeAll from "../SeeAll/SeeAll";
import { mySlug } from "../../../utils/Slug";
import productDatas from "../../../../public/products.json";
import { useRef } from "react";

function Search() {
  const allProduct = productDatas.products;
  const productsToRender = allProduct.slice(12, 24);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.search}>
      <div className={styles.searchTop}>
        <span className={styles.searchTopTitle}>TÌM KIẾM HÀNG ĐẦU</span>
        <SeeAll />
      </div>
      <ul className={styles.searchList}>
        <div ref={scrollRef} className={styles.scrollContainer}>
          {productsToRender.map((product) => (
            <div key={product.id} className={styles.searchListItem}>
              <Link
                className={styles.searchListItemLink}
                to={`/product/${mySlug(product.name)}`}
              >
                <div className={styles.searchListItemCover}>
                  <img
                    className={styles.searchListItemImg}
                    src={product.images[0]}
                    alt={product.name}
                  />
                  <p className={styles.searchListItemSold}>
                    Bán {product.sold}+/ tháng
                  </p>
                  <img
                    className={styles.searchListItemSpan}
                    src="./src/img/searchspan.png"
                    alt=""
                  />
                </div>
                <p className={styles.searchListItemTitle}>{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </ul>
      <Button scrollContainerRef={scrollRef} />
    </div>
  );
}
export default Search;
