import Link from 'next/link'
import { FaGithub, FaLinkedin, FaRegEnvelope, FaHeart } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='p-2 md:flex items-center justify-between md:px-10 w-full bg-slate-900 '>
      <div className='flex text-2xl py-1 md:py-5'>
        <ul className='flex space-x-4 items-center text-cyan-500'>
          <li>
            <Link href='https://github.com/shelleymcq' target='_blank' rel='noopener noreferrer'><FaGithub /></Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/shelleymchardy/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></Link>
          </li>
          <li>
            <Link href='mailto:shelleymcq.dev@gmail.com'><FaRegEnvelope /></Link>
          </li>
        </ul>
      </div>
      <div className='flex pt-2 md:pt-0 text-[10px] md:text-xs text-cyan-500'>
        <p className='flex items-center'>© 2023 Made with <span className='pl-1'><SiNextdotjs /></span>, <span className='pl-1'><SiTailwindcss /></span>, and <span className='px-1'><FaHeart /></span>by Shelley McHardy</p>
      </div>
    </div>
  )
}

export default Footer