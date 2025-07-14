import { Link } from "react-router-dom";
import styles from "../sass/common/_ChatBox.module.scss";
function ChatBox() {
  return (
    <div className={styles.chat}>
      <Link className={styles.chatBox} to="">
        <i
          style={{ color: "#ee4d2d", fontSize: "2.5rem" }}
          className="fa-solid fa-message"
        ></i>
        <p className={styles.chatBoxContent}>Chat</p>
      </Link>
    </div>
  );
}
export default ChatBox;
