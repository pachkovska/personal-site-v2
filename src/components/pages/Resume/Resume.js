import React  from 'react';
import htmlIcon from '../../../images/html.svg';
import reactIcon from '../../../images/react-original.svg';
import reduxIcon from '../../../images/redux-original.svg';
import cssIcon from '../../../images/css3-original.svg';
import nodeIcon from '../../../images/nodejs-original.svg';
import jsIcon from '../../../images/javascript-plain.svg';
import mochaIcon from '../../../images/mocha-plain.svg';
import chaiIcon from '../../../images/chai.svg';
import mongoIcon from '../../../images/mongodb-plain.svg';
import mysqlIcon from '../../../images/mysql-original.svg';
import postgreIcon from '../../../images/postgresql-original.svg';
import postmanIcon from '../../../images/postman.svg';
import bootstrapIcon from '../../../images/bootstrap-plain.svg';
import pythonIcon from '../../../images/python-original.svg';


export default function Resume() {

    const stack = [
        {tech: 'HTML', icon: htmlIcon},
        {tech: 'React', icon: reactIcon},
        {tech: 'Redux', icon: reduxIcon},
        {tech: 'CSS', icon: cssIcon},
        {tech: 'Node.js', icon: nodeIcon},
        {tech: 'JavaScript', icon: jsIcon},
        {tech: 'Mocha', icon: mochaIcon},
        {tech: 'Chai', icon: chaiIcon},
        {tech: 'mongoDB', icon: mongoIcon},
        {tech: 'MySQL', icon: mysqlIcon},
        {tech: 'PostgreSQL', icon: postgreIcon},
        {tech: 'Postman', icon: postmanIcon},
        {tech: 'Bootstrap', icon: bootstrapIcon},
        {tech: 'Python', icon: pythonIcon}
    ]

    return (
        <div className="resume-page grid-left">
            <div className="resume-container">

                <div className="resume-stack">
                    <h5 className="mb-4">TECH STACK:</h5>
                    <div className="resume-stack-list">
                        {stack.map( el =>
                            <div className="resume-stack-list--item" key={el.tech}>
                                <img className="resume-icon" src={el.icon} alt={el.tech} />
                                <div>{el.tech}</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="resume-main">
                    <div className="resume-info">
                        San Mateo, CA, 94401 ♦ Cell Phone: (530) 563­8179 ♦ E­mail: ytuzov@berkeley.edu
                    </div>
                    <h3>YULIA TUZOV</h3>
                    <h2 className="mt-4">Work Experience</h2>
                    <div>
                        <div className="resume-company">
                            LocalCoding - Software Engineer
                        </div>
                        <div className="resume-company--dates">
                            2020 - Present
                        </div>
                        <div className="resume-company--experience">
                            Develop complete funcitonality using MERN stack for users to solve coding challeneges within the platform, which included
                            building front-end, back-end as well as code validating microservice.
                            Front-end utilizes UmiJS react based enterprise-level framework combined with redux saga for state management.
                            Microservice is an Express.js based REST API server that utilizes dockerode (Node.js wrapper library for Docker Engine API)
                            for container creation upon request. Such architecture allowed to decrease student's code validation time thanks to every
                            challenge solution being tested in its own docker container.
                            Implementation of this microservice further allowed the company to develop additional features allowing students
                            to create challenges themselves, which resulted in an increased user engagement.
                        </div>
                        <div className="resume-company">
                            Skupos - Software Engineer (QA)
                        </div>
                        <div className="resume-company--dates">
                            2019 - 2020
                        </div>
                        <div className="resume-company--experience">
                            Developed end-to-end testing framework from scratch that included over 3000 tests utilizing WebdriverI/O framework,
                            Mocha test runner, Chai assertion library, and Allure reporting.
                            Developed REST API testing framework, that utilized Newman to run Postman collections with API tests.
                            Developed SQL scripts for Customer Service team to allow monitoring of c-store transaction anomalies, which decreased
                            lag in issue escalation and improved customer experience. Developed and executed test plans and test cases aimed at
                            assessing the quality of multilple Skupos products.
                        </div>
                        <div className="resume-company">
                            Numerator (formerly known as InfoScout) - Data QA Analyst
                        </div>
                        <div className="resume-company--dates">
                            2017 - 2019
                        </div>
                        <div className="resume-company--experience">
                            Built dashboards using SQL that allowed to monitor quality assurance metrics of receipt transcription
                            pipeline. Investigated root cause of issues, corrected and prevented data issues.
                            Scraped websites using BeautifulSoup library for data quality project.
                            Led and presented montlhy State of the Union on health and issues of receipt transcription
                            pipeline and machine learning models.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

