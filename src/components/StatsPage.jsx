// src/components/StatsPage.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './StatsPage.css';

const dummyCalendar = [
  // 예시: 날짜별 기록 개수
  { date: "2024-07-07", records: [/* ... */] },
  { date: "2024-07-08", records: [/* ... */] },
  // ...
];

const StatsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [month, setMonth] = useState(7);

  // 예시: 선택한 날짜의 기록들
  const records = [
    { id: 1, values: [80, 90, 100, 110, 120], date: "2024-07-08" },
    { id: 2, values: [70, 85, 95, 105, 115], date: "2024-07-08" },
    { id: 3, values: [60, 75, 85, 95, 105], date: "2024-07-08" },
    // ...더 많은 기록
  ];

  // 평균, 최고, 최저 계산 (예시)
  const allValues = records.flatMap(r => r.values);
  const avg = allValues.length ? (allValues.reduce((a, b) => a + b, 0) / allValues.length).toFixed(1) : 0;
  const max = allValues.length ? Math.max(...allValues) : 0;
  const min = allValues.length ? Math.min(...allValues) : 0;

  // 강조 효과를 위한 현재 인덱스 (예시: 첫 번째 기록 강조)
  const [highlightIdx, setHighlightIdx] = useState(0);

  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "80px" // 네비게이션 바 높이만큼(또는 원하는 만큼)
    }}>
      <div style={{
        width: "90%",
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        {/* 좌측 */}
        <div style={{ width: "40%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* 상단: 평균/최고/최저 */}
          <div
            style={{
              width: "90%",
              background: "#eee", // 2번째 사진처럼 더 진한 회색
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            {/* 날짜 */}
            <div
              style={{
                display: "flex",
                justifyContent: "center", // 가운데 정렬
                fontWeight: "bold",
                fontSize: "22px",
                marginBottom: "50px", //이걸로 아래 칸? 길이? 조절하기
                width: "100%" // 부모 컨테이너 기준으로 가운데 정렬
              }}
            >
              {selectedDate.toISOString().slice(5, 10).replace("-", "/")}
            </div>
            {/* 항목명(평균/최고/최저) */}
            <div style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "30px",
              gap: "150px"
            }}>
              <div>평균 인터벌</div>
              <div>최고 값</div>
              <div>최저 값</div>
            </div>
            {/* 값(평균/최고/최저) */}
            <div style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              fontWeight: "normal",
              fontSize: "18px",
              gap: "150px"
            }}>
              <div style={{ textAlign: "center" }}>{avg} blinked<br />/ min</div>
              <div style={{ textAlign: "center" }}>{max} blinked<br />/ min</div>
              <div style={{ textAlign: "center" }}>{min} blinked<br />/ min</div>
            </div>
          </div>
          {/* 하단: 달력 */}
          <div
            style={{
              width: "100%",           // 원하는 너비로 조정
              margin: "0 auto",         // 가운데 정렬
              background: "#fff",
              borderRadius: "16px",
              padding: "24px 12px 24px 24px", // 오른쪽 패딩만 줄임
              boxShadow: "0 2px 8px #eee"
            }}
          >
            {/* 달력 라이브러리 사용 */}
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              formatDay={(_, date) => date.getDate()} //'일' 없애기기
            />
          </div>
        </div>
        {/* 우측: 그래프 리스트 */}
        <div style={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{
            width: "100%",
            height: "340px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}>
            {records.map((rec, idx) => (
              <div
                key={rec.id}
                onMouseEnter={() => setHighlightIdx(idx)}
                style={{
                  background: "#eee",
                  borderRadius: "20px",
                  padding: "24px",
                  marginBottom: idx === records.length - 1 ? 0 : "12px",
                  boxShadow: highlightIdx === idx ? "0 4px 24px #bcbcff" : "0 2px 8px #eee",
                  transform: highlightIdx === idx ? "scale(1.04)" : "scale(1)",
                  transition: "all 0.2s",
                  cursor: "pointer"
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{selectedDate.toISOString().slice(5, 10).replace("-", "/")} 기록 {idx + 1}</div>
                {/* 간단한 그래프 예시 (실제 구현시 chart.js, recharts 등 라이브러리 추천) */}
                <div style={{ width: "100%", height: "80px", background: "#ccc", borderRadius: "12px", marginBottom: "8px" }}>
                  {/* 그래프 자리 */}
                </div>
                <div>현재 측정 기록: {rec.values[rec.values.length - 1]} blinked / min</div>
                <div>과거 측정 기록: {rec.values[0]} blinked / min</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
