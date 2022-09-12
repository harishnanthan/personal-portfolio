import React from 'react'
import { projects, projectSub } from './Project.constant'
import ProjectCard from './ProjectCard'

const projectHead = projectSub => <p>{projectSub}</p>

function Project() {
    return (
        <div className='project_wrapper'>
            <div className='project_wrapper__container'>
                <div className='project_wrapper__header'>
                    <h1>Projects</h1>
                    <p className='project_wrapper__header___subhead'>
                        {projectHead(projectSub)}
                    </p>
                </div>
                <div className='projects_wrapper'>
                    {
                        projects.map((project, key) => (
                            <ProjectCard key={key} {...project} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project