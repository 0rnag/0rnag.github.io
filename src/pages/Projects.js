import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import {ReactComponent as ReactIcon} from '../images/react-icon.svg';
import {ReactComponent as PythonIcon} from '../images/python-icon.svg';
import {ReactComponent as JavaIcon} from '../images/java-icon.svg';
import "../styles/Projects.css";

function Projects() {
    return (
        <div className='Projects'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    iconStyle={{background: '#3e497a', color: '#fff'}}
                    icon={<PythonIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Poker Hand Equity Calculator
                    </h3>   
                    <p className="languages">
                        Python
                    </p>
                    <p>
                        A python application that created a user interface to take in ranges of poker hands. The app then uses a sophisticated, optimized algorithm to calculate hand equity (what percent of the time you can expect to win) over several million combinations of possible hands with perfect accuracy.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    iconStyle={{background: '#3e497a', color: '#fff'}}
                    icon={<JavaIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Discode
                    </h3>   
                    <p className="languages">
                        Java
                    </p>
                    <p>
                        A discord bot developed using the Java-Discord-API that aggregates competitive programming resources from the popular competitive programming website codeforces.com. The bot called the Codeforces API to efficiently fetch problem tags, profile info, and contest schedules. I dramatically improved efficiency by periodically refreshing user data, decreasing response time by several seconds.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    iconStyle={{background: '#3e497a', color: '#fff'}}
                    icon={<JavaIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Graphing Calculator
                    </h3>   
                    <p className="languages">
                        Java
                    </p>
                    <p>
                        A Java GUI built using Java Swing that displays the curve of an equation on a 2D plane. The GUI takes in parameters from the user, such as window size, equation, and axis step, to produce a usable graph. Critical values and important relevant information for the equation are also calculated and displayed automatically. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    iconStyle={{background: '#3e497a', color: '#fff'}}
                    icon={<ReactIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        React Resume
                    </h3>   
                    <p className="languages">
                        React, JavaScript, HTML, CSS
                    </p>
                    <p>
                        An online personal website built to contain my portfolio of achievements. Entirely built using the principles of ReactJS. 
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Projects