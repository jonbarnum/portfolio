import React from "react";

function Projects(){
    return(
        <div>
            <div>
                <h1 className="projectsHeader">Projects</h1>
                <div className="projectDiv">
                    <div className="projectNameAndLinkDiv">
                        <h2 className="projects">Project: Level 5 Capstone, Full Stack Application</h2>
                        <button>
                            {<a 
                                href="https://github.com/jonbarnum/level_5/tree/main/level_five_capstone" 
                                rel="noreferrer" 
                                target='_blank'
                                className="levelProjects"
                            >
                                GitHub Code
                            </a>}
                        </button>
                    </div>
                    <p className="projectInfo">
                        The assignment for this project was to build a full-stack application by creating the front end and back end. The application needed to be interactive, have at least 3 page views, use the CRUD method, and use any technology we have learned up to this point. I created an application for music lovers, where they could search for their favorite bands or singers using Last.FM API, save those bands or singers to the back end and have it displayed on a page view.
                    </p>
                    <div className="imagesDiv">
                        <img 
                            src='images/project_5.png' 
                            alt="project 5"
                            className="images"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="projectDiv">
                    <div className="projectNameAndLinkDiv">
                        <h2 className="projects">Project: Level 4 Capstone, API Call Application</h2>
                        <button>
                            {<a 
                                href="https://github.com/jonbarnum/level_4/tree/main/capstone_level_four" 
                                rel="noreferrer" 
                                target='_blank'
                                className="levelProjects"
                            >
                                GitHub Code
                            </a>}
                        </button>
                        <button>
                            {<a 
                                href="https://gregarious-fox-5b010b.netlify.app/" 
                                rel="noreferrer" 
                                target='_blank'
                                className="levelProjects"
                            >
                                Live Page
                            </a>}
                        </button>
                    </div>
                    <p className="projectInfo">
                        For the Level Four Capstone, I used a get request from NASA API. I created three different page views with different content on each one. A user can find out information about upcoming launches, space stations, and astronauts. 
                    </p>
                    <div className="imagesDiv">
                        <img 
                            src='images/project_4.png' 
                            alt="project 4"
                            className="images"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="projectNameAndLinkDiv">
                        <h2 className="projects">Project: Level 2 Dj CSS, CSS styling Application</h2>
                        <button>
                            {<a 
                                href="https://github.com/jonbarnum/level_2/tree/main/dj_css" 
                                rel="noreferrer" 
                                target='_blank'
                                className="levelProjects"
                            >
                                GitHub Code
                            </a>}
                        </button>
                        <button>
                            {<a 
                                href="https://jonbarnum.github.io/level_2/dj_css/" 
                                rel="noreferrer" 
                                target='_blank'
                                className="levelProjects"
                            >
                                Live Page
                            </a>}
                        </button>
                    </div>
                    <p className="projectInfo">
                        This application was a level 2 project where I worked on different CSS styling. Each box does something different when a user hovers over the blocks. 
                    </p>
                    <div className="imagesDiv">
                        <img 
                            src='images/css_style.png' 
                            alt="css project"
                            className="images"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects