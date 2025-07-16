import FormNavbar from "../../common/FormNavbar";
import styles from "../../sass/Seller/_SellerLogin.module.scss";
import SellerLoginCommon from "../../common/SellerLoginCommon";
import SellerLoginFormQr from "./SellerLoginFormQr";
function SellerLoginQr() {
  return (
    <div>
      <FormNavbar />
      <div className={styles.background}>
        <SellerLoginCommon />
        <SellerLoginFormQr />
      </div>
    </div>
  );
}
export default SellerLoginQr;
