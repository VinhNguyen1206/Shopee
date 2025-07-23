import styles from "../../sass/Product/_SecurityForm.module.scss";

const SecurityForm = () => {
  return (
    <div className={styles.form}>
      <header className={styles.formHeader}>
        <div className={styles.formHeaderTitle}>An tâm mua sắm cùng Shopee</div>
      </header>
      <div className={styles.formMain}>
        <div className={styles.formMainTop}>
          <img
            className={styles.formMainImg}
            src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m3d6lj7n6jl4c6"
            alt=""
          />
          <div className={styles.formMainContent}>
            <div className={styles.formMainContentTitle}>
              Trả hàng miễn phí 15 ngày
            </div>
            <p className={styles.formMainContentDesc}>
              Miễn phí Trả hàng trong 15 ngày để đảm bảo bạn hoàn toàn có thể
              yên tâm khi mua hàng ở Shopee.
            </p>
            <p className={styles.formMainContentDesc}>
              Ngoài ra, tại thời điểm nhận hàng, bạn có thể đồng kiểm và được
              trả hàng miễn phí.
            </p>
          </div>
        </div>
        <div className={styles.formMainBot}>
          <img
            className={styles.formMainImg}
            src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m3d733vlcn4xbd"
            alt=""
          />
          <div className={styles.formMainContent}>
            <div className={styles.formMainContentTitle}>
              Bảo hiểm Thời trang
            </div>
            <p className={styles.formMainContentDesc}>Tìm hiểu thêm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityForm;
