import React from 'react';
import { Link } from 'react-scroll';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Sidebar(props) {
    return (
        <div css={s.sidebarStyle}>
            <ul css={s.linkContainerStyle}>
                <li css={s.linkStyle}>
                    <Link to="hero" smooth={true} duration={500}>
                        About Me
                    </Link>
                </li>
                <li css={s.linkStyle}>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li css={s.linkStyle}>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;