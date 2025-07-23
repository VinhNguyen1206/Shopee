import styles from "@/sass/Login/_HeaderQr.module.scss";
import { Link } from "react-router-dom";
import type { LoginQrProps } from "../../types/types";

function SellerHeaderQr({ link1 = "/sellerlogin" }: LoginQrProps) {
  return (
    <div className={styles.formHeader}>
      <div className={styles.formHeaderTitle}>Đăng nhập với mã QR</div>
      <div className={styles.formHeaderLogin}>
        <p className={styles.formHeaderLoginContent}>Đăng nhập với mật khẩu</p>
        <Link to={link1}>
          <img
            className={styles.formHeaderLoginPassword}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/2048px-Blue_computer_icon.svg.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
export default SellerHeaderQr;
