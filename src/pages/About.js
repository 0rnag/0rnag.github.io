import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import portrait from '../images/portrait.jpeg'

import "../styles/About.css";


function Home() {
    const ref = React.useRef(null);
    const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'})
    const clickEmail = async () => {
        try {
            await navigator.clipboard.writeText("ryanenagengast@gmail.com");
            alert("ryanenagengast@gmail.com copied to clipboard!");
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }
    const clickLinkedin = () => window.open("https://www.linkedin.com/in/ryannagengast", '_blank');
    const clickGithub = () => window.open("https://www.github.com/0rnag", '_blank');

    return (
        <div className="home">
            <div className="about">
                <h2>
                    Hi, My Name is Ryan Nagengast.
                </h2>
                <div className="prompt">
                    <p>
                        I am an undergraduate computer science major at Penn State University.
                    </p>

                    <EmailIcon className="click-icon" onClick={clickEmail}/>
                    <LinkedInIcon className="click-icon" onClick={clickLinkedin}/>
                    <GithubIcon className="click-icon" onClick={clickGithub}/>
                </div>
                <KeyboardArrowDownIcon className="scroll" onClick={doClick} />
                
            </div>
            <div ref={ref} className="skills">
                <h1>About Me</h1>
                <div className="text">
                    <p>
                        My name is Ryan Nagengast, and I am a computer science and mathematics student at Penn State University, where I am a scholar in the Schreyer Honors College. On campus, I am involved with the Schreyer Student Council, HackPSU, PSUQuants, and the Web Development Club. In my free time, I enjoy playing poker, solving the daily New York Times Sudokus, analyzing college football, and finishing the most recent season of Succession. After finishing my degree, I am interested in pursuing a career in software engineering to build a better future for the world. I am currently looking for a software engineering internship for Summer 2023.
                    </p>
                    <img className="portrait" src={portrait} alt="img"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;