import { css } from "@emotion/react";

export const sidebarStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const linkContainerStyle = css`
  display: flex;
  padding: 0;
  gap: 80px; /* 링크 사이 간격 */
`;

export const linkStyle = css`
  list-style: none;

a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
}
`;