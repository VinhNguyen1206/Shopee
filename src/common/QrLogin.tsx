import styles from "@/sass/common/_QrLogin.module.scss";
const QrLogin = ({ handleClick }: { handleClick: () => void }) => {
  return (
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
        Nhấn vào biểu tượng quét mã trên ứng dụng Shopee để mở trình quét mã QR
      </p>
    </div>
  );
};

export default QrLogin;
