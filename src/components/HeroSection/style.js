import { css } from "@emotion/react";

export const heroStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #a2d2ff, #cdb4db); /* 부드러운 파스텔 블루-보라 */
  text-align: center;
  color: white;
  padding: 0 20px;

  h1 {
    font-size: 40px; /* px 단위 */
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 20px; /* px 단위 */
    margin-bottom: 12px;
  }

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #cdb4db; /* 호버 시 보라색 강조 */
    }
  }

  .linkStyle {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;

    svg {
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;