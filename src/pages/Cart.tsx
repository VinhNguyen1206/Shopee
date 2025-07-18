import styles from "../sass/Cart/_Cart.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
  // buyItems,
  buyNewItems,
} from "../redux/productSlice";
import type { CartProduct } from "../types/types";

const Cart = ({ handleVisible }: { handleVisible: () => void }) => {
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  const dispatch = useAppDispatch();

  // increase quantity in cart
  const handleIncrease = (id: number) => {
    dispatch(updateQuantity({ id, count: 1 }));
  };

  // decrease quantity in cart
  const handleDecrease = (id: number) => {
    dispatch(updateQuantity({ id, count: -1 }));
  };

  // remove items from cart
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // clear all items in cart
  const handleClear = () => {
    dispatch(clearCart());
  };

  // buy all items in cart
  const handleBuy = () => {
    dispatch(buyNewItems(products));
  };

  // calc price of all items(include quantities) in cart
  const TotalCartPrice = products.reduce(
    (total, current) => total + current.quantity * current.sale_price,
    0
  );

  // calc price of item(include quantities)
  const TotalItemPrice = (product: CartProduct): number =>
    product.sale_price * product.quantity;

  //auto format to VND
  const formatVND = (value: number): string => {
    // Convert number to string with period separators (e.g. 1.100.000)
    const formatted = value.toLocaleString("vi-VN").replace(/,/g, ".");
    return `${formatted}₫`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <header className={styles.cartHeader}>
          <p className={styles.cartHeaderTitle}> Shopping Cart </p>
          <button className={styles.cartHeaderBtn} onClick={handleVisible}>
            &times;
          </button>
        </header>
        {products.length === 0 ? (
          <div className={styles.cartEmpty}>
            <p className={styles.cartEmptyTitle}>Cart Is Empty</p>
            <p className={styles.cartEmptyContent}>
              Add More Item For Shopping
            </p>
            <div className={styles.cartEmptyImg}></div>
          </div>
        ) : (
          <>
            <div className={styles.cartList}>
              {products.map((product) => (
                <div key={product.id} className={styles.cartCover}>
                  <li className={styles.cartItem}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className={styles.cartItemImg}
                    />
                    <div className={styles.cartItemInfo}>
                      <p className={styles.cartItemName}>{product.name}</p>
                      {product.chooseVariants.map((variant) => (
                        <p key={variant.variant_id}>
                          <strong>{variant.variant_title}:</strong>
                          {variant.option_name}
                        </p>
                      ))}
                      <p className={styles.cartItemPrice}>
                        <strong>Price:</strong>{" "}
                        {formatVND(product.sale_price * 1000)}
                      </p>
                    </div>
                  </li>
                  <div className={styles.cartCoverBtn}>
                    <div className={styles.cartBtn}>
                      <button
                        disabled={product.quantity <= 1}
                        className={styles.cartBtnClick}
                        onClick={() => handleDecrease(product.id)}
                      >
                        &minus;
                      </button>
                      <span className={styles.cartBtnQuantity}>
                        {product.quantity}
                      </span>
                      <button
                        className={styles.cartBtnClick}
                        onClick={() => handleIncrease(product.id)}
                      >
                        &#43;
                      </button>
                      <button
                        onClick={() => handleRemove(product.id)}
                        className={styles.cartBtnRemove}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                    <p className={styles.cartItemTotal}>
                      <strong>Item Total : </strong>
                      {formatVND(TotalItemPrice(product) * 1000)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartFooter}>
              <p className={styles.cartFooterTotal}>
                <strong>Cart Total : </strong>
                {formatVND(TotalCartPrice * 1000)}
              </p>
              <button onClick={handleClear} className={styles.cartFooterClear}>
                Clear
              </button>
              <button onClick={handleBuy} className={styles.cartFooterBuy}>
                Mua hàng
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
