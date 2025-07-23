import { useState } from "react";
import styles from "@/sass/common/_InputForm.module.scss";
import { saveToLocalStorage } from "../utils/ReduxStorage";
import { useNavigate } from "react-router-dom";
import type { InputProps } from "../types/types";

function InputForm({
  placeholder = "Số Điện Thoại",
  path = "/login",
}: InputProps) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isPhoneValid = /^[0][0-9]{9}$/.test(phone);
  const isPhoneInvalid = phone.length > 0 && !isPhoneValid;
  const isValid = password.length > 0 && isPhoneValid;

  // onchange for input only allow accept numbers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  // onclick for seeing password
  const toggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  // check condition password
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // onsubmit for sign up and save data to localstorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert("Sign Up Successfully");
      saveToLocalStorage({ state: phone, key: "phoneNumber" });
      saveToLocalStorage({ state: password, key: "passWord" });
      setPhone("");
      navigate(path);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <input
          value={phone}
          onChange={handleChange}
          className={isPhoneInvalid ? styles.formInputError : styles.formInput}
          type="tel"
          placeholder={placeholder}
        />
        {isPhoneInvalid && (
          <div className={styles.formNote}>Số điện thoại không hợp lệ</div>
        )}
        <div className={styles.formCover}>
          <input
            className={styles.formCoverPassword}
            value={password}
            onChange={handlePassword}
            placeholder="Mật khẩu"
            type={isVisible ? "password" : "text"}
          />
          {isVisible ? (
            <button className={styles.formCoverClickOn} onClick={toggleClick}>
              <i className="fa-solid fa-eye-slash"></i>
            </button>
          ) : (
            <button className={styles.formCoverClickOff} onClick={toggleClick}>
              <i className="fa-solid fa-eye"></i>
            </button>
          )}
        </div>
      </div>
      <button type="submit" className={styles.formBtn} disabled={!isValid}>
        TIẾP THEO
      </button>
    </form>
  );
}
export default InputForm;
