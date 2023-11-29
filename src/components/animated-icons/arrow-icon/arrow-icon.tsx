import React, { FC } from "react";
import "./arrow-icon.scss";

const ArrowIcon: FC = () => {
  return (
    <div className="arrow-icon-container" style={{ padding: 0 + "px" }}>
      <svg id="arrow-left" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.30652 1.28851C5.9902 0.97219 5.47735 0.97219 5.16103 1.28851L0.579095 5.87045C0.371657 6.07788 0.300256 6.36984 0.36489 6.63547C0.384583 6.81165 0.461982 6.98261 0.597087 7.11772L5.17903 11.6997C5.49534 12.016 6.00819 12.016 6.32451 11.6997C6.64083 11.3833 6.64083 10.8705 6.32451 10.5542L3.18667 7.41633H10.711C11.2276 7.41633 11.6465 6.99748 11.6465 6.4808C11.6465 5.96412 11.2276 5.54527 10.711 5.54527H3.19524L6.30652 2.43399C6.62284 2.11768 6.62284 1.60482 6.30652 1.28851Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
