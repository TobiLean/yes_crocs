export default function SaveForLater() {
  return (
    <div className="save-for-later-button">
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 21V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H16C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V21L9 16.8635L1 21Z"
          stroke="#8F908F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M5 8H13"
          stroke="#8F908F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        Save for later
      </span>
    </div>
  );
}
