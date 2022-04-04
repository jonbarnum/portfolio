import React from "react";

function Skills(){
    return(
        <div className="skillsDiv">
            <h1 className="skillsHeader">Skills</h1>
            <div className="SkillsListDiv">
                <div className="skillsList">
                    <ul className="skills">
                        <li>JavaScript</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="skillsList">
                    <ul className="skills">
                        <li>Express</li>
                        <li>AJAX/HTTP</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>JSON</li>
                        <li>GIT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills