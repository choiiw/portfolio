import { css, keyframes } from "@emotion/react";

// 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Skills 섹션 스타일
export const sectionStyle = css`
  padding: 60px 20px;
  background-color: #ffffff;
  text-align: center;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    animation: ${fadeIn} 1s ease-in-out; /* 애니메이션 추가 */
  }
`;

export const skillCategory = css`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in-out; /* 애니메이션 추가 */

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    animation: ${fadeIn} 1.2s ease-in-out; /* 각 요소에 다른 딜레이 */
  }

  p {
    font-size: 16px;
    animation: ${fadeIn} 1.4s ease-in-out;
  }
`;