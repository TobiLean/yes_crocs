import IncreaseDecrease from "./IncreaseDecrease";
import { useState } from "react";

export default function CartProduct({ product }) {
  const [count, setCount] = useState(1);
  const handleMinus = () => {
    const newValue = Math.max(count - 1, 1);
    setCount(newValue);
  };

//   const formatter = new Intl.NumberFormat();

//   (12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="cart-product-container">
      <div className="cart-product-details">
        <div className="cart-product-image">
          <img src={product.imageUrl} />
        </div>
        <span className="cart-product-name">{product.name}</span>
      </div>
      <IncreaseDecrease
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        count={count}
      />
      <div className="cart-product-price">N{product.price.toFixed().replace(/\d(?=(\d{3})+(\D|$))/g, "$&,")}</div>
      <div className="cart-product-size">{product.size}</div>
      <div className="cart-product-total">N{(count * product.price).toFixed().replace(/\d(?=(\d{3})+(\D|$))/g, "$&,")}</div>
      <div className="cart-product-delete">
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.32106 3.34682C9.32106 2.46277 9.67225 1.61492 10.2974 0.989799C10.9225 0.364678 11.7703 0.0134888 12.6544 0.0134888H22.6544C23.5385 0.0134888 24.3863 0.364678 25.0114 0.989799C25.6365 1.61492 25.9877 2.46277 25.9877 3.34682V6.68016H32.6544C33.0964 6.68016 33.5204 6.85575 33.8329 7.16831C34.1455 7.48087 34.3211 7.90479 34.3211 8.34682C34.3211 8.78885 34.1455 9.21277 33.8329 9.52533C33.5204 9.83789 33.0964 10.0135 32.6544 10.0135H30.8727L29.4277 30.2502C29.3679 31.0911 28.9916 31.8782 28.3746 32.4528C27.7576 33.0274 26.9458 33.3468 26.1027 33.3468H9.2044C8.3613 33.3468 7.54951 33.0274 6.93254 32.4528C6.31557 31.8782 5.93926 31.0911 5.8794 30.2502L4.43773 10.0135H2.6544C2.21237 10.0135 1.78845 9.83789 1.47589 9.52533C1.16333 9.21277 0.987732 8.78885 0.987732 8.34682C0.987732 7.90479 1.16333 7.48087 1.47589 7.16831C1.78845 6.85575 2.21237 6.68016 2.6544 6.68016H9.32106V3.34682ZM12.6544 6.68016H22.6544V3.34682H12.6544V6.68016ZM7.77773 10.0135L9.20607 30.0135H26.1044L27.5327 10.0135H7.77773ZM14.3211 13.3468C14.7631 13.3468 15.187 13.5224 15.4996 13.835C15.8121 14.1475 15.9877 14.5715 15.9877 15.0135V25.0135C15.9877 25.4555 15.8121 25.8794 15.4996 26.192C15.187 26.5046 14.7631 26.6802 14.3211 26.6802C13.879 26.6802 13.4551 26.5046 13.1426 26.192C12.83 25.8794 12.6544 25.4555 12.6544 25.0135V15.0135C12.6544 14.5715 12.83 14.1475 13.1426 13.835C13.4551 13.5224 13.879 13.3468 14.3211 13.3468ZM20.9877 13.3468C21.4298 13.3468 21.8537 13.5224 22.1662 13.835C22.4788 14.1475 22.6544 14.5715 22.6544 15.0135V25.0135C22.6544 25.4555 22.4788 25.8794 22.1662 26.192C21.8537 26.5046 21.4298 26.6802 20.9877 26.6802C20.5457 26.6802 20.1218 26.5046 19.8092 26.192C19.4967 25.8794 19.3211 25.4555 19.3211 25.0135V15.0135C19.3211 14.5715 19.4967 14.1475 19.8092 13.835C20.1218 13.5224 20.5457 13.3468 20.9877 13.3468Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}
