import { useEffect, useState } from "react";
import NavBar from "../../components/HomePageComponent/NavBar/NavBar";
import styles from "@/sass/Product/_Product.module.scss";
import { icons } from "./ProductConstants";
import type { CartProduct, ChooseVariants, Products } from "../../types/types";
import "../../../public/products.json";
import ReportForm from "../../components/Product/ReportForm";
import SecurityForm from "../../components/Product/SecurityForm";
import { useParams } from "react-router-dom";
import { mySlug } from "../../utils/Slug";
import Clock from "../../components/HomePageComponent/Clock/Clock";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/productSlice";
import type { RootState } from "../../redux/store";

const Product = () => {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const [product, setProduct] = useState<Products | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<{
    [id: number]: number;
  }>({});
  const [count, setCount] = useState<number>(1);
  const [showVariantWarning, setShowVariantWarning] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  // fetching jsonfile
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: { products: Products[] }) => {
        console.log(slug);
        const foundData = data.products.find(
          (product) => mySlug(product.name) === slug
        );
        setProduct(foundData || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [slug]);

  if (!product) {
    return <div>Loading ...</div>;
  }

  // check for disabled button
  const allVariantsSelected = product.variants.every(
    (variant) => selectedVariants[variant.id] !== undefined
  );

  //onclick for toggle show report
  const handleVisible = () => {
    console.log("Toggle checked");
    setVisible(!visible);
  };

  // onclick for decrease quantity
  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  // onclick for increase quantity
  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  // checked selectedVariants
  const handleChecked = (variant_option_id: number, variant_id: number) => {
    setSelectedVariants((prev) => {
      const value = {
        ...prev,
      };
      if (value[variant_id] === variant_option_id) {
        delete value[variant_id];
      } else {
        value[variant_id] = variant_option_id;
      }
      const checkedVariant = product.variants.every(
        (variant) => value[variant.id] !== undefined
      );
      console.log(checkedVariant);
      if (checkedVariant) {
        setShowVariantWarning(false);
      }
      return value;
    });
  };

  // onchange for input only allow typing in numbers
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = event.target.value.replace(/[^0-9.]/g, "");
    setInputValue(numberValue);
  };

  // onclick for add product to cart
  const handleClick = () => {
    if (!allVariantsSelected) {
      setShowVariantWarning(true);
      return;
    }

    // create dynamic variants
    const chooseVariants: ChooseVariants[] = product.variants.map((variant) => {
      const optionId = selectedVariants[variant.id];
      const option = variant.options.find(
        (opt) => opt.variant_option_id === optionId
      );
      return {
        variant_id: variant.id,
        variant_title: variant.title,
        option_id: option!.variant_option_id,
        option_name: option!.variant_option_name,
      };
    });

    // create dynamic product to add to cart
    const selectedProduct: CartProduct = {
      id: product.id,
      name: product.name,
      images: product.images,
      sale_price: product.sale_price,
      quantity: count,
      chooseVariants,
    };
    dispatch(addToCart(selectedProduct));
    setTimeout(() => {
      console.log(products);
    }, 1000);
    setShowVariantWarning(false);
  };

  //auto format to VND
  const formatVND = (value: number): string => {
    // Convert number to string with period separators (e.g. 1.100.000)
    const formatted = value.toLocaleString("vi-VN").replace(/,/g, ".");
    return `${formatted}`;
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div key={product.id} className={styles.product}>
          <section className={styles.productLeft}>
            <div className={styles.productLeftTop}>
              <div>
                <img
                  className={styles.productLeftTopPhoto}
                  src={hoverImage || product.images[0]}
                  alt=""
                />
              </div>
              <div className={styles.productLeftTopList}>
                {product.images.map((img, index) => (
                  <img
                    src={img}
                    className={styles.productLeftTopListImg}
                    key={index}
                    onMouseEnter={() => setHoverImage(img)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.productLeftBot}>
              <div className={styles.productLeftBotSocial}>
                <p className={styles.productLeftBotSocialShare}>Chia sẻ:</p>
                <div className={styles.productLeftBotSocialMedia}>
                  {icons.map((icon) => (
                    <div
                      className={styles.productLeftBotSocialMediaItem}
                      key={icon.id}
                    >
                      <a
                        className={styles.productLeftBotSocialMediaItemLink}
                        href={icon.url}
                      >
                        <img
                          className={styles.productLeftBotSocialMediaItemImg}
                          src={icon.logo}
                          alt=""
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.productLeftBotLike}>
                <svg
                  style={{ height: "30px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
                <p className={styles.productLeftBotLikeNumber}>
                  Đã thích ({product.liked})
                </p>
              </div>
            </div>
          </section>
          <section className={styles.productRight}>
            <div className={styles.productRightTitle}>
              <h1 className={styles.productRightTitleName}>
                <span className={styles.productRightTitleTag}>Yêu Thích +</span>
                {product.name}
              </h1>
            </div>
            <div className={styles.productRightReview}>
              <div className={styles.productRightReviewLeft}>
                <div className={styles.productRightReviewLeftRating}>
                  <p className={styles.productRightReviewLeftRatingNumber}>
                    5.0
                  </p>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "yellow ", fontSize: "1.3rem" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "yellow ", fontSize: "1.3rem" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "yellow ", fontSize: "1.3rem" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "yellow ", fontSize: "1.3rem" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "yellow ", fontSize: "1.3rem" }}
                  ></i>
                </div>
                <div className={styles.productRightReviewLeftReviews}>
                  <div className={styles.productRightReviewLeftReviewsNumber}>
                    {product.review}
                  </div>
                  <div className={styles.productRightReviewLeftReviewsContent}>
                    Đánh giá
                  </div>
                </div>
                <div className={styles.productRightReviewLeftSold}>
                  <div className={styles.productRightReviewLeftSoldContent}>
                    Đã bán
                  </div>
                  <div className={styles.productRightReviewLeftSoldNumber}>
                    {product.sold}
                  </div>
                </div>
              </div>
              <div className={styles.productRightReviewReport}>
                <button
                  onClick={handleVisible}
                  className={styles.productRightReviewReportBtn}
                >
                  Tố cáo
                </button>
                {visible && <ReportForm handleVisible={handleVisible} />}
              </div>
            </div>
            <div className={styles.productRightFlash}>
              <div className={styles.productRightFlashLeft}>
                <img
                  className={styles.productRightFlashLeftImg}
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8eebfcdc539676df4457.svg"
                  alt=""
                />
              </div>
              <div className={styles.productRightFlashRight}>
                <img
                  className={styles.productRightFlashRightImg}
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/26cb3f2fda38eb6ddcc1.svg"
                  alt=""
                />
                <div className={styles.productRightFlashRightTitle}>
                  Kết thúc trong :
                </div>
                <Clock />
              </div>
            </div>
            <div className={styles.productRightPrice}>
              <div style={{ display: "flex" }}>
                <span style={{ color: "#ee4d2d" }}>&#8363;</span>
                <strong className={styles.productRightPriceSale}>
                  {formatVND(product.sale_price * 1000)}
                </strong>
              </div>
              <div style={{ display: "flex", margin: " 0 10px" }}>
                <span style={{ color: "#575757", fontSize: "1.2rem" }}>
                  &#8363;
                </span>
                <p className={styles.productRightPriceOri}>{product.price}</p>
              </div>
              <span className={styles.productRightPricePercent}>
                {product.sale}%
              </span>
            </div>
            <div className={styles.productRightDetail}>
              <div className={styles.productRightDetailShip}>
                <div className={styles.productRightDetailShipTitle}>
                  Vận Chuyển
                </div>
                <div className={styles.productRightDetailShipContent}>
                  <img
                    className={styles.productRightDetailShipContentImg}
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f1f65ec969d238ed62ff.svg"
                    alt=""
                  />
                  <p className={styles.productRightDetailShipDay}>
                    Nhận hàng trong vòng 2 ngày
                  </p>
                </div>
              </div>
              <div className={styles.productRightDetailSecurity}>
                <div className={styles.productRightDetailSecurityTitle}>
                  An Tâm Mua Sắm Cùng Shopee
                </div>
                <div className={styles.productRightDetailSecurityContent}>
                  <img
                    className={styles.productRightDetailSecurityContentImg}
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/281bf4388d58a7cc965a.svg"
                    alt=""
                  />
                  <p className={styles.productRightDetailSecurityContentDay}>
                    Trả hàng miễn phí 15 ngày - Bảo hiểm Thời trang
                  </p>
                  <span
                    className={styles.productRightDetailSecurityContentDayIcon}
                  >
                    &#8744;
                  </span>
                  <div className={styles.productRightDetailSecurityContentForm}>
                    <SecurityForm />
                  </div>
                </div>
              </div>

              {product.variants.map((variant) => (
                <div
                  className={styles.productRightDetailVariant}
                  key={variant.id}
                >
                  <p className={styles.productRightDetailVariantTitle}>
                    {variant.title}
                  </p>
                  <div className={styles.productRightDetailVariantList}>
                    {variant.options.map((option) => (
                      <button
                        className={styles.productRightDetailVariantItem}
                        key={option.variant_option_id}
                        onClick={() =>
                          handleChecked(option.variant_option_id, variant.id)
                        }
                      >
                        <p
                          className={styles.productRightDetailVariantItemTitle}
                        >
                          {option.variant_option_name}
                        </p>
                        {selectedVariants[variant.id] ===
                          option.variant_option_id && (
                          <img
                            className={
                              styles.productRightDetailVariantItemChecked
                            }
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/ec6dc144acb66ebd1687.svg"
                            alt=""
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.productRightDetailQuantity}>
                <div className={styles.productRightDetailQuantityTitle}>
                  Số Lượng
                </div>
                <div className={styles.productRightDetailQuantityContent}>
                  <button
                    className={styles.productRightDetailQuantityContentBtn}
                    onClick={handleDecrease}
                    disabled={!allVariantsSelected || count <= 1}
                  >
                    &minus;
                  </button>
                  <input
                    onChange={handleChange}
                    className={styles.productRightDetailQuantityContentInput}
                    placeholder={count.toString()}
                    type="text"
                    min="1"
                    disabled={!allVariantsSelected}
                    value={inputValue}
                  />
                  <button
                    className={styles.productRightDetailQuantityContentBtn}
                    onClick={handleIncrease}
                    disabled={!allVariantsSelected}
                  >
                    &#43;
                  </button>
                  <div className={styles.productRightDetailQuantityContentMore}>
                    <p>&#10100;kho&#10101;</p>
                    <p style={{ marginLeft: "3px" }}>sản phẩm có sẵn</p>
                  </div>
                </div>
              </div>
              {showVariantWarning && (
                <p className={styles.productRightDetailQuantityWarning}>
                  Vui lòng chọn Phân loại hàng
                </p>
              )}
            </div>
            <div className={styles.productRightButton}>
              <button
                type="submit"
                onClick={handleClick}
                className={styles.productRightButtonAdd}
              >
                <i
                  style={{ display: "flex", alignItems: "center" }}
                  className="fa-solid fa-cart-shopping"
                ></i>
                <p className={styles.productRightButtonAddContent}>
                  Thêm Vào Giỏ Hàng
                </p>
              </button>
              <button
                type="submit"
                onClick={handleClick}
                className={styles.productRightButtonBuy}
              >
                <p className={styles.productRightButtonBuyContent}>Mua Ngay</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
