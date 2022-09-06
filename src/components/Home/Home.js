import React from 'react'
import { headingText, subHeadingText, introsubText } from './Home.constants'

const Heading = headingText => <h1>{headingText}</h1>

const Intro = subHeadingText => <p>{subHeadingText}</p>

const SubIntro = introsubText => <p>{introsubText}</p>

const HomeContent = () => (
  <>
    <div className='home_wrapper__header'>
      {Heading(headingText)}
    </div>
    <div className='home_wrapper__introtext'>
      {Intro(subHeadingText)}
      {SubIntro(introsubText)}
    </div>
  </>
)

const ContactLinks = () => (
  <>
    <div className='home_wrapper_contact'>
      <div className='home_wrapper_contact__links'></div>
      <div className='home_wrapper_contact__email'></div>
    </div>
  </>
)


function Home() {
  return (
    <div className='home_wrapper'>
      {HomeContent()}
      {ContactLinks()}
    </div >
  )
}

export default Home