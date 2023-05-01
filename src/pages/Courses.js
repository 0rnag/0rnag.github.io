import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../styles/Courses.css";

function Courses() {
    return (
        <div>
            <div className="head">
                <h1>Courses</h1>
            </div>
            <div className="Courses">
                <div className="intro">
                    <p>
                        In my time at Penn State, I have taken a variety of courses that have helped me develop skills practical to software engineering jobs. I have bolstered my communication skills, technical skills, and problem solving abilities, and I am confident in translating these skills to software engineering jobs. On this page is a list of the courses I have completed and their respective descriptions.
                    </p>
                </div>
                <div className="courseTabs">
                    <Tabs>
                        <TabList>
                            <Tab>
                                <p>CMPSC 132</p>
                            </Tab>
                            <Tab>
                                <p>MATH 220H</p>
                            </Tab>
                            <Tab>
                                <p>MATH 230H</p>
                            </Tab>
                            <Tab>
                                <p>CAS 137T/138H</p>
                            </Tab>
                            <Tab>
                                <p>STAT 414</p>
                            </Tab>
                            <Tab>
                                <p>CMPSC 360</p>
                            </Tab>
                            <Tab>
                                <p>CMPSC 221</p>    
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className="panel-content">
                                <h2>CMPSC 132</h2>
                                <list>
                                    <li>
                                        Introduction to Data Structures and Algorithms

                                    </li>
                                    <li>
                                        Specific data structures include stacks, queues, linked lists, trees, and graphs.
                                    </li>
                                    <li>
                                        Introduces the foundations of object-oriented programming, the design and analysis of efficient algorithms, and programming techniques that support reusable and modular components.

                                    </li>
                                    <li>
                                        Topics include data abstraction, polymorphism, and higher-order functions.
                                    </li>
                                    <li>
                                        Covers the design and analysis of algorithms using these data structures, evaluating their applicability to problems depending on their complexity and efficiency needs.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>MATH 220H</h2>
                                <list>
                                    <li>
                                        Matrices
                                    </li>
                                    <li>
                                        Covers systems of linear equations, matrix algebra, eigenvalues and eigenvectors, linear systems of differential equations, row reduction and echelon forms, linear transformations, inverse matrices, diagonalization, orthogonality, and determinants.
                                    </li>
                                    <li>
                                        The honors section covers topics with a more rigorous, proof-based approach.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>MATH 230H</h2>
                                <list>
                                    <li>
                                        Calculus of Several Variables
                                    </li>
                                    <li>
                                        The course focuses on three-dimensional analytic geometry, vectors in space, partial differentiation, double and triple integrals, and integral vector calculus.
                                    </li>
                                    <li>
                                        Topics include vectors, dot, cross, and wedge products, modeling motion, arc length, curvature, functions of multiple variables, directional derivatives, gradients, Lagrange multipliers, line integrals, Green's Theorem, Stokes' Theorem, and the Divergence Theorem.
                                    </li>
                                    <li>
                                        The honors section covers more sophisticated topics including wedge products, surface curvature, and frenet frames.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>CAS 137H/138T</h2>
                                <list>
                                    <li>
                                        Rhetoric and Civic Life I and II
                                    </li>
                                    <li>
                                        Focuses on comprehensive training in oral, written, visual, and digital communication.
                                    </li>
                                    <li>
                                        Students gain experience in using rhetoric to strengthen their communication and gain awareness of the challenges presented by different methods of delivery.
                                    </li>
                                    <li>
                                        Assignments include speeches, deliberations on pressing community topics, in-depth research papers, and digital advocacy campaigns.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>STAT 414</h2>
                                <list>
                                    <li>
                                        Introductory Probability Theory
                                    </li>
                                    <li>
                                        The course covers calculus-based probability in order to model the uncertainties present in real applications.
                                    </li>
                                    <li>
                                        Topics include probability spaces, discrete and continuous random variables, transformations, expectations, moment generating functions, conditional distributions, law of large numbers, and central limit theorems.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>CMPSC 360</h2>
                                <list>
                                    <li>
                                        Discrete Mathematics for Computer Science

                                    </li>
                                    <li>
                                        Topics include sets, relations, logic, algorithms, graphics, finite state machines, and regular expressions.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>CMPSC 221</h2>
                                <list>
                                    <li>
                                        Object-Oriented Programming with Web-Based Applications
                                    </li>
                                    <li>
                                        Covers advanced object-oriented principles and their application to web-based, net-centric computing.

                                    </li>
                                    <li>
                                        Topics include intermediate code generation, graphical user interface design, event handling, databases, and security, permissions, and file management concepts.
                                    </li>
                                    <li>
                                        Projects-based course that focuses on program design and implementation with proper industry techniques.
                                    </li>
                                </list>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Courses;
