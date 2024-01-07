import React from "react";
import ReactModal from "react-modal";
import MoonLoader from "react-spinners/MoonLoader";

const FullPageLoading = () => {
  return (
    <div className="custom-loading">
      <MoonLoader color="#C63DEE" height={15} width={5} radius={2} />
    </div>
  );
};

export default FullPageLoading;
