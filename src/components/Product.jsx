export default function Product({ product }) {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.imageUrl} />
      </div>

      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <div className="product-rating">
          <span className="rating-star">
            <svg
              width="45"
              height="9"
              viewBox="0 0 45 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 0L5.51031 3.10942H8.77975L6.13472 5.03115L7.14503 8.14058L4.5 6.21885L1.85497 8.14058L2.86528 5.03115L0.220246 3.10942H3.48969L4.5 0Z"
                fill="#F7A426"
              />
              <path
                d="M13.5 0L14.5103 3.10942H17.7798L15.1347 5.03115L16.145 8.14058L13.5 6.21885L10.855 8.14058L11.8653 5.03115L9.22025 3.10942H12.4897L13.5 0Z"
                fill="#F7A426"
              />
              <path
                d="M22.5 0L23.5103 3.10942H26.7798L24.1347 5.03115L25.145 8.14058L22.5 6.21885L19.855 8.14058L20.8653 5.03115L18.2202 3.10942H21.4897L22.5 0Z"
                fill="#F7A426"
              />
              <path
                d="M31.5 0L32.5103 3.10942H35.7798L33.1347 5.03115L34.145 8.14058L31.5 6.21885L28.855 8.14058L29.8653 5.03115L27.2202 3.10942H30.4897L31.5 0Z"
                fill="#F7A426"
              />
              <path
                d="M45 3.44129H41.5567L40.5 0L39.4433 3.44129H36L38.8164 5.55871L37.7196 9L40.5 6.86732L43.2804 9L42.1815 5.55871L45 3.44129ZM40.8493 6.3446L40.5 6.07681V2.05694L40.9875 3.64219L41.1233 4.08415H43.0993L41.8371 5.03237L41.4679 5.3098L41.6137 5.76683L42.1061 7.30868L40.8493 6.3446Z"
                fill="#F7A426"
              />
            </svg>
          </span>
          <span className="rating-label">{product.rating}</span>
        </div>
        <div className="product-price">{product.price}</div>
      </div>
      <div className="add-to-cart">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1786 6.32145C19.1786 5.89521 19.0093 5.48643 18.7079 5.18503C18.4065 4.88363 17.9977 4.71431 17.5715 4.71431C17.1452 4.71431 16.7364 4.88363 16.435 5.18503C16.1336 5.48643 15.9643 5.89521 15.9643 6.32145V15.9643H6.32147C5.89523 15.9643 5.48644 16.1336 5.18505 16.435C4.88365 16.7364 4.71432 17.1452 4.71432 17.5715C4.71432 17.9977 4.88365 18.4065 5.18505 18.7079C5.48644 19.0093 5.89523 19.1786 6.32147 19.1786H15.9643V28.8215C15.9643 29.2477 16.1336 29.6565 16.435 29.9579C16.7364 30.2593 17.1452 30.4286 17.5715 30.4286C17.9977 30.4286 18.4065 30.2593 18.7079 29.9579C19.0093 29.6565 19.1786 29.2477 19.1786 28.8215V19.1786H28.8215C29.2477 19.1786 29.6565 19.0093 29.9579 18.7079C30.2593 18.4065 30.4286 17.9977 30.4286 17.5715C30.4286 17.1452 30.2593 16.7364 29.9579 16.435C29.6565 16.1336 29.2477 15.9643 28.8215 15.9643H19.1786V6.32145Z"
            fill="#C2EFDA"
          />
        </svg>
      </div>
      <div className="like">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_24)">
            <path
              d="M11.8572 20.9286L12.35 21.88C12.1977 21.9589 12.0287 22.0001 11.8572 22.0001C11.6857 22.0001 11.5166 21.9589 11.3643 21.88L11.3529 21.8743L11.3272 21.86C11.1776 21.7828 11.0299 21.7018 10.8843 21.6171C9.14292 20.6266 7.50021 19.4718 5.97862 18.1686C3.35005 15.9014 0.428619 12.5 0.428619 8.42857C0.428619 4.62286 3.40862 2 6.50005 2C8.71005 2 10.6472 3.14571 11.8572 4.88571C13.0672 3.14571 15.0043 2 17.2143 2C20.3058 2 23.2858 4.62286 23.2858 8.42857C23.2858 12.5 20.3643 15.9014 17.7358 18.1686C16.0853 19.5806 14.2928 20.8177 12.3872 21.86L12.3615 21.8743L12.3529 21.8786H12.35L11.8572 20.9286ZM6.50005 4.14286C4.59148 4.14286 2.57148 5.80571 2.57148 8.42857C2.57148 11.5 4.82862 14.3486 7.37862 16.5457C8.76998 17.7356 10.2693 18.793 11.8572 19.7043C13.445 18.793 14.9444 17.7356 16.3358 16.5457C18.8858 14.3486 21.1429 11.5 21.1429 8.42857C21.1429 5.80571 19.1229 4.14286 17.2143 4.14286C15.2529 4.14286 13.4872 5.55143 12.8872 7.65143C12.824 7.87596 12.6892 8.0737 12.5033 8.21454C12.3173 8.35538 12.0904 8.4316 11.8572 8.4316C11.6239 8.4316 11.3971 8.35538 11.2111 8.21454C11.0252 8.0737 10.8904 7.87596 10.8272 7.65143C10.2272 5.55143 8.46148 4.14286 6.50005 4.14286Z"
              fill="#224F34"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_24">
              <rect
                width="22.8571"
                height="22.8571"
                fill="white"
                transform="translate(0.428619 0.571442)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
