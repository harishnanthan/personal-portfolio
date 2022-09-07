import React from 'react'
import { work, skills } from './About.constant';

const Work = work => (
    <>
        {work.map((work, index) => (
            <tr key={index} className='work'>
                <td>{work.companyName}</td>
                <td className='work_second right'>{work.position}</td>
                <td className='work_second'>{`${work.from} - ${work.to}`}</td>
            </tr>
        ))}
    </>
)

const Skills = (skills) => (
    <>
        {skills.map((skill, index) => (
            <li key={index} className='skill'>{skill}</li>
        ))}
    </>
)

function About() {
    return (
        <div className='about_wrapper'>
            <div className='work_wrapper'>
                <h2>Work</h2>
                <table className='work_wrapper_works'>
                    {Work(work)}
                </table>
            </div>
            <div className='skill_wrapper'>
                <h2>Skills</h2>
                <p className='someText'>I have these skills</p>
                <div className='skill_wrapper_skills'>
                    <ul>
                        {Skills(skills)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About