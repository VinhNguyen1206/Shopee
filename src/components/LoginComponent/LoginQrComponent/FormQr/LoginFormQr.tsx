import styles from "../../../../sass/Login/_FormQr.module.scss";
import { useState } from "react";
import HeaderQr from "../../HeaderQr";
import LoginFooter from "../../../../common/LoginFooter";
import QrLogin from "../../../../common/QrLogin";
import QrMain from "../../../../common/QrMain";
import ChatBox from "../../../../common/Chatbox";

function LoginFormQr() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      {visible && <QrLogin handleClick={handleClick} />}
      <div className={styles.form}>
        <HeaderQr link1="/login" />
        <QrMain handleClick={handleClick} />
        <LoginFooter />
      </div>
      <ChatBox />
    </div>
  );
}
export default LoginFormQr;
