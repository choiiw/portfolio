import React, { useState, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { motion } from "framer-motion";
import skillsData from "../../data/skillsData"; // 데이터 가져오기

function SkillsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.05 }
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
      id="skills"
      css={s.sectionStyle}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* 타이틀 애니메이션 */}
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        css={s.titleStyle}
      >
        {["S", "k", "i", "l", "l", "s"].map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* 스킬 카테고리 */}
      <div css={s.gridStyle}>
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
            css={s.skillCategory}
          >
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx} css={s.skillItem}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillsSection;