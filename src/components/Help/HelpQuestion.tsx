import { Link } from "react-router-dom";
import styles from "../../sass/help/_HelpQuestion.module.scss";
function HelpQuestion() {
  return (
    <div className={styles.question}>
      <h2 className={styles.questionTitle}>Câu hỏi thường gặp</h2>
      <div className={styles.questionList}>
        <Link className={styles.questionListLink} to="/help/...">
          <div className={styles.questionListItem}>
            [Cảnh báo lừa đảo] Mua sắm an toàn cùng Shopee
          </div>
        </Link>
        <Link className={styles.questionListLink} to="/help/...">
          <div className={styles.questionListItem}>
            [Dịch vụ] Cách liên hệ Chăm sóc khách hàng, Hotline, Tổng đài Shopee
          </div>
        </Link>
      </div>
    </div>
  );
}
export default HelpQuestion;
