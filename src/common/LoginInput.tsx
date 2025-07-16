import React, { useState } from "react";
import styles from "../sass/common/_LoginInput.module.scss";

const LoginInput = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(email, JSON.stringify(email)),
      localStorage.setItem(password, JSON.stringify(password));
    setEmail("");
    setPassword("");
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length !== 0) {
      setIsValid(!isValid);
    }
    setIsValid(false);
  };

  const toggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  return (
    <form className={styles.form} action="">
      <input
        value={email}
        onChange={handleEmail}
        className={styles.formAccount}
        type="text"
        placeholder="Email/Số điện thoại/Tên đăng nhập"
      />
      <div className={styles.formCover}>
        <input
          value={password}
          onChange={handlePassWord}
          className={styles.formCoverPassword}
          type={isVisible ? "password" : "text"}
          placeholder="Mật khẩu"
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

      <button
        disabled={!isValid}
        onClick={handleClick}
        className={styles.formBtn}
      >
        ĐĂNG NHẬP
      </button>
    </form>
  );
};

export default LoginInput;
