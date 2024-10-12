import React from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeding";

import ScrollService from "../../utilities/ScrollService";
import './AboutMe.css'


function AboutMe(props) {


    const SCREEN_CONSTANTS = {
        description: "Full stack web developer with background knowledge of stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional  to be an asset for an organization",
        highlights: {
            bullets: [
                "Full Stack web development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Redux for State Management",
                "TypeScript",
                "Building REST API",
                "Spring MVC",
                "Spring Security",
                "Thymeleaf",
                "JPA",
                "Hibernate",
                "Spring Boot 3",
                "Managing database",
            ],
            heading: "Here are a Few Highlights:",
        }
    };

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };
    return (
        <div
            className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button
                                className="btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >Hire Me
                            </button>
                            <a href="/#" download='Chak resum.pdf'>
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;