export default function IncreaseDecrease({ count, handleMinus, handlePlus }) {
  return (
    <div className="increase-decrease-whole">
      <button className="minus-button" onClick={handleMinus}>
        <svg
          width="14"
          height="3"
          viewBox="0 0 14 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3327 2.01198H1.31433C1.07081 2.01198 0.837263 1.91524 0.665068 1.74305C0.492872 1.57085 0.396133 1.3373 0.396133 1.09378C0.396133 0.85026 0.492872 0.616713 0.665068 0.444517C0.837263 0.272322 1.07081 0.175583 1.31433 0.175583H12.3327C12.5762 0.175583 12.8098 0.272322 12.982 0.444517C13.1542 0.616713 13.2509 0.85026 13.2509 1.09378C13.2509 1.3373 13.1542 1.57085 12.982 1.74305C12.8098 1.91524 12.5762 2.01198 12.3327 2.01198Z"
            fill="#777676"
          />
        </svg>
      </button>
      <input className="count-view" type="text" value={count} readOnly />
      <button className="plus-button" onClick={handlePlus}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8125 10.3199H10.4669V17.6654H8.01838V10.3199H0.672791V7.87133H8.01838V0.525742H10.4669V7.87133H17.8125V10.3199Z"
            fill="#777676"
          />
        </svg>
      </button>
    </div>
  );
}
