import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <nav className="main-navbar">
        <div className="main-logo">서비스 로고 | 이름</div>
        <div className="main-menu">
          <span>프로필 | 설정</span>
          <span>나의 통계</span>
          <span>노래 추천</span>
          <span>눈 인식 제어</span>
        </div>
        <div className="main-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
            alt="profile"
            className="profile-icon"
          />
          <span className="logout-text">로그아웃</span>
        </div>
      </nav>
      <div className="main-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
          alt="profile"
          className="main-profile-big"
        />
      </div>
    </div>
  );
};

export default MainPage;