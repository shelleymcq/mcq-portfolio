import Link from 'next/link'

const About = () => {
  return (
    <div>        
      <div  className='bg-rose-900 flex pt-10'>
        <h1 className='pl-2 md:pl-5 pb-5 m-auto text-slate-300 text-3xl'>More Stuff About Me</h1>
        <div className='shadow-2xl rounded-xl m-2 p-3 md:m-4 me:p-5 lg:m-10 lg:p-10'>
          <p className="px-6 py-2 text-slate-300 text-sm md:text-base lg:text-lg">While I have left the high school chemistry classroom behind, I will always be a teacher. That part of me has influenced my wish to collaborate on a team of like-minded folks committed to creating applications and experiences for learners and information seekers who want to make the world, and web, a more beautiful and accessible place.</p>
          <p className="px-6 py-2 text-slate-300 text-sm md:text-base lg:text-lg">That drive also led me to two amazing communities from whom I have learned so much and to which I am happy to volunteer:</p>
          <div className='md:flex justify-between p-6'>
            <p className="md:w-1/2 px-6 py-2 text-slate-300 text-xs md:text-sm lg:text-base">I'm proud to serve as a board member of <span className='text-rose-400'><Link href='https://the-collab-lab.codes/' target='_blank' rel='noopener noreferrer'>The Collab Lab</Link></span> and to coordinate The Career Lab, a two-week session offered to participants once they complete the eight-week project.</p>
            <p className="md:w-1/2 px-6 py-2 text-slate-300 text-xs md:text-sm lg:text-base">I love to assist in the coordination of Friday Lunch & Learns for <span className='text-rose-400'><Link href='https://virtualcoffee.io/' target='_blank' rel='noopener noreferrer'>Virtual Coffee</Link></span>, an online community of and for developers.</p>
          </div>
          <p className="px-6 py-2 text-slate-300 text-sm md:text-base lg:text-lg">When I'm not coding, you'll find me crocheting, walking my dog, or visiting one of Georgia's phenomenal state or local parks.</p>
        </div>

      </div>
  </div>
  )
}

export default About