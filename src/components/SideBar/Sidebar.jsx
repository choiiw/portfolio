import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Sidebar() {
    const [activeSection, setActiveSection] = useState(""); // 활성화된 섹션 저장

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // 보이는 섹션 ID 저장
                    }
                });
            },
            { threshold: 0.5 } // 섹션의 50%가 화면에 보일 때 감지
        );

        // 각 섹션 요소를 가져와 Observer로 감시
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // 컴포넌트 언마운트 시 observer 해제
    }, []);

    return (
        <div css={s.sidebarStyle}>
            <p css={s.logoTextStyle}>
                <Link to="hero" smooth={true} duration={500}>
                    MyPortfolio
                </Link>
            </p>
            <div>
                <ul css={s.linkContainerStyle}>
                    <li
                        css={[
                            s.linkStyle,
                            activeSection === "hero" && s.activeLinkStyle,
                        ]}
                    >
                        <Link to="hero" smooth={true} duration={500}>
                            About Me
                        </Link>
                    </li>
                    <li
                        css={[
                            s.linkStyle,
                            activeSection === "skills" && s.activeLinkStyle,
                        ]}
                    >
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li
                        css={[
                            s.linkStyle,
                            activeSection === "projects" && s.activeLinkStyle,
                        ]}
                    >
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;