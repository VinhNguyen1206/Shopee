import styles from "@/sass/common/_ForgetPassword.module.scss";

import { Link } from "react-router-dom";
import FormNavbar from "../../common/FormNavbar";
import InputForm from "../../common/InputForm";
import ChatBox from "../../common/Chatbox";
function SellerForgetPassword() {
  return (
    <>
      <FormNavbar title="Đặt lại mật khẩu" />
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.formTop}>
            <Link className={styles.formTopLink} to="/sellerlogin">
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
export default SellerForgetPassword;
