import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <MdArrowBackIos className="back-button-icon" />
      <span>Kembali</span>
    </button>
  );
};

export default BackButton;
