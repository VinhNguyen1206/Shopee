import styles from "../../../sass/Login/_FormQr.module.scss";
import { useState } from "react";
import SellerHeaderQr from "../SellerHeaderQr/SellerHeaderQr";
import SellerLoginFooter from "../SellerLoginFooter/SellerLoginFooter";

function SellerLoginFormQr() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.container}>
      {visible && (
        <div className={styles.scanform}>
          <div className={styles.scanformTitle}>Làm thế nào để quét mã?</div>
          <button onClick={handleClick} className={styles.scanformBtn}>
            <i className="fa-solid fa-x"></i>
          </button>
          <img
            className={styles.scanformImg}
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/27eb1bc4f61803e6.png"
            alt=""
          />
          <p className={styles.scanformContent}>
            Nhấn vào biểu tượng quét mã trên ứng dụng Shopee để mở trình quét mã
            QR
          </p>
        </div>
      )}
      <div className={styles.form}>
        <SellerHeaderQr link1="/sellerlogin" />
        <div className={styles.formMain}>
          <div className={styles.formMainQr}></div>
          <p className={styles.formMainContent}>Quét QR bằng ứng dụng Shopee</p>
          <button onClick={handleClick} className={styles.formMainBtn}>
            Làm Thế Nào Để Quét Mã?
          </button>
        </div>
        <SellerLoginFooter />
      </div>
    </div>
  );
}
export default SellerLoginFormQr;
