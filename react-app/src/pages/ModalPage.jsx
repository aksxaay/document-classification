import React from "react";

import Modal2 from "../components/Modal2";
import Modal3 from "../components/Modal3";

const ModalPage = () => {
  return (
    <>
      <div>
        <button>Modal Activate</button>
        {/* flowbite ez */}
        <Modal2 />
        <Modal3 />
      </div>
    </>
  );
};

export default ModalPage;
