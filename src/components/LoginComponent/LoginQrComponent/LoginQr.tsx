import ChatBox from "../../../common/Chatbox";
import FormNavbar from "../../../common/FormNavbar";
import styles from "@/sass/SignUp/_SignUp.module.scss";

import LoginFormQr from "./FormQr/LoginFormQr";
function LoginQr() {
  return (
    <>
      <FormNavbar />
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <div className={styles.containerContent}>
            <div></div>
            <LoginFormQr />
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  );
}
export default LoginQr;
