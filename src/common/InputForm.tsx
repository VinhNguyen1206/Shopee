import { useState } from "react";
import styles from "../sass/common/_InputForm.module.scss";
type InputProps = {
  placeholder?: string;
};
function InputForm({ placeholder = "Số Điện Thoại" }: InputProps) {
  const [key, setKey] = useState("");
  const handleClick = () => {
    return localStorage.setItem(key, JSON.stringify(key));
  };

  return (
    <form>
      <div className={styles.formMainTop}>
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className={styles.formMainTopInput}
          type="text"
          placeholder={placeholder}
        />
        <div className={styles.formMainTopNote}>Số điện thoại không hợp lệ</div>
      </div>
      <button
        type="submit"
        onClick={handleClick}
        className={styles.formMainTopBtn}
      >
        TIẾP THEO
      </button>
    </form>
  );
}
export default InputForm;
