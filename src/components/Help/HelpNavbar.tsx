import { Link } from "react-router-dom";
import styles from "../../sass/help/_HelpNavBar.module.scss";
function HelpNavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link className={styles.navbarLeftLink} to="/help">
          <img
            className={styles.navbarLeftLinkImg}
            src="./src/img/Shopee.png"
            alt=""
          />
        </Link>
        <p className={styles.navbarLeftTitle}>Trung tâm trợ giúp Shopee VN</p>
      </div>
      <div className={styles.navbarRight}>
        <Link className={styles.navbarRightLink} to="/policies">
          Shopee Policies
        </Link>
      </div>
    </div>
  );
}
export default HelpNavBar;
