import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";

function SkillsSection() {
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
      id="skills"
      css={s.sectionStyle}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }} // 애니메이션 상태에 따라 변화
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        css={s.skillCategory}
      >
        <h3>Front End</h3>
        <p>React, JavaScript, HTML, CSS</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        css={s.skillCategory}
      >
        <h3>Back End</h3>
        <p>Java, SpringFramework</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        css={s.skillCategory}
      >
        <h3>Database</h3>
        <p>MySQL</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        css={s.skillCategory}
      >
        <h3>Tools</h3>
        <p>VSCode, IntelliJ IDEA</p>
      </motion.div>
    </motion.div>
  );
}

export default SkillsSection;