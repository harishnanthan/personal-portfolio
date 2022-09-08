import React from 'react'
import { projectSub } from './Project.constant'

const projectHead = projectSub => <p>{projectSub}</p>

function Project() {
    return (
        <div className='project_wrapper'>
            <div className='project_wrapper__header'>
                <h1>Projects</h1>
                {projectHead(projectSub)}
            </div>
            <div className='projects_wrapper'>
                
            </div>
        </div>
    )
}

export default Project