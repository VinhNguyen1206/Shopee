import { Link } from "react-router-dom";
import styles from "../sass/common/_FormNavbar.module.scss";
type NavBarProps = {
  title?: string;
};
function FormNavbar({ title = "Đăng nhập" }: NavBarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarNav}>
        <div className={styles.navbarNavLeft}>
          <Link className={styles.navbarNavLeftLink} to="/">
            <img
              className={styles.navbarNavLeftImg}
              src="src\img\Shopee.png"
              alt="shopee"
            />
          </Link>
          <p className={styles.navbarNavLeftContent}>{title}</p>
        </div>
        <div className={styles.navbarNavRight}>
          <Link target="blank" className={styles.navbarNavRightLink} to="/help">
            Bạn cần giúp đỡ ?
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default FormNavbar;
