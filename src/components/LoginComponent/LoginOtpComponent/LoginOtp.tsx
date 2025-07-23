import ChatBox from "../../../common/Chatbox";
import FormNavbar from "../../../common/FormNavbar";
import styles from "@/sass/SignUp/_SignUp.module.scss";

import LoginFormOtp from "./Form/LoginFormOtp";

function LoginOtp() {
  return (
    <>
      <FormNavbar />
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <div className={styles.containerContent}>
            <div></div>
            <LoginFormOtp />
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  );
}
export default LoginOtp;
