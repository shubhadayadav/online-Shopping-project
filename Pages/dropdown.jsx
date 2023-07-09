import React from "react";

const Dropdown = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end show"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        aria-modal="true"
        role="dialog"
        style={{ visibility: "visible" }}
      ></div>
    </>
  );
};

export default Dropdown;
