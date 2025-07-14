import FormNavbar from "../../../common/FormNavbar";
import styles from "../../../sass/Seller/_SellerLogin.module.scss";
import SellerLoginCommon from "../../../common/SellerLoginCommon";
import SellerLoginForm from "../SellerForm/SellerLoginForm";
function SellerLogin() {
  return (
    <div>
      <FormNavbar title="Kênh Người Bán" />
      <div className={styles.background}>
        <SellerLoginCommon />
        <SellerLoginForm />
      </div>
    </div>
  );
}
export default SellerLogin;
