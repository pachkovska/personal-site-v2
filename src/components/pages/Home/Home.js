import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
    return (
        <div>
            <h1 className="center">YULIA TUZOV</h1>
            <hr />
            <div className="center">Software Engineer in San Francisco Bay Area</div>
            <div className="center">
                <GitHubCalendar username="pachkovska"/>
            </div>
            <div className="center">Thank you for landing on my page. I am a software engineer with demonstrated competence in React adn high proficiency in SQL. Contributed an open source package to NPM that consists of an easy to use css-animated butterfly bar chart react
            component which is installable via the NPM cli. Detailed documentation instructs users how to pass data and
            color information to the component to utilize it in their apps - npm butterfly chart</div>
        </div>
    );
}
