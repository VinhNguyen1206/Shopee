import styles from "../../sass/Login/_Form.module.scss";
import { Link } from "react-router-dom";
import SellerLoginFooter from "./SellerLoginFooter";
import More from "../../common/More";
import LoginInput from "../../common/LoginInput";
import type { LoginProps } from "../../types/types";

function SellerLoginForm({
  link1 = "/sellerlogin/qr ",
  link2 = "/sellerforgetpassword",
  link3 = "/sellerlogin/otp",
}: LoginProps) {
  return (
    <div className={styles.form}>
      <div className={styles.formHeader}>
        <div className={styles.formHeaderTitle}>Đăng nhập</div>
        <div className={styles.formHeaderLogin}>
          <p className={styles.formHeaderLoginContent}>Đăng nhập với mã QR</p>
          <Link to={link1}>
            <img
              className={styles.formHeaderLoginQr}
              src="https://qrcode-gen.com/images/qrcode-default.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <LoginInput />
      <div className={styles.formOther}>
        <Link className={styles.formOtherLink} to={link2}>
          Quên mật khẩu
        </Link>
        <Link className={styles.formOtherLink} to={link3}>
          Đăng nhập với SMS
        </Link>
      </div>
      <More />
      <SellerLoginFooter />
    </div>
  );
}
export default SellerLoginForm;
