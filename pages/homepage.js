import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import atom from "../public/assets/atom.png";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-900 z-10 py-10">
      <div className="flex flex-col items-center justify-between px-10 md:flex-row md:pt-10">
        <div>
          <div className="p-10">
            <h2 className="text-4xl md:text-6xl text-rose-500 py-2 font-semibold">
              Shelley McHardy
            </h2>
            <h3 className="text-xl md:text-2xl text-slate-500 py-2 font-medium">
              software developer, educator, & agilist
            </h3>
            <p className="text-sm md:text-lg py-2 md:py-4 text-slate-300 leading-4">
              Originally from San Francisco, California, I&apos;m currently
              making cool stuff in Atlanta, Georgia.
            </p>
          </div>
          <div className="text-2xl py-1 md:py-5 px-10 flex">
            <ul className="flex space-x-4 items-center text-cyan-500">
              <li>
                <Link
                  href="https://github.com/shelleymcq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See more on my github repo"
                >
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/shelleymchardy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See more on my linked in"
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:shelleymcq.dev@gmail.com"
                  aria-label="Email me here"
                >
                  <FaRegEnvelope />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-10 md:px-3 lg:px-6">
          <Image src={atom} height={600} width={600} alt="stylized atom" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
