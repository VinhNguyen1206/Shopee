import styles from "@/sass/common/_QrMain.module.scss";

const QrMain = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className={styles.main}>
      <div className={styles.mainQr}></div>
      <p className={styles.mainContent}>Quét QR bằng ứng dụng Shopee</p>
      <button onClick={handleClick} className={styles.mainBtn}>
        Làm Thế Nào Để Quét Mã?
      </button>
    </div>
  );
};

export default QrMain;
