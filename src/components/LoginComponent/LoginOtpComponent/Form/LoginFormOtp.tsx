import { Link, type To } from "react-router-dom";
import styles from "../../../../sass/Login/_FormOtp.module.scss";
import HeaderQr from "../../HeaderQr";
import InputForm from "../../../../common/InputForm";
import More from "../../../../common/More";
import LoginFooter from "../../../../common/LoginFooter";

type LoginOtpProps = {
  link1?: To;
};
function LoginFormOtp({ link1 = "/login" }: LoginOtpProps) {
  return (
    <div className={styles.form}>
      <HeaderQr link1="/login" />
      <div style={{ padding: "0 30px 30px" }}>
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
