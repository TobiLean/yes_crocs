export default function Sidebar() {
  return (
    <div id="sidebar">
      <details className="categories-filter">
        <summary>
          Categories
          <svg
            className="svg-up"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_78)">
              <path
                d="M8 7.00001C7.93442 7.00081 7.86941 6.98787 7.80913 6.96204C7.74885 6.93621 7.69465 6.89804 7.65 6.85001L3.15 2.35001C2.95 2.15001 2.95 1.84001 3.15 1.64001C3.35 1.44001 3.66 1.44001 3.86 1.64001L8.01 5.79001L12.15 1.65001C12.35 1.45001 12.66 1.45001 12.86 1.65001C13.06 1.85001 13.06 2.16001 12.86 2.36001L8.36 6.86001C8.26 6.96001 8.13 7.01001 8.01 7.01001L8 7.00001Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_78">
                <rect
                  width="16"
                  height="7"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="svg-down"
            width="16"
            height="7"
            viewBox="0 0 16 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C12.4344 6.0008 12.3694 5.98787 12.3091 5.96203C12.2488 5.9362 12.1946 5.89804 12.15 5.85L7.99999 1.71L3.84999 5.85C3.64999 6.05 3.33999 6.05 3.13999 5.85C2.93999 5.65 2.93999 5.34 3.13999 5.14L7.64999 0.65C7.84999 0.45 8.15999 0.45 8.35999 0.65L12.86 5.15C13.06 5.35 13.06 5.66 12.86 5.86C12.76 5.96 12.63 6.01 12.51 6.01L12.5 6Z"
              fill="black"
            />
          </svg>
        </summary>

        <ul>
          <li>
            <label htmlFor="men_filter">Men</label>
            <input type="checkbox" name="men_filter" id="men_filter" />
          </li>
          <li>
            <label htmlFor="women_filter">Women</label>
            <input type="checkbox" name="women_filter" id="women_filter" />
          </li>
          <li>
            <label htmlFor="kids_filter">Kids</label>
            <input type="checkbox" name="kids_filter" id="kids_filter" />
          </li>
        </ul>
      </details>

      <details className="price-filter">
        <summary>
          Price Range
          <svg
            className="svg-up"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_78)">
              <path
                d="M8 7.00001C7.93442 7.00081 7.86941 6.98787 7.80913 6.96204C7.74885 6.93621 7.69465 6.89804 7.65 6.85001L3.15 2.35001C2.95 2.15001 2.95 1.84001 3.15 1.64001C3.35 1.44001 3.66 1.44001 3.86 1.64001L8.01 5.79001L12.15 1.65001C12.35 1.45001 12.66 1.45001 12.86 1.65001C13.06 1.85001 13.06 2.16001 12.86 2.36001L8.36 6.86001C8.26 6.96001 8.13 7.01001 8.01 7.01001L8 7.00001Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_78">
                <rect
                  width="16"
                  height="7"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="svg-down"
            width="16"
            height="7"
            viewBox="0 0 16 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C12.4344 6.0008 12.3694 5.98787 12.3091 5.96203C12.2488 5.9362 12.1946 5.89804 12.15 5.85L7.99999 1.71L3.84999 5.85C3.64999 6.05 3.33999 6.05 3.13999 5.85C2.93999 5.65 2.93999 5.34 3.13999 5.14L7.64999 0.65C7.84999 0.45 8.15999 0.45 8.35999 0.65L12.86 5.15C13.06 5.35 13.06 5.66 12.86 5.86C12.76 5.96 12.63 6.01 12.51 6.01L12.5 6Z"
              fill="black"
            />
          </svg>
        </summary>

        <ul>
          <li>
            <label htmlFor="men_filter">Men</label>
            <input type="checkbox" name="men_filter" id="men_filter" />
          </li>
          <li>
            <label htmlFor="women_filter">Women</label>
            <input type="checkbox" name="women_filter" id="women_filter" />
          </li>
          <li>
            <label htmlFor="kids_filter">Kids</label>
            <input type="checkbox" name="kids_filter" id="kids_filter" />
          </li>
        </ul>
      </details>

      <details className="color-filter">
        <summary>
          Color
          <svg
            className="svg-up"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_78)">
              <path
                d="M8 7.00001C7.93442 7.00081 7.86941 6.98787 7.80913 6.96204C7.74885 6.93621 7.69465 6.89804 7.65 6.85001L3.15 2.35001C2.95 2.15001 2.95 1.84001 3.15 1.64001C3.35 1.44001 3.66 1.44001 3.86 1.64001L8.01 5.79001L12.15 1.65001C12.35 1.45001 12.66 1.45001 12.86 1.65001C13.06 1.85001 13.06 2.16001 12.86 2.36001L8.36 6.86001C8.26 6.96001 8.13 7.01001 8.01 7.01001L8 7.00001Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_78">
                <rect
                  width="16"
                  height="7"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="svg-down"
            width="16"
            height="7"
            viewBox="0 0 16 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C12.4344 6.0008 12.3694 5.98787 12.3091 5.96203C12.2488 5.9362 12.1946 5.89804 12.15 5.85L7.99999 1.71L3.84999 5.85C3.64999 6.05 3.33999 6.05 3.13999 5.85C2.93999 5.65 2.93999 5.34 3.13999 5.14L7.64999 0.65C7.84999 0.45 8.15999 0.45 8.35999 0.65L12.86 5.15C13.06 5.35 13.06 5.66 12.86 5.86C12.76 5.96 12.63 6.01 12.51 6.01L12.5 6Z"
              fill="black"
            />
          </svg>
        </summary>

        <ul>
          <li>
            <label htmlFor="men_filter">Men</label>
            <input type="checkbox" name="men_filter" id="men_filter" />
          </li>
          <li>
            <label htmlFor="women_filter">Women</label>
            <input type="checkbox" name="women_filter" id="women_filter" />
          </li>
          <li>
            <label htmlFor="kids_filter">Kids</label>
            <input type="checkbox" name="kids_filter" id="kids_filter" />
          </li>
        </ul>
      </details>

      <details className="size-filter">
        <summary>
          Size
          <svg
            className="svg-up"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_78)">
              <path
                d="M8 7.00001C7.93442 7.00081 7.86941 6.98787 7.80913 6.96204C7.74885 6.93621 7.69465 6.89804 7.65 6.85001L3.15 2.35001C2.95 2.15001 2.95 1.84001 3.15 1.64001C3.35 1.44001 3.66 1.44001 3.86 1.64001L8.01 5.79001L12.15 1.65001C12.35 1.45001 12.66 1.45001 12.86 1.65001C13.06 1.85001 13.06 2.16001 12.86 2.36001L8.36 6.86001C8.26 6.96001 8.13 7.01001 8.01 7.01001L8 7.00001Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_78">
                <rect
                  width="16"
                  height="7"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="svg-down"
            width="16"
            height="7"
            viewBox="0 0 16 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C12.4344 6.0008 12.3694 5.98787 12.3091 5.96203C12.2488 5.9362 12.1946 5.89804 12.15 5.85L7.99999 1.71L3.84999 5.85C3.64999 6.05 3.33999 6.05 3.13999 5.85C2.93999 5.65 2.93999 5.34 3.13999 5.14L7.64999 0.65C7.84999 0.45 8.15999 0.45 8.35999 0.65L12.86 5.15C13.06 5.35 13.06 5.66 12.86 5.86C12.76 5.96 12.63 6.01 12.51 6.01L12.5 6Z"
              fill="black"
            />
          </svg>
        </summary>

        <ul>
          <li>
            <label htmlFor="men_filter">Men</label>
            <input type="checkbox" name="men_filter" id="men_filter" />
          </li>
          <li>
            <label htmlFor="women_filter">Women</label>
            <input type="checkbox" name="women_filter" id="women_filter" />
          </li>
          <li>
            <label htmlFor="kids_filter">Kids</label>
            <input type="checkbox" name="kids_filter" id="kids_filter" />
          </li>
        </ul>
      </details>

      <details className="delivery-filter">
        <summary>
          Delivery time
          <svg
            className="svg-up"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_78)">
              <path
                d="M8 7.00001C7.93442 7.00081 7.86941 6.98787 7.80913 6.96204C7.74885 6.93621 7.69465 6.89804 7.65 6.85001L3.15 2.35001C2.95 2.15001 2.95 1.84001 3.15 1.64001C3.35 1.44001 3.66 1.44001 3.86 1.64001L8.01 5.79001L12.15 1.65001C12.35 1.45001 12.66 1.45001 12.86 1.65001C13.06 1.85001 13.06 2.16001 12.86 2.36001L8.36 6.86001C8.26 6.96001 8.13 7.01001 8.01 7.01001L8 7.00001Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_78">
                <rect
                  width="16"
                  height="7"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="svg-down"
            width="16"
            height="7"
            viewBox="0 0 16 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C12.4344 6.0008 12.3694 5.98787 12.3091 5.96203C12.2488 5.9362 12.1946 5.89804 12.15 5.85L7.99999 1.71L3.84999 5.85C3.64999 6.05 3.33999 6.05 3.13999 5.85C2.93999 5.65 2.93999 5.34 3.13999 5.14L7.64999 0.65C7.84999 0.45 8.15999 0.45 8.35999 0.65L12.86 5.15C13.06 5.35 13.06 5.66 12.86 5.86C12.76 5.96 12.63 6.01 12.51 6.01L12.5 6Z"
              fill="black"
            />
          </svg>
        </summary>

        <ul>
          <li>
            <label htmlFor="men_filter">Men</label>
            <input type="checkbox" name="men_filter" id="men_filter" />
          </li>
          <li>
            <label htmlFor="women_filter">Women</label>
            <input type="checkbox" name="women_filter" id="women_filter" />
          </li>
          <li>
            <label htmlFor="kids_filter">Kids</label>
            <input type="checkbox" name="kids_filter" id="kids_filter" />
          </li>
        </ul>
      </details>
    </div>
  );
}
