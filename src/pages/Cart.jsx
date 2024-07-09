import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonComponent from "../components/ButtonComponent";
import CartProduct from "../components/CartProduct";

let productList = [
  {
    id: "001",
    name: "cow",
    rating: 4.5,
    price: 30000,
    size: 41,
    imageUrl: "/public/images/IMG-20240706-WA0009.png",
  },
  {
    id: "002",
    name: "cow",
    rating: 4.5,
    price: 30000,
    size: 41,
    imageUrl: "/public/images/IMG-20240706-WA0009.png",
  },
  {
    id: "003",
    name: "cow",
    rating: 4.5,
    price: 30000,
    size: 41,
    imageUrl: "/public/images/IMG-20240706-WA0009.png",
  },
  {
    id: "004",
    name: "cow",
    rating: 4.5,
    price: 30000,
    size: 41,
    imageUrl: "/public/images/IMG-20240706-WA0009.png",
  },
];

export default function Cart() {
  return (
    <>
      {/* <div className="all-container"> */}
      <Navbar />
      <div className="back-button-div">
        <a href="/">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 22.5H40.5C40.8978 22.5 41.2794 22.658 41.5607 22.9393C41.842 23.2206 42 23.6022 42 24C42 24.3978 41.842 24.7794 41.5607 25.0607C41.2794 25.342 40.8978 25.5 40.5 25.5H10.5C10.1022 25.5 9.72064 25.342 9.43934 25.0607C9.15804 24.7794 9 24.3978 9 24C9 23.6022 9.15804 23.2206 9.43934 22.9393C9.72064 22.658 10.1022 22.5 10.5 22.5Z"
              fill="black"
            />
            <path
              d="M11.1211 24L23.5621 36.438C23.8437 36.7197 24.002 37.1017 24.002 37.5C24.002 37.8983 23.8437 38.2803 23.5621 38.562C23.2804 38.8437 22.8984 39.0019 22.5001 39.0019C22.1018 39.0019 21.7197 38.8437 21.4381 38.562L7.93809 25.062C7.7984 24.9227 7.68757 24.7571 7.61195 24.5749C7.53633 24.3927 7.49741 24.1973 7.49741 24C7.49741 23.8027 7.53633 23.6073 7.61195 23.4251C7.68757 23.2429 7.7984 23.0773 7.93809 22.938L21.4381 9.438C21.7197 9.15634 22.1018 8.99811 22.5001 8.99811C22.8984 8.99811 23.2804 9.15634 23.5621 9.438C23.8437 9.71966 24.002 10.1017 24.002 10.5C24.002 10.8983 23.8437 11.2803 23.5621 11.562L11.1211 24Z"
              fill="black"
            />
          </svg>
          <span>Go Back</span>
        </a>
      </div>
      <main className="cart-main">
        <h1>My Cart ({productList.length})</h1>
        <div className="cart-header">
          <span className="details-cart-header">Product Details</span>
          <span className="quantity-cart-header">Quantity</span>
          <span className="price-cart-header">Price</span>
          <span className="size-cart-header">Size</span>
          <span className="total-cart-header">Total</span>
        </div>
        <div className="cart-product-grid">
          {productList.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
        <ButtonComponent text={"proceed"} route={"/checkout"} />
      </main>
      <Footer />
    </>
  );
}
