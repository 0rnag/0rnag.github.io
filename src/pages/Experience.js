import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css";

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a' >
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education'
                    date='2018 - 2022'
                    iconStyle={{background: '#3e497a', color: '#fff'}}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Garnet Valley High School
                    </h3>
                    <p className="location">
                        Glen Mills, PA
                    </p>
                    <p>
                        I graduated high school in 2022 with a 4.00/4.35 GPA. I was involved in the coding club, the math club, and the Hi-Q team. I was awarded a high school diploma for my efforts.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education'
                    date='Nov. 2020 - Dec. 2021'
                    iconStyle={{background: '#DE340F', color: '#fff'}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Mathnasium | Lead Instructor
                    </h3>
                    <p className="location">
                        Glen Mills, PA
                    </p>
                    <p>
                        I worked as a math tutor working with kids of all skill levels in K-12. I was responsible for teaching the students, tracking student progress through assessments, developing personalized learning plans, and training new instructors. I completed advanced levels of Mathnasium's instructor training program.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'  
                    date='Aug. 2022' 
                    iconStyle={{background: '#3e497a', color: '#fff'}}
                    icon={<SchoolIcon />}
                >   
                    <h3 className="vertical-timeline-element-title">
                        The Pennsylvania State University
                    </h3>
                    <p className="location">
                        University Park, PA
                    </p>
                    <p>
                        I enrolled at Penn State studying computer science and mathematics in the Schreyer Honors College. I am involved with the Schreyer Student Council, HackPSU, PSUQuants, and the Web Development Club.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education'
                    date='Summer 2023'
                    iconStyle={{background: '#DE340F', color: '#fff'}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        GeoBlue | IT Development Intern
                    </h3>
                    <p className="location">
                        King of Prussia, PA
                    </p>
                    <p>
                        I am an incoming IT development intern at GeoBlue, a health insurance company. In my role, I will be working on creating an internal dashboard aggregating company data and applying statistical methods to analyze the data. I will also be working on a project to transform the current mobile website into a progressive web app.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience