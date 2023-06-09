import Image from "next/image";
import Link from "next/link";
import shopper from "../public/assets/shopper.png";
import temperature from "../public/assets/temperature.png";
import toolin from "../public/assets/toolin-around.png";
import regex from "../public/assets/regex-tutorial500x340.png";
import readme from "../public/assets/readme500x340.png";
import hapi from "../public/assets/get-hapi500x340.png";
import couples from "../public/assets/couples-dilemma.png";

const Projects = () => {
  return (
    <div>
      <div className="bg-cyan-900 flex flex-col">
        <h2 className="pt-20 mx-auto text-slate-300 text-3xl">projects</h2>
        <div className="flex justify-evenly flex-wrap p-2">
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image src={couples} alt="couples dilemma thumbnail" />
            <div className="flex justify-around pt-3">
              <Link
                href="https://github.com/smhan99/couples-dilemma"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the repo
              </Link>
              <Link
                href="https://smhan99.github.io/couples-dilemma/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md hover:bg-cyan-600"
              >
                the app
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              An app for couples that have difficulty picking a restaurant
              fairly. Created as a participant in the{" "}
              <span className="text-cyan-500 underline">
                <Link
                  href="https://www.lighthall.co/class/85e923a3-534b-47ed-a8d8-b4440b4a1ad4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineering Super League
                </Link>
              </span>
            </p>
            <p className="px-4 text-slate-300 text-xs lg:text-md">
              It take two accounts to create an outing.
            </p>
            <p className="px-6 text-slate-300 text-xs lg:text-md">
              username: sample1 password: test
            </p>
            <p className="px-6 text-slate-300 text-xs lg:text-md">
              username: sample2 password: test
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-sm">
              React | Material UI | Django backend
            </p>
          </div>
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image src={shopper} alt="shopping list thumbnail" />
            <div className="flex justify-around pt-3">
              <Link
                href="https://github.com/the-collab-lab/tcl-36-smart-shopping-list"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the repo
              </Link>
              <Link
                href="https://tcl-36-smart-shopping-list.web.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md hover:bg-cyan-600"
              >
                the app
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              A shopping list app designed to learn how often you buy items and
              keep you organized. Created as a participant in the{" "}
              <span className="text-cyan-500 underline">
                <Link
                  href="https://the-collab-lab.codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Collab Lab
                </Link>
              </span>
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-sm">
              React | Firebase | TailwindCSS
            </p>
          </div>
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image
              src={temperature}
              alt="temperature visualization site thumbnail"
            />
            <div className="flex justify-around pt-3">
              <Link
                href="https://github.com/shelleymcq/temperature"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the repo
              </Link>
              <Link
                href="https://temperature-ivory.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md hover:bg-cyan-600"
              >
                the app
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              A tool for crafty users to ﬁnd the daily high temperatures for a
              given US city in a particular year.
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-sm">
              React | NextJS | TailwindCSS
            </p>
          </div>
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image src={readme} alt="readme generator thumbnail" />
            <div className="flex justify-around pt-3">
              <Link
                href="https://github.com/shelleymcq/README-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the repo
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              This script will allow a user to create a professional README file
              from the command line.
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-xs md:text-sm">
              JavaScript | NodeJS | Inquirer
            </p>
          </div>
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image src={toolin} alt="community toolshed thumbnail" />
            <div className="flex justify-around pt-3">
              <Link
                href="https://github.com/shelleymcq/Toolin-Around"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the repo
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              A community toolshed application that provides neighbors a
              platform to list tools they have available and to borrow tools
              from one another.
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-xs md:text-sm">
              JavaScript | Node.js | MySQL | Handlebars | Nodemailer |
              Materialize
            </p>
          </div>
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image src={hapi} alt="get-hapi thumbnail" />
            <div className="flex justify-around pt-3">
              <Link
                href="https://github.com/shelleymcq/Project-getHAPI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the repo
              </Link>
              <Link
                href="https://shelleymcq.github.io/Project-getHAPI/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md hover:bg-cyan-600"
              >
                the app
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              When a user needs a pick-me-up, they are presented with the option
              to either get a random pick-me-up or select from three choices: a
              dad joke, an inspirational quote, or an interesting fact.
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-xs md:text-sm">
              HTML | JavaScript | CSS
            </p>
          </div>
          <div className="bg-slate-900 shadow-2xl p-10 rounded-xl m-5 md:w-1/3 md:p-5 lg:w-1/4">
            <Image src={regex} alt="github gist thumbnail" />
            <div className="flex justify-around pt-3">
              <Link
                href="https://gist.github.com/shelleymcq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 bg-cyan-800 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                the gist
              </Link>
            </div>
            <p className="p-4 text-slate-300 text-xs md:text-sm lg:text-base">
              A tutorial that explains how a specific regular expression, or
              regex, functions by creating a regex for valid Dutch postal codes,
              breaking down each part of the expression, and describing what it
              does.
            </p>
            <h3 className="text-cyan-600 text-md pt-5">Tech used</h3>
            <p className="text-slate-300 text-xs md:text-sm">
              JavaScript | Markdown
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
