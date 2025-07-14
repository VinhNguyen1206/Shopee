import { useState } from "react";
import styles from "../../../sass/Login/_Form.module.scss";
import { Link, type To } from "react-router-dom";
import SellerLoginFooter from "../SellerLoginFooter/SellerLoginFooter";
import More from "../../../common/More";
type LoginProps = {
  link1?: To;
  link2?: To;
  link3?: To;
};
function SellerLoginForm({
  link1 = "/sellerlogin/qr ",
  link2 = "/sellerforgetpassword",
  link3 = "/sellerlogin/otp",
}: LoginProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = () => {
    localStorage.setItem(email, JSON.stringify(email));
    localStorage.setItem(password, JSON.stringify(password));
    // console.log(email);
    // console.log(password);
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={styles.formMainInputAccount}
            type="text"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
          />
          <div className={styles.formMainCover}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
      <SellerLoginFooter />
    </div>
  );
}
export default SellerLoginForm;
