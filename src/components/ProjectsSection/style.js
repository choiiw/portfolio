import { css } from "@emotion/react";

export const sectionStyle = css`
    padding: 80px 20px;
    text-align: center;
    background: linear-gradient(180deg, #d9c2e9, #a2d2ff);
    h1 {
        font-size: 32px; /* 큰 헤더 폰트 */
        font-weight: bold;
        margin-bottom: 20px;
        color: #fff; /* 어두운 텍스트 색상 */
    }

    p {
        font-size: 18px;
        color: #fff;
    }

    a {
        text-decoration: none;
        font-size: 16px;
        color: #fff;
        transition: color 0.3s ease;

        &:hover {
            color: #0056b3;
        }
        &:nth-of-type(1) {
            padding-right: 30px;
        }
    }
`;

export const sliderStyle = css`
    .swiper {
        width: 100%;
        max-width: 1200px; /* 슬라이더 최대 너비 */
        margin: 0 auto;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    .swiper-button-prev {
        left: 300px; /* 이미지와 더 가까워지도록 조정 */
    }

    /* 다음 버튼 */
    .swiper-button-next {
        right: 300px; /* 이미지와 더 가까워지도록 조정 */
    }


    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        color: #0056b3;
    }

    .swiper-pagination-bullet {
        background: #ccc;
        width: 10px;
        height: 10px;
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background: #007bff;
    }
`;

export const projectCardStyle = css`
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 800px; /* 카드 최대 너비 */

    p {
        font-size: 16px;
        color: #555;
        margin-top: 10px;
    }
`;

export const projectImageStyle = css`
    width: 100%; /* 이미지의 너비를 부모 요소에 맞춤 */
    width: 750px; /* 최대 크기 제한 */
    height: auto; /* 비율 유지 */
    border-radius: 8px; /* 부드러운 모서리 */
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.2); /* 호버 시 확대 효과 */
    }
`;