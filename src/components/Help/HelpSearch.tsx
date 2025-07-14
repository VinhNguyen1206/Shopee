import styles from "../../sass/help/_HelpSearch.module.scss";
function HelpSearch() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.searchTitle}>
          Xin chào, Shopee có thể giúp gì cho bạn?
        </div>
        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Nhập từ khóa hoặc nội dung cần tìm "
          />
          <button className={styles.searchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default HelpSearch;
