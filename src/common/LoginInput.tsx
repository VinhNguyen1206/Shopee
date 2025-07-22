import React, { useState } from "react";
import styles from "../sass/common/_LoginInput.module.scss";
import { loadFromLocalStorage } from "../utils/ReduxStorage";
import { useNavigate } from "react-router-dom";

const LoginInput = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<boolean>(false);

  // check condition phone
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setErr(false);
  };

  // check condition password
  const handlePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErr(false);
  };

  // onclick for seeing password
  const toggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  // onsubmit for signing in and save data to localstorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPhone = loadFromLocalStorage("phoneNumber");
    const storedPassword = loadFromLocalStorage("passWord");
    if (phone === storedPhone && password === storedPassword) {
      alert("Sign In Successfully");
      setPhone("");
      setPassword("");
      navigate("/");
    } else {
      setErr(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={phone}
        onChange={handlePhone}
        className={styles.formAccount}
        type="text"
        placeholder="Số điện thoại/Tên đăng nhập"
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
      {err && (
        <div className={styles.formCoverNote}>
          Tên đăng nhập hoặc mật khẩu không chính xác
        </div>
      )}

      <button
        type="submit"
        disabled={phone.length === 0 || password.length === 0}
        className={styles.formBtn}
      >
        ĐĂNG NHẬP
      </button>
    </form>
  );
};

export default LoginInput;
