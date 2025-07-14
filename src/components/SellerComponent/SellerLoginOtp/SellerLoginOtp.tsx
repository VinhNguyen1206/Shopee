import FormNavbar from "../../../common/FormNavbar";
import styles from "../../../sass/Seller/_SellerLogin.module.scss";
import SellerLoginCommon from "../../../common/SellerLoginCommon";
import SellerLoginFormOtp from "../SellerFormOtp/SellerLoginFormOtp";

function SellerLoginOtp() {
  return (
    <div>
      <FormNavbar />
      <div className={styles.background}>
        <SellerLoginCommon />
        <SellerLoginFormOtp />
      </div>
    </div>
  );
}
export default SellerLoginOtp;
