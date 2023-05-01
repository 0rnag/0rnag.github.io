import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
    const linkedinClick = () => { 
        window.open("https://www.linkedin.com/in/ryannagengast", '_blank');
    }

    const clickEmail = async () => {
        try {
            await navigator.clipboard.writeText("ryanenagengast@gmail.com");
            alert("ryanenagengast@gmail.com copied to clipboard!");
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }
    const clickGithub = () => window.open("https://www.github.com/0rnag", '_blank');

    return (
        <div className="footer">
            <div className="socialMedia">
                <EmailIcon onClick={clickEmail}/>
                <LinkedInIcon onClick={linkedinClick}/>
                <GithubIcon onClick={clickGithub}/>
            </div>
            <p> &copy; 2023 0rnag.github.io</p>
        </div>
    );
}

export default Footer;