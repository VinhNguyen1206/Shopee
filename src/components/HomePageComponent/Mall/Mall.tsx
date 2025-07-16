import { Link } from "react-router-dom";
import styles from "../../../sass/HomePage/_Mall.module.scss";
import Button from "../Button/Button";
import { events, list1, list2 } from "./MallConstants";
function Mall() {
  return (
    <div className={styles.mall}>
      <div className={styles.mallTop}>
        <div className={styles.mallTopTitle}>
          <a className={styles.mallTopTitleName} href="">
            SHOPEE MALL
          </a>
          <hr style={{ height: "15px", margin: " 0 15px" }} />
          <div className={styles.mallTopTitleEvent}>
            {events.map((event) => (
              <div className={styles.mallTopTitleEventItem} key={event.id}>
                <img
                  className={styles.mallTopTitleEventImg}
                  src={event.icon}
                  alt="///"
                />
                <p className={styles.mallTopTitleEventDesc}>{event.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.mallTopBtn}>
          <a
            className={styles.mallTopBtnLink}
            href="https://shopee.vn/mall"
            target="blank"
          >
            <div className={styles.mallTopBtnContent}>Xem Tất Cả</div>
            <p className={styles.mallTopBtnClick}>&gt;</p>
          </a>
        </button>
      </div>
      <div className={styles.mallBot} style={{ height: "462px" }}>
        <Link to="">
          <img className={styles.mallBotImg} src="img/mall4.png" alt="" />
        </Link>
        <div className={styles.mallBotList}>
          <picture className={styles.mallBotListTop}>
            {list1.map((item1) => (
              <div key={item1.id} className={styles.mallBotListItem}>
                <Link className={styles.mallBotListItemLink} to={item1.url}>
                  <img
                    className={styles.mallBotListItemImg}
                    src={item1.src}
                    alt=""
                  />
                  <p className={styles.mallBotListItemDesc}>{item1.title}</p>
                </Link>
              </div>
            ))}
          </picture>
          <picture className={styles.mallBotListBottom}>
            {list2.map((item2) => (
              <div key={item2.id} className={styles.mallBotListItem}>
                <Link className={styles.mallBotListItemLink} to={item2.url}>
                  <img
                    className={styles.mallBotListItemImg}
                    src={item2.src}
                    alt=""
                  />
                  <p className={styles.mallBotListItemDesc}>{item2.title}</p>
                </Link>
              </div>
            ))}
          </picture>
          <button className={styles.mallBotListBtn}>
            <a
              className={styles.mallBotListBtnLink}
              href="https://shopee.vn/mall"
              target="blank"
            >
              <div className={styles.mallBotListBtnContent}>Xem Tất Cả</div>
              <p className={styles.mallBotListBtnClick}>&gt;</p>
            </a>
          </button>
        </div>
      </div>
      {/* <Button /> */}
    </div>
  );
}
export default Mall;
