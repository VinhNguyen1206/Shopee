import { Link } from "react-router-dom";
import styles from "@/sass/HomePage/_Banner.module.scss";
import { choices } from "./BannerConstants";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImg}>
        <Link
          className={styles.bannerImgCover}
          to="https://shopee.vn/m/don-dau-tien-mien-phi"
        >
          <img
            className={styles.bannerImgBig}
            src="https://cf.shopee.vn/file/vn-11134258-7ra0g-ma9buu17riwz56_xxhdpi"
            alt="///"
          />
          <div className={styles.bannerImgCoverBtn1}>&lt;</div>
          <div className={styles.bannerImgCoverBtn2}>&gt;</div>
        </Link>

        <div className={styles.bannerImgSmall}>
          <Link to="https://shopee.vn/giaythethaogoya">
            <img
              className={styles.bannerImgSmallTop}
              src="https://cf.shopee.vn/file/vn-11134258-7ras8-mawqdpymvpn06b_xhdpi"
              alt="///"
            />
          </Link>
          <Link to="https://shopee.vn/m/videohangmoive">
            <img
              className={styles.bannerImgSmallBot}
              src="https://cf.shopee.vn/file/vn-11134258-7ras8-mawgj60nd9zs15_xhdpi"
              alt="///"
            />
          </Link>
        </div>
      </div>
      <div className={styles.bannerChoice}>
        {choices.map((choice) => (
          <a
            className={styles.bannerChoiceLink}
            key={choice.id}
            href={choice.link}
          >
            <div className={styles.bannerChoiceItem}>
              <img
                className={styles.bannerChoiceItemImg}
                src={choice.url}
                alt={choice.alt}
              />
              <p className={styles.bannerChoiceItemDesc}>{choice.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Banner;
