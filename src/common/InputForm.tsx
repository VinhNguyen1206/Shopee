import { useState } from "react";
import styles from "../sass/common/_InputForm.module.scss";
type InputProps = {
  placeholder?: string;
};
function InputForm({ placeholder = "Số Điện Thoại" }: InputProps) {
  const [value, setValue] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!err && value) {
      localStorage.setItem("phoneNumber", JSON.stringify(value));
      setValue("");
    }
  };

  // onchange for input only allow accept numbers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const valid = /^[0][0-9]{9}$/.test(e.target.value);
    setIsValid(valid);
    setErr(!valid);
  };

  return (
    <form>
      <div className={styles.formMainTop}>
        <input
          value={value}
          onChange={handleChange}
          className={
            err ? styles.formMainTopInputError : styles.formMainTopInput
          }
          type="tel"
          placeholder={placeholder}
        />
        {err && (
          <div className={styles.formMainTopNote}>
            Số điện thoại không hợp lệ
          </div>
        )}
      </div>
      <button
        type="submit"
        onClick={handleClick}
        className={styles.formMainTopBtn}
        disabled={!isValid}
      >
        TIẾP THEO
      </button>
    </form>
  );
}
export default InputForm;
