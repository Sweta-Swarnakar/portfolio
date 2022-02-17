import React from 'react'


const Project = ({id, name,des, url, skills, link }) => {
    console.log(id,name, url);
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            <h3><b>description:</b> {des}</h3>
            { skills && <h3><b>Tech Stacks:</b> {skills}</h3>}
            
            <div id='buttons'>
            <div>{url && <a href={url} target="_blank"><i class="fas fa-external-link-alt fa-lg"></i></a>}</div>
            <div>{link && <a href={link} target="_blank"><i className="fab fa-github fa-lg"></i></a>}</div>
            
             </div>
        </div>
    )
}

export default Project
