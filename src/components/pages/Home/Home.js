import React, { useEffect, useState } from 'react';
import getContributions from '../../../helpers/getContributions';
import ContributionsCalendar from "../../ContributionsCalendar";

export default function Home() {

    const [contributions, setContributions] = useState([])

    useEffect(() => {
        let githubData;
        (async function () {
            githubData = await getContributions(process.env.REACT_APP_GITHUB_TOKEN, process.env.REACT_APP_GITHUB_USERNAME);
            setContributions(githubData.data.user.contributionsCollection.contributionCalendar.weeks);
        })();
    },[])

    return (
        <div  className="home grid-left">
            <div className="main">
                <h1 className="title">YULIA TUZOV</h1>
                <hr />
                <div>Software Engineer in San Francisco Bay Area</div>
                <hr />
                <div>Thank you for landing on my page.
                    I am a software engineer with demonstrated competence in React, Redux as well as SQL and noSQL databases.
                    I contributed an open source package to NPM that consists of an easy to use css-animated butterfly bar chart react
                    component which is installable via the NPM cli. Detailed documentation instructs developers how to pass data and
                    color information to the component to utilize it in their apps - npm butterfly chart.
                </div>
                <div className="card--style">
                    <div>Githuh Calendar placeholder</div>
                    {/*<ContributionsCalendar contributions={contributions} />*/}
                </div>
            </div>
        </div>
    );
}
