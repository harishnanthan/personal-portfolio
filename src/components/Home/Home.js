import React from 'react'
import { headingText, subHeadingText, introsubText } from './Home.constants'
//import svg
import { ReactComponent as LinkedIn } from '../../svg/linkedin.svg'
import { ReactComponent as Twitter } from '../../svg/twitter.svg'
import { ReactComponent as Github } from '../../svg/github.svg'

const Heading = headingText => <h1>{headingText}</h1>

const Intro = subHeadingText => <p>{subHeadingText}</p>

const SubIntro = introsubText => <p>{introsubText}</p>

const HomeContent = () => (
  <>
    <div className='home_wrapper__header'>
      {Heading(headingText)}
    </div>
    <div className='home_wrapper__introtext'>
      <div>
        {Intro(subHeadingText)}
      </div>
      <div>
        {SubIntro(introsubText)}
      </div>
    </div>
  </>
)

const ContactLinks = () => (
  <>
    <div className='home_wrapper_contact'>
      <div className='home_wrapper_contact__links'>
        <a href="https://www.linkedin.com/in/harishnanthan" rel="noreferrer" target="_blank">
          <LinkedIn />
        </a>
        <a href="https://github.com/harishnanthan" rel="noreferrer" target="_blank">
          <Github />
        </a>
        <a href="https://twitter.com/HarrishNanthan" rel="noreferrer" target="_blank">
          <Twitter />
        </a>
      </div>
      <div className='home_wrapper_contact__email'>
        <a href='mailto:@h.chetta17@gmail.com'> E-mail Me</a>
      </div>
    </div>
  </>
)


function Home() {
  return (
    <div className='home_wrapper'>
      <div className='home_wrapper__conatainer'>
        {HomeContent()}
        {ContactLinks()}
      </div>
    </div >
  )
}

export default Home