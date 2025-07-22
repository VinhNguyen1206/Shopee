import { Link, type To } from "react-router-dom";
import styles from "../../../sass/SignUp/_SignUpForm.module.scss";
import InputForm from "../../../common/InputForm";
import More from "../../../common/More";

type SignUpProps = {
  link?: To;
  path: string;
};

function SignUpForm({ link = "/login", path }: SignUpProps) {
  return (
    <div className={styles.form}>
      <div className={styles.formHeader}>
        <div className={styles.formHeaderTitle}>Đăng Ký</div>
      </div>
      <div className={styles.formMain}>
        <InputForm path={path} />
        <div className={styles.formMainMid}>
          <More />
          <div className={styles.formMainMidSecurity}>
            <div className={styles.formMainMidSecurityContent}>
              Bằng việc đăng kí, bạn đã đồng ý với Shopee về
            </div>
            <a
              className={styles.formMainMidSecurityLink}
              href="https://help.shopee.vn/portal/4/article/77243"
              target="blank"
            >
              Điều khoản dịch vụ
            </a>
            <span style={{ padding: " 0 5px" }}>&</span>
            <a
              className={styles.formMainMidSecurityLink}
              href="https://help.shopee.vn/portal/4/article/77244"
              target="blank"
            >
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
      <div className={styles.formFooter}>
        <span className={styles.formFooterDesc}>Bạn đã có tài khoản?</span>
        <Link className={styles.formFooterLogin} to={link}>
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}
export default SignUpForm;
