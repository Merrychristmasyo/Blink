import React, { useRef, useState } from "react";

const EyeControlPage = () => {
  const [isDetecting, setIsDetecting] = useState(false);

  // 추후: 웹캠 영상, 눈동자 위치, 깜빡임 횟수 상태 추가

  const handleStart = () => {
    setIsDetecting(true);
    // 추후: 웹캠 및 눈 인식 시작
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "60px"
      }}
    >
      <div style={{ marginTop: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* 왼쪽: 눈 애니메이션 + 버튼 */}
        <div style={{ display: "flex", gap: "32px", position: "relative" }}>
          {/* 왼쪽 눈 */}
          <div style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 16px #eee",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#222",
              position: "absolute",
              top: "60px", // 중앙에 오도록 조정
              left: "60px"
            }} />
          </div>
          {/* 오른쪽 눈 */}
          <div style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 16px #eee",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#222",
              position: "absolute",
              top: "60px",
              left: "60px"
            }} />
          </div>
        </div>
        <button
          onClick={handleStart}
          style={{
            marginTop: "32px",
            padding: "12px 36px",
            fontSize: "18px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          인식 시작
        </button>
      </div>
      {/* 오른쪽: 웹캠 영상 및 정보 */}
      <div
        style={{
          marginTop: "200px", // 오른쪽도 동일하게 맞추고 싶으면 추가
          width: "420px",
          height: "300px",
          background: "#ddd",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span>웹캠 영상 / 실시간 영상 뷰어</span>
      </div>
    </div>
  );
};

export default EyeControlPage;
