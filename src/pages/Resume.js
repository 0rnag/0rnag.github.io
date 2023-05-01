import React from 'react';

import "../styles/Resume.css"


function Resume() {

    const download = () => {
        const fileUrl = '/Resume.pdf';

        const link = document.createElement('a');
        link.href= fileUrl;
        link.setAttribute('download', '');
        link.click();
    };

   return (
        <div>
            <div className="title">
                <h1 onClick={download}>Résumé</h1>
            </div>
            <div className='Resume'>
                <img onClick={download} src={require("../images/Resume-1.png")} alt="Resume" width="100%" height="100%"/> 
            </div>
        </div>
   );
}

export default Resume;