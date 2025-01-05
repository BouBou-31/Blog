import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import LoginPopup from "./../components/LoginPopup";

const CommonLayout = ({ children }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container common-layout">
      <Header onLoginClick={handlePopupToggle} />
      <main>{children}</main>
      {isPopupVisible && <LoginPopup onClose={handlePopupToggle} />}
      <Footer />
    </div>
  );
};

export default CommonLayout;