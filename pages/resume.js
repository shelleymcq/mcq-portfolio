import Image from 'next/image'
import coder from '../public/assets/coder.jpg'

const Resume = () => {
  return (
    <div className='bg-cyan-900 min-h-screen flex flex-col'>
        <h2 className='pt-20 mx-auto text-slate-300 text-3xl'>Experience</h2>
        <div className='flex flex-col shadow-2xl rounded-xl m-2 p-3 md:m-4 lg:m-10 lg:p-10'>
          <p className="px-6 text-slate-300 text-sm md:text-base lg:text-lg">Most recently an Associate Software Developer at Rightpoint, I worked with React, TypeScript, and Node.js in a huge codebase. I wrote scripts to automate tasks and save developers’ time, and have written code to customize list virtualization when no existing JavaScript library would work out-of-the-box. And I just became BigCommerce certified.</p>
          <div className='pt-3 place-self-center'>
            <Image src={coder} alt='artwork of redhead half hidden behind laptop' />
          </div>
          <p className="px-6 py-2 text-slate-300 text-sm md:text-base lg:text-lg">Throughout my teaching career, I have honed my communication and problem-solving skills, as well as my ability to work in a team. These skills translate extremely well to software development teams, where collaboration and effective communication are essential. I have experience collaborating with remote teams around the world and am comfortable with tools such as JIRA. Additionally, I have experience with Agile methodologies, pair programming, reviewing pull requests, and providing constructive feedback to team members. Then there's tackling bug tickets. I love getting my Nancy Drew on to hunt down a glitch.</p>
          <h3 className='my-2 p-3 pt-2 place-self-center bg-cyan-600 border rounded-md text-xl text-slate-200'><a href='/assets/McHardy-Resume.pdf' target='_blank' rel='noreferrer'>Open Resume</a></h3>
          <div>
            <h4 className='text-cyan-500 text-sm font-medium pt-5'>Tech used</h4>
            <p className='text-slate-300 text-sm'>HTML | CSS | JavaScript | React | TypeScript | NextJS | Redux | NodeJS | MySQL | MongoDB | TailwindCSS | Cypress | Optimizely</p>
          </div>
        </div>
    </div>
  )
}

export default Resume