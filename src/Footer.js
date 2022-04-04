import React from "react";

function Footer(){
    return(
        <div>
            <div className="footerLinkDiv">
                <a 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/jonathan-barnum/" 
                    target='_blank'
                    className="profileLink"
                >
                    LinkedIn
                </a>
                <a 
                    rel="noreferrer" 
                    href="https://github.com/jonbarnum" 
                    target='_blank'
                    className="profileLink"
                >
                    GitHub
                </a>
                <a
                    href="mailto:jonbarnum07@gmail.com"
                    className="profileLink"
                >
                    Email
                </a>
            </div>
        </div>
    )
}

export default Footer