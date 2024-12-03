import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SkillsSection(props) {
    return (
        <div id='skills' css={s.sectionStyle}>
            <h2>Skills</h2>
            <div css={s.skillStyle}>
                <h3>✓ FRONT END</h3>
                <p>React, JavaScript, CSS, HTML</p>
            </div>
            <p>HTML5, CSS, JS, REACT를 사용하여 화면 구현이 가능합니다.</p>
            <div css={s.skillStyle}>
                <h3>✓ BACK END</h3>
                <p>Java, SpringFramework</p>
            </div>
            <p>JAVA, SpringFramework 를 사용하여 MVC 패턴의 웹을 개발할 수 있습니다.</p>
            <div css={s.skillStyle}>
                <h3>✓ DATABASE</h3>
                <p>MYSQL</p>
            </div>
            <p>SQL 문 사용을 활용할 수 있습니다.</p>
            <div css={s.skillStyle}>
                <h3>✓ TOOL</h3>
                <p>VScode, IntelliJ IDEA</p>
            </div>
        </div>
    );
}

export default SkillsSection;