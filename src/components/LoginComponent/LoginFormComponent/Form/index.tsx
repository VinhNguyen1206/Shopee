import { useState } from "react";
import styles from "../../../../sass/Login/_Form.module.scss";
import { Link, type To } from "react-router-dom";
import More from "../../../../common/More";
import LoginFooter from "../../../../common/LoginFooter";
type LoginProps = {
  link1?: To;
  link2?: To;
  link3?: To;
};

function LoginForm({
  link1 = "/login/qr ",
  link2 = "/forgetpassword",
  link3 = "/login/otp",
}: LoginProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    localStorage.setItem(email, JSON.stringify(email)),
      localStorage.setItem(password, JSON.stringify(password));
  };

  const toggleClick = () => {
    setIsVisible(!isVisible);
  };
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
      <div className={styles.formMain}>
        <form action="">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formMainInputAccount}
            type="text"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
          />
          <div className={styles.formMainCover}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.formMainCoverInput}
              type="text"
              placeholder="Mật khẩu"
            />
            {isVisible ? (
              <button
                className={styles.formMainCoverClickOn}
                onClick={toggleClick}
              >
                <i className="fa-solid fa-eye-slash"></i>
              </button>
            ) : (
              <button
                className={styles.formMainCoverClickOff}
                onClick={toggleClick}
              >
                <i className="fa-solid fa-eye"></i>
              </button>
            )}
          </div>

          <button onClick={handleClick} className={styles.formMainInputBtn}>
            ĐĂNG NHẬP
          </button>
        </form>
        <div className={styles.formMainOther}>
          <Link className={styles.formMainOtherLink} to={link2}>
            Quên mật khẩu
          </Link>
          <Link className={styles.formMainOtherLink} to={link3}>
            Đăng nhập với SMS
          </Link>
        </div>
        <More />
      </div>
      <LoginFooter />
    </div>
  );
}
export default LoginForm;
