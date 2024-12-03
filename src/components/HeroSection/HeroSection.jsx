import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import { FaGithub, FaBlogger } from 'react-icons/fa';

function HeroSection() {
    const [inView, setInView] = useState(false); // 애니메이션 상태
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current; // 로컬 변수에 ref 저장

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false); // 다시 나가면 상태를 false로 설정
                }
            },
            { threshold: 0.3 } // 30% 이상 화면에 들어오면 실행
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection); // 로컬 변수 사용
            }
        };
    }, []);

    return (
        <motion.div
            ref={sectionRef}
            id="hero"
            css={s.heroStyle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                안녕하세요! 신입개발자 최성원입니다!
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                안녕하세요! 저는 개발이 즐거운 신입 개발자 최성원입니다. 새로운 기술들을 배우는 것을
                즐기며, 피드백과 커뮤니케이션을 통해 실력 있는 개발자가 되고 싶습니다.
            </motion.p>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
            >
                현재 신입 프론트엔드 개발자로 구직 중입니다!
            </motion.p>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                Frontend Developer
            </motion.p>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
            >
                <p>Email: choi08928@gmail.com</p>
                <p>Phone: +82 10-5018-3710</p>
                <div>
                    <p>

                        <a href="https://github.com/choiiw" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://velog.io/@choiiw12" target="_blank" rel="noopener noreferrer">
                            <FaBlogger size={32} />
                        </a>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default HeroSection;