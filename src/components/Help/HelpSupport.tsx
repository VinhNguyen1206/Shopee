import { Link } from "react-router-dom";
import styles from "../../sass/help/_HelpSupport.module.scss";
function HelpSupport() {
  return (
    <div className={styles.support}>
      <h3 className={styles.supportTitle}>
        Bạn có muốn tìm thêm thông tin gì không?
      </h3>
      <Link className={styles.supportLink} to="">
        <div className={styles.supportItem}>
          <img
            className={styles.supportItemImg}
            src="./src/img/Help/helpsupport1.png"
            alt=""
          />
          <p className={styles.supportItemContent}>Liên hệ Shopee</p>
        </div>
      </Link>
    </div>
  );
}
export default HelpSupport;
