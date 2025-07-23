import QrLogin from "../../common/QrLogin";
import styles from "@/sass/Login/_FormQr.module.scss";
import { useState } from "react";
import SellerHeaderQr from "./SellerHeaderQr";
import QrMain from "../../common/QrMain";
import SellerLoginFooter from "./SellerLoginFooter";
import ChatBox from "../../common/Chatbox";

function SellerLoginFormQr() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      {visible && <QrLogin handleClick={handleClick} />}
      <div className={styles.form}>
        <SellerHeaderQr link1="/sellerlogin" />
        <QrMain handleClick={handleClick} />
        <SellerLoginFooter />
      </div>
      <ChatBox />
    </div>
  );
}
export default SellerLoginFormQr;
