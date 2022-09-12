import React from 'react'

function ProjectCard(props) {
    const { src, title, description, teckStack, link } = props
    return (
        <div className='projectCard_wrapper'>
            <img src='http://unsplash.it/880/500?gravity=center' alt='' />
            <div className='projectCard_wrapper__details'>
                <h2 className='projectCard_wrapper__title'>{title}</h2>
                <p className='projectCard_wrapper__desc'>{description}</p>
                <p>{teckStack}</p>
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}

export default ProjectCard