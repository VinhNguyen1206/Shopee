import { Link } from "react-router-dom";
import styles from "../../sass/Login/_FormOtp.module.scss";
import SellerHeaderQr from "./SellerHeaderQr";
import InputForm from "../../common/InputForm";
import More from "../../common/More";
import SellerLoginFooter from "./SellerLoginFooter";
import type { LoginOtpProps } from "../../types/types";

function SellerLoginFormOtp({ link1 = "/sellerlogin" }: LoginOtpProps) {
  return (
    <div className={styles.form}>
      <SellerHeaderQr />
      <div style={{ padding: "0 30px 30px" }}>
        <InputForm />
        <Link className={styles.formLink} to={link1}>
          Đăng nhập với mật khẩu
        </Link>
        <More />
      </div>
      <SellerLoginFooter />
    </div>
  );
}
export default SellerLoginFormOtp;
