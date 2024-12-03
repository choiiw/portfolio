import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import projectData from "../../data/project";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectsSection(props) {
    // 슬라이더 설정
    const settings = {
        dots: true, // 하단 네비게이션 점 표시
        infinite: false, // 무한 반복
        slidesToShow: 1, // 한 번에 보여줄 이미지 수
        slidesToScroll: 1, // 한 번에 넘어갈 이미지 수
        arrows: true // 좌우 화살표 표시
    };

    return (
        <div id='projects' css={s.sectionStyle}>
            <h2>Projects</h2>
            <p>Here are some of my projects!</p>
            <div>
                <h1>카페 관리자 페이지</h1>
                <p>✓ 메뉴, 카테고리, 옵션 등등 유동성 있게 관리할 수 있는 페이지</p>
                <p>
                    <a href="https://github.com/AnotherStarbucksOrder" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.notion.so/10a3aa96ee0d80269b5ac2f89ac83ee7?pvs=4" target="_blank" rel="noopener noreferrer">
                        Notion
                    </a>
                </p>
                <Slider {...settings} css={s.sliderStyle}>
                    {projectData.map((project, index) => (
                        <div key={index} css={s.projectCardStyle}>
                            <img
                                src={project.img}
                                alt={project.name}
                                css={s.projectImageStyle}
                            />
                            <p>{project.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ProjectsSection;