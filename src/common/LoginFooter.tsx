import { Link } from "react-router-dom";
import styles from "../sass/common/_LoginFooter.module.scss";

function LoginFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>Bạn mới biết đến Shopee?</div>
      <Link className={styles.footerLink} to="/signup">
        Đăng ký
      </Link>
    </div>
  );
}
export default LoginFooter;
