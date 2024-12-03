import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function HeroSection(props) {
    return (
        <div id='hero' css={s.heroStyle}>
            <h1>안녕하세요! 신입개발자 최성원입니다!</h1>
            <p>
                안녕하세요! 저는 개발이 즐거운 신입 개발자 최성원입니다.
                새로운 기술들을 배우는것을 즐기며,
                피드백과 커뮤니케이션을 통해 실력있는 개발자가 되고싶습니다.
            </p>
            <p>현재 신입 프론트엔드 개발자로 구직중 입니다!</p>
            <p>Frontend Developer</p>
            <div css={s.contactInfo}>
                <p>Email: choi08928@gmail.com</p>
                <p>Phone: +82 10-5018-3710</p>
                <div css={s.linkStyle}>
                    <p>
                        <a href="https://github.com/choiiw" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://velog.io/@choiiw12" target="_blank" rel="noopener noreferrer">
                            Velog
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;