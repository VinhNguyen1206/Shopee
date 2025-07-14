import styles from "../../../sass/HomePage/_SeeAll.module.scss";
function SeeAll() {
  return (
    <div className={styles.seeall}>
      <a className={styles.seeallLink} href="https://shopee.vn/flash_sale">
        Xem tất cả &gt;
      </a>
    </div>
  );
}
export default SeeAll;
