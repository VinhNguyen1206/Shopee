import styles from "../sass/common/_More.module.scss";
function More() {
  return (
    <div className={styles.more}>
      <div className={styles.moreSeparate}>
        <span className={styles.moreSeparateLine}></span>
        <p className={styles.moreSeparateOr}>HOẶC</p>
        <span className={styles.moreSeparateLine}></span>
      </div>
      <div className={styles.moreGlobal}>
        <button className={styles.moreGlobalBtn}>
          <img
            className={styles.moreGlobalImg}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
            alt=""
          />
          <p>Facebook</p>
        </button>
        <button className={styles.moreGlobalBtn}>
          <img
            className={styles.moreGlobalImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s"
            alt=""
          />
          <p>Google</p>
        </button>
      </div>
    </div>
  );
}
export default More;
