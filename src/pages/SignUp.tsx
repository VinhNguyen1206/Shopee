import ChatBox from "../common/Chatbox";
import FormNavbar from "../common/FormNavbar";
import styles from "../sass/SignUp/_SignUp.module.scss";
import SignUpForm from "../components/SignupComponents/Form/SignUpForm";

function SignUp() {
  return (
    <>
      <FormNavbar title="Đăng ký" />
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <div className={styles.containerContent}>
            <div></div>
            <SignUpForm />
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  );
}
export default SignUp;
