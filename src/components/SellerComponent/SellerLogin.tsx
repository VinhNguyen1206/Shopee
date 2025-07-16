import FormNavbar from "../../common/FormNavbar";
import styles from "../../sass/Seller/_SellerLogin.module.scss";
import SellerLoginCommon from "../../common/SellerLoginCommon";
import SellerLoginForm from "./SellerLoginForm";
import ChatBox from "../../common/Chatbox";
function SellerLogin() {
  return (
    <div>
      <FormNavbar title="Kênh Người Bán" />
      <div className={styles.background}>
        <SellerLoginCommon />
        <SellerLoginForm />
      </div>
      <ChatBox />
    </div>
  );
}
export default SellerLogin;
