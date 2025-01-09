import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper 컴포넌트 불러오기
import { Navigation } from "swiper/modules"; // Navigation 모듈을 올바르게 가져오기
import "swiper/css"; // Swiper CSS
import "swiper/css/navigation"; // Navigation CSS
import { motion } from "framer-motion";
import projectData from "../../data/project";

function ProjectsSection(props) {
    const [inView, setInView] = useState(false);
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
            { threshold: 0 }
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

    return (
        <motion.div
            ref={sectionRef}
            id="projects"
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
                    <a href="https://same-catshark-9c4.notion.site/10a3aa96ee0d80269b5ac2f89ac83ee7" target="_blank" rel="noopener noreferrer">
                        Notion
                    </a>
                </p>
                <Swiper
                    css={s.sliderStyle}
                    modules={[Navigation]} // Navigation 모듈 활성화
                    navigation // 네비게이션 버튼 활성화
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {projectData.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.div>
    );
}

export default ProjectsSection;