import styles from "../../../sass/HomePage/_NavBar.module.scss";
import { Link } from "react-router-dom";
import { navs, nav2s, suggests } from "./NavBarConstants";
import Cart from "../../../pages/Cart";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { SelectItem } from "../../../redux/productSlice";
function NavBar() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => {
    setVisible(!visible);
  };

  const ItemCount = useAppSelector(SelectItem);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarNav}>
          <div className={styles.navbarNavLeft}>
            <div className={styles.navbarNavLeftLink}>
              {navs.map((nav) => (
                <div className={styles.navbarNavLeftLinkItem} key={nav.id}>
                  {nav.id === 1 && (
                    <Link
                      className={styles.navbarNavLeftLinkItemTo}
                      target="blank"
                      to="/sellerlogin"
                    >
                      {nav.name}
                    </Link>
                  )}
                  {nav.id === 2 && (
                    <Link
                      className={styles.navbarNavLeftLinkItemTo}
                      to="/sellersignup"
                    >
                      {nav.name}
                    </Link>
                  )}
                  {nav.id === 3 && (
                    <Link
                      className={styles.navbarNavLeftLinkItemTo}
                      to="/download"
                    >
                      {nav.name}
                    </Link>
                  )}
                  {nav.id === 4 && <p>{nav.name}</p>}
                </div>
              ))}
            </div>
            <div className={styles.navbarNavLeftIcon}>
              <div>
                <a
                  target="_blank"
                  className={styles.navbarNavLeftIconNum1}
                  href="https://www.facebook.com/ShopeeVN"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  className={styles.navbarNavLeftIconNum2}
                  href="https://www.instagram.com/Shopee_VN/"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.navbarNavRight}>
            <div className={styles.navbarNavRightSupport}>
              {nav2s.map((nav2) => (
                <div key={nav2.id} className={styles.navbarNavRightSupportItem}>
                  {nav2.id === 1 && (
                    <div className={styles.navbarNavRightSupportBox}>
                      <img
                        className={styles.navbarNavRightSupportBoxImg}
                        src="/img/navbarhover.png"
                        alt=""
                      />
                      <p className={styles.navbarNavRightSupportBoxContent}>
                        Đăng Nhập Để Xem Thông Báo
                      </p>
                      <div className={styles.navbarNavRightSupportBoxCover}>
                        <Link to="/signup">
                          <button
                            className={styles.navbarNavRightSupportBoxCoverBtn1}
                          >
                            Đăng ký
                          </button>
                        </Link>
                        <Link to="/login">
                          <button
                            className={styles.navbarNavRightSupportBoxCoverBtn2}
                          >
                            Đăng Nhập
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                  <a
                    target="blank"
                    className={styles.navbarNavRightSupportSelect}
                    href={nav2.url}
                  >
                    <i
                      style={{ paddingRight: "5px", color: "#fff" }}
                      className={nav2.svg}
                    ></i>
                    {nav2.name}
                  </a>
                  {nav2.id === 3 && (
                    <div className={styles.navbarNavRightSupportLang}>
                      <p className={styles.navbarNavRightSupportLangChoose}>
                        Tiếng Việt
                      </p>
                      <p className={styles.navbarNavRightSupportLangChoose}>
                        Tiếng Anh
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.navbarNavRightSign}>
              <Link className={styles.navbarNavRightSignUp} to="/signup">
                Đăng Ký
              </Link>
              <Link className={styles.navbarNavRightSignIn} to="/login">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navbarMain}>
          <div className={styles.navbarMainIcon}>
            <Link to="/">
              <img
                className={styles.navbarMainIconLogo}
                src="/img/Shopee.png"
                alt=""
              />
            </Link>
          </div>
          <div className={styles.navbarMainSearch}>
            <div className={styles.navbarMainSearchItem}>
              <form action="">
                <input
                  className={styles.navbarMainSearchItemInput}
                  type="text"
                  name="input"
                  placeholder="Shoppe bao ship 0đ"
                />
                <button className={styles.navbarMainSearchItemBtn}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className={styles.navbarMainSearchSuggest}>
              {suggests.map((suggest) => (
                <a
                  key={suggest.id}
                  className={styles.navbarMainSearchSuggestThings}
                  href={suggest.url}
                >
                  {suggest.title}
                </a>
              ))}
            </div>
          </div>
          <div onClick={handleVisible} className={styles.navbarMainCart}>
            <div className={styles.navbarMainCartLogo}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            {ItemCount > 0 && (
              <span className={styles.navbarMainCartCount}>{ItemCount}</span>
            )}
          </div>
          <div
            className={`${styles.navbarMainCartWrapper} ${
              visible && styles.open
            }`}
          >
            {visible && <Cart handleVisible={handleVisible} />}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
