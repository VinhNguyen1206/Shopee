import styles from "../sass/common/_ForgetPassword.module.scss";
import { Link } from "react-router-dom";
import FormNavbar from "./FormNavbar";
import InputForm from "./InputForm";
import ChatBox from "./Chatbox";
function ForgetPassword() {
  return (
    <>
      <FormNavbar title="Đặt lại mật khẩu" />
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.formTop}>
            <Link className={styles.formTopLink} to="/login">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <p className={styles.formTopTitle}>Đặt lại mật khẩu</p>
          </div>
          <div className={styles.formBot}>
            <InputForm placeholder="Email/Số Điện Thoại" />
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  );
}
export default ForgetPassword;
