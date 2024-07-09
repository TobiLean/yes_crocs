import StatusSymbol from "./StatusSymbol";
import RemoveButton from "./RemoveButton";
import SaveForLater from "./SaveForLater";

export default function CheckoutProduct({ product }) {
  return (
    <div className="checkout-product-container">
      <div className="product-image">
        <img src={product.imageUrl} />
      </div>
      <div className="checkout-product-all-info">
        <div className="checkout-product-details">
          <span className="product-name">{product.name}</span>
          <div className="checkout-product-status">
            <StatusSymbol bool={product.status} />
          </div>
          <div className="checkout-product-specs">
            <div className="checkout-product-colour">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8"
                  fill={product.colour}
                  stroke="#CBC7C7"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="specs-divider"></div>
            <div className="checkout-product-size">{product.size}</div>
          </div>
          <div className="checkout-product-actions">
            <div className="remove-button-div">
              <RemoveButton type={"sm"} />
            </div>
            <div className="save-button-div">
              <SaveForLater />
            </div>
          </div>
        </div>
        <div className="checkout-product-price">N{product.price.toFixed().replace(/\d(?=(\d{3})+(\D|$))/g, "$&,")}</div>
      </div>
    </div>
  );
}
