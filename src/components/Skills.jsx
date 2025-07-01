import SkillProgressBar from './skillProgressbar';
import Carousel from 'react-multi-carousel';
import '../assets/carousel.css';
import React from 'react';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1250, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 830, min: 0 },
        items: 1,
    },
};


const Skill = () => {
    return (
        <section id="skills">
            <div className="skill-section">
                <div className="skills-container">
                    <h2 className='Section-title'>Skills</h2>
                    <h5>You Can See My Skills Here</h5>
                    <Carousel className="custom-carousel" responsive={responsive} infinite={true}>
                        <SkillProgressBar percentage={95} label={"HTML5"} />
                        <SkillProgressBar percentage={92} label={"CSS3"} />
                        <SkillProgressBar percentage={90} label={"JavaScript (ES6+)"} />
                        <SkillProgressBar percentage={88} label={"React.js"} />
                        <SkillProgressBar percentage={85} label={"Bootstrap"} />
                        <SkillProgressBar percentage={85} label={"Responsive Design"} />
                        <SkillProgressBar percentage={80} label={"Tailwind CSS"} />
                        <SkillProgressBar percentage={75} label={"Git & GitHub"} />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Skill);
