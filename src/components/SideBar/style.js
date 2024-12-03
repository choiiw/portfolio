import { css } from "@emotion/react";

export const sidebarStyle = css`
    position: fixed; /* 스크롤에도 항상 고정 */
    top: 0;
    left: 0;
    width: 100%; /* 전체 너비 */
    height: 60px; /* 고정된 높이 */
    background-color: #4a4a4a; /* 어두운 회색 배경 */
    color: #fff; /* 텍스트 색상 */
    display: flex; /* 로고와 링크를 수평 배치 */
    justify-content: space-between; /* 로고와 링크를 양쪽으로 배치 */
    align-items: center; /* 세로 가운데 정렬 */
    padding: 0 20px; /* 양쪽 여백 추가 */
    z-index: 1000; /* 다른 요소 위에 고정 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 하단 그림자 */

    @media (max-width: 768px) {
        height: 50px; /* 작은 화면에서 높이 줄이기 */
        padding: 0 10px; /* 패딩 줄이기 */
    }
`;

export const logoTextStyle = css`
    padding-left: 50px;
    font-size: 24px; /* 로고 글자 크기 */
    font-weight: bold; /* 굵게 */
    color: #fff; /* 텍스트 색상 */
    margin: 0; /* 기본 p 태그 여백 제거 */
    cursor: pointer; /* 클릭 가능한 느낌 */
    transition: color 0.3s;

    a {
        text-decoration: none; /* 링크 밑줄 제거 */
        color: inherit; /* 부모 색상 계승 */
    }

    &:hover {
        color: #1e90ff; /* 호버 시 색상 변경 */
    }
`;

export const linkContainerStyle = css`
    list-style: none;
    display: flex; /* 수평 정렬 */
    gap: 130px; /* 링크 간 간격 */
    padding: 0 100px 0 0;
    margin: 0;
`;

export const linkStyle = css`
    a {
        text-decoration: none;
        color: #d3d3d3; /* 기본 링크 색상 */
        font-size: 16px;
        transition: color 0.3s;

        &:hover {
            color: #1e90ff; /* 호버 시 파란색 강조 */
        }
    }
`;