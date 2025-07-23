import { Link } from "react-router-dom";
import styles from "@/sass/common/_ChatBox.module.scss";
import { useState } from "react";
function ChatBox() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      {visible ? (
        <div className={styles.box}>
          <header className={styles.boxHeader}>
            <p className={styles.boxHeaderTitle}>Chat</p>
            <button onClick={handleClose} className={styles.boxHeaderBtn}>
              <i
                style={{ color: "white", backgroundColor: "black" }}
                className="fa-solid fa-folder-closed"
              ></i>
            </button>
          </header>
          <div className={styles.boxMain}>
            <img
              className={styles.boxMainImg}
              src="https://static.vecteezy.com/system/resources/thumbnails/047/824/500/small_2x/high-quality-realistic-beautiful-computer-monitor-image-free-png.png"
              alt=""
            />
            <div className={styles.boxMainTitle}>
              Chào mừng bạn đến với Shopee Chat
            </div>
            <div className={styles.boxMainContent}>
              Bắt đầu trả lời người mua
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleOpen} className={styles.chat}>
          <Link className={styles.chatBox} to="">
            <i
              style={{ color: "#ee4d2d", fontSize: "2.5rem" }}
              className="fa-solid fa-message"
            ></i>
            <p className={styles.chatBoxContent}>Chat</p>
          </Link>
        </div>
      )}
    </div>
  );
}
export default ChatBox;
