import styles from "../sass/common/_SellerLoginCommon.module.scss";
function SellerLoginCommon() {
  return (
    <div className={styles.sellerlogin}>
      <p className={styles.sellerloginTitle}>Bán hàng chuyên nghiệp</p>
      <p className={styles.sellerloginContent}>
        Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh
        Người bán
      </p>
      <img
        className={styles.sellerloginImg}
        src="http://deo.shopeemobile.com/shopee/shopee-buyeruserfetoc-live-sg/assets/9019759f347a781f.png"
        alt="abc"
      />
    </div>
  );
}
export default SellerLoginCommon;
