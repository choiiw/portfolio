import { css } from "@emotion/react";

export const heroStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #61dafb;
  color: white;
`;

export const contactInfo = css`
  margin-top: 30px;
  font-size: 1rem;
  text-align: start;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ddd;
    }
  }
`;

export const linkStyle = css`

  text-align: center;
  & a{

    &:nth-of-type(1) {
      margin-right: 10px;
    }
  }
`;