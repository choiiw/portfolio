import React, { useState, useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import projectData from "../../data/project";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

function ProjectsSection(props) {
    const [inView, setInView] = useState(false); // 애니메이션 상태
    const sectionRef = useRef(null);

    // Intersection Observer
    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.3 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    // 슬라이더 설정
    const settings = {
        dots: true, // 하단 네비게이션 점 표시
        infinite: false, // 무한 반복
        slidesToShow: 1, // 한 번에 보여줄 이미지 수
        slidesToScroll: 1, // 한 번에 넘어갈 이미지 수
        arrows: true // 좌우 화살표 표시
    };

    return (
        <motion.div
            ref={sectionRef}
            id='projects'
            css={s.sectionStyle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Projects
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Here are some of my projects!
            </motion.p>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
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
                        <motion.div
                            key={index}
                            css={s.projectCardStyle}
                            initial={{ y: 50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                        >
                            <img
                                src={project.img}
                                alt={project.name}
                                css={s.projectImageStyle}
                            />
                            <p>{project.description}</p>
                        </motion.div>
                    ))}
                </Slider>
            </motion.div>
        </motion.div>
    );
}

export default ProjectsSection;