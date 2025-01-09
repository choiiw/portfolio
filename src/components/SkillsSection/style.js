/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const sectionStyle = css`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #cdb4db, #d9c2e9); /* 배경색 */
`;

export const titleStyle = css`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 40px;
  display: flex;
  gap: 5px;
`;

export const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const skillCategory = css`
  padding: 20px;
  background: rgba(255, 255, 255, 0.2); /* 반투명 배경 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 유리 효과 테두리 */
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 */
  backdrop-filter: blur(10px); /* 유리 효과 */
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* 살짝 확대 */
    background-color: rgba(255, 255, 255, 0.3); /* 호버 시 밝아짐 */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* 그림자 강조 */
  }

  h3 {
    color: #333;
    transition: color 0.3s ease;
  }

  ul li span {
    color: #555;
    transition: color 0.3s ease;

    &:hover {
      font-weight: bold;
      color: #007bff; /* 스킬 이름 강조 */
    }
  }
`;

export const skillItem = css`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  margin: 10px 0;

  svg {
    font-size: 1.5rem;
    color: #007bff; /* 아이콘 색상 */
  }

  span {
    font-size: 1rem;
    color: #555;
  }
`;

export const hoverEffect = css`
  &:hover {
    font-weight: bold;
  }
`;