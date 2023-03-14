import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <nav className='w-full bg-slate-900 fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between p-5 mx-auto md:items-center md:flex'>
          <div>
            <div className='flex items center justify-between md:block'>
              <Link href='/'>
                <div className='font-mono text-xl text-cyan-500 hover:bg-slate-800 rounded-sm px-2'>shelleymcq</div>
              </Link>
              <div className='md:hidden cursor-pointer text-slate-200' onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <AiOutlineClose />
                ) : (
                  <AiOutlineMenu />
                )}
              </div>
            </div>
          </div>

          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className='h-screen items-center justify-center text-slate-200 md:h-auto md:flex'>
                <li className='px-2 hover:bg-slate-800 rounded-sm'>
                  <Link href='#homepage' onClick={() => setNavbar(!navbar)}>Home</Link>
                </li>
                <li className='px-2 hover:bg-slate-800 rounded-sm'>
                  <Link href='#projects' onClick={() => setNavbar(!navbar)}>Projects</Link>
                </li>
                <li className='px-2 hover:bg-slate-800 rounded-sm'>
                  <Link href='#about' onClick={() => setNavbar(!navbar)}>About</Link>
                </li>
                <li className='px-2 hover:bg-slate-800 rounded-sm'>
                  <Link href='#pretty' onClick={() => setNavbar(!navbar)}>Pretty</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar