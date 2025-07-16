import ChatBox from "../../common/Chatbox";
import FormNavbar from "../../common/FormNavbar";
import styles from "../../sass/Seller/_SellerSignUp.module.scss";
import SignUpForm from "../SignupComponents/Form/SignUpForm";
function SellerSignUp() {
  return (
    <div>
      <FormNavbar title="Đăng ký" />
      <div className={styles.container}>
        <div className={styles.seller}>
          <div className={styles.sellerLeft}>
            <div className={styles.sellerLeftTitle}>Shopee Việt Nam</div>
            <div className={styles.sellerLeftName}>
              Trở thành Người bán ngay hôm nay
            </div>
            <div className={styles.sellerLeftItem1}>
              <div className={styles.sellerLeftItem1Img1}></div>
              <div className={styles.sellerLeftItem1Content1}>
                Nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan
              </div>
            </div>
            <div className={styles.sellerLeftItem2}>
              <div className={styles.sellerLeftItem2Img2}></div>
              <div className={styles.sellerLeftItem2Content2}>
                Phát triển trở thành thương hiệu toàn cầu
              </div>
            </div>
            <div className={styles.sellerLeftItem3}>
              <div className={styles.sellerLeftItem3Img3}></div>
              <div className={styles.sellerLeftItem3Content3}>
                Dẫn đầu lượng người dùng trên ứng dụng mua sắm tại Việt Nam
              </div>
            </div>
          </div>
          <SignUpForm link="/sellerlogin" />
        </div>
        <ChatBox />
      </div>
    </div>
  );
}
export default SellerSignUp;
