import { css } from "@emotion/react";

export const sectionStyle = css`
    padding: 50px;
    background: #f5f5f5;
    text-align: center;

    & p {
        font-size: 19px;
    }

    & a {
        text-decoration: none;
        &:nth-of-type(1) {
            margin-right: 20px;
        }
    }
`;

export const sliderStyle = css`
    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none; // 클릭 시 파란색 테두리 제거
    }

    .slick-prev,
    .slick-next {
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        z-index: 10;
        background: #b0b0b0; /* 단색: 중간 회색 */
        color: white; /* 화살표 아이콘 색상 */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
    }

    .slick-prev {
        left: 500px; /* 왼쪽 화살표 위치 조정 */
    }

    .slick-next {
        right: 500px; /* 오른쪽 화살표 위치 조정 */
    }

    .slick-prev:hover,
    .slick-next:hover {
        background: #7a7a7a; /* 호버 시 색상: 어두운 회색 */
    }

    .slick-dots li button:before {
        color: #ccc; /* 기본 네비게이션 점 색상 */
    }

    .slick-dots li.slick-active button:before {
        color: #333; /* 활성화된 점 색상 */
    }
`;

export const projectCardStyle = css`
    text-align: center;
    margin: 0 auto;
    padding: 10px;
`;

export const projectImageStyle = css`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;