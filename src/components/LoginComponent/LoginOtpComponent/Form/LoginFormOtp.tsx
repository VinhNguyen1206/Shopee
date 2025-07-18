import { Link } from "react-router-dom";
import styles from "../../../../sass/Login/_FormOtp.module.scss";
import HeaderQr from "../../HeaderQr";
import InputForm from "../../../../common/InputForm";
import More from "../../../../common/More";
import LoginFooter from "../../../../common/LoginFooter";
import type { LoginOtpProps } from "../../../../types/types";

function LoginFormOtp({ link1 = "/login" }: LoginOtpProps) {
  return (
    <div className={styles.form}>
      <HeaderQr link1="/login" />
      <div className={styles.formMain}>
        <InputForm />
        <Link className={styles.formLink} to={link1}>
          Đăng nhập với mật khẩu
        </Link>
        <More />
      </div>
      <LoginFooter />
    </div>
  );
}
export default LoginFormOtp;
