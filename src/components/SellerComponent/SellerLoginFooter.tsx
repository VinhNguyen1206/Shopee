import { Link } from "react-router-dom";
import styles from "@/sass/common/_LoginFooter.module.scss";
function SellerLoginFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>Bạn mới biết đến Shopee?</div>
      <Link className={styles.footerLink} to="/sellersignup">
        Đăng ký
      </Link>
    </div>
  );
}
export default SellerLoginFooter;
