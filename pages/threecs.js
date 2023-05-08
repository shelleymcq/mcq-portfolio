import Link from "next/link";
import Image from "next/image";
import badge from "../images/sesl_level_4.f24b8b224ed2c731e160f96b4c86ea1f.svg";
import samosas from "../images/samosas.jpg";
import charlotte from "../images/charlotte.jpg";
import gyroid from "../images/gyroid.jpg";
import blanket from "../images/blanket.jpg";
import tango from "../images/tango2.jpg";
import challah from "../images/challah2.jpg";

const ThreeCs = () => {
  return (
    <div>
      <div className="bg-slate-400 flex flex-col ">
        <h2 className="pt-20 mx-auto text-slate-700 text-3xl">Coding</h2>
        <div className="flex justify-evenly flex-wrap p-4 rounded-xl shadow-2xl m-10">
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <p className="p-4 text-slate-900 text-md">
              I just started learning Vue 3. I&apos;m in the very early stages,
              but check out this silly thing I made after my first tutorial.
            </p>
            <div className="flex justify-around pt-3">
              <Link
                href="https://shelleymcq.github.io/dad-jokes-vue/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-700 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                dad jokes
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-md">
              Next up on the &apos;to learn&apos; list is Vue CLI and Vue
              Router.
            </p>

            <h4 className="text-cyan-600 text-sm font-medium pt-5">
              Tech used
            </h4>
            <p className="text-slate-900 text-xs md:text-sm">Vue 3</p>
          </div>
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <p className="p-4 text-slate-900 text-md">
              In April I decided to step outside my comfort zone and join a
              coding competition. I am currently &apos;battling&apos; in
              Lighthall&apos;s Software Enginerring Super League. And I&apos;ve
              reached level 4!!!
            </p>
            <div className="flex justify-around">
              <Image src={badge} alt="Level 4 SESL badge" />
            </div>

            <p className="p-4 text-slate-900 text-md">
              We were assigned to work in random teams and have from Monday to
              Friday each week to complete increasingly more difficult
              challenges. My team mates are in different time zones from New
              Mexico to Nigeria, taking final exams, and one even got married
              between weeks 2 and 3!
            </p>
          </div>

          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>SESL Challenges</h3>
            <p className="p-4 text-rose-700 text-md">
              Well, we didn&apos;t make it past round 4. There was a bug we
              didn&apos;t catch and the judges couldn&apos;t test the app fully.
              I&apos;m disappointed, but it was so much fun and I learned a lot.
              Like don&apos;t work all night and test more!
            </p>
            <p className="p-4 text-slate-900 text-md">
              Week 4: Yelp for couples that need help picking a place to eat
              fairly. Modeled very loosely on Between, both users need an
              account. Tech: React, Django
            </p>
            <div className="flex justify-around pt-1">
              <Link
                href="https://smhan99.github.io/couples-dilemma/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-700 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                Couple&apos;s Dilemma
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-md">
              Week 3: Classic hangman with a leaderboard and the ability to send
              a game link to a Tech: React, Django
            </p>
            <div className="flex justify-around pt-1">
              <Link
                href="https://smhan99.github.io/hangman-react-django/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-700 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                Hangman
              </Link>
            </div>
          </div>

          <div className="bg-slate-100 border-4 border-rose-900  rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>SESL Challenges</h3>
            <p className="p-4 text-slate-900 text-md">
              Week 2: Task Tracker CRUD app that required login. This one was a
              two-person project. Tech: React, firebase
            </p>
            <div className="flex justify-around pt-1">
              <Link
                href="https://task-tracker-app-lemon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-700 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                Task Tracker
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-md">
              Week 1: This one was an individual challenge. Build a click
              counter that stored and displayed all clicks. Tech: React,
              firebase
            </p>
            <div className="flex justify-around pt-1">
              <Link
                href="https://www.shelleymcq.dev/clicks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-700 text-slate-200 rounded-md  hover:bg-cyan-600"
              >
                Clicks
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Cooking Section */}
      <div className="bg-slate-400 flex flex-col ">
        <h2 className="pt-10 mx-auto text-slate-700 text-3xl">Cooking</h2>
        <div className="flex justify-evenly flex-wrap p-4 rounded-xl shadow-2xl m-10">
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>Jane&apos;s Mini Mocha Charlottes</h3>
            <p className="p-4 text-slate-900 text-lg">
              This took FIVE hours from starting prep to clean up, but it was
              worth it!
            </p>
            <div className="pt-3 place-self-center">
              <Image
                src={charlotte}
                alt="chocolate cake with cream cheese swirl topping"
              />
            </div>
          </div>
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>Dan&apos;s Challah</h3>
            <p className="p-4 text-slate-900 text-md">
              I cannot believe I made this amazing bread! But since I took the
              picture, it must be true.
            </p>
            <div className="pt-3 place-self-center">
              <Image src={challah} alt="fresh baked braided and seeded bread" />
            </div>
          </div>
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>Samosas</h3>
            <p className="p-4 text-slate-900 text-md">
              I made samosas for the first time last night. They&apos;re not
              pretty but they were DELICIOUS.
            </p>
            <div className="pt-3 place-self-center">
              <Image
                src={samosas}
                alt="freshly baked samosas on cookie sheet"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Crochet Section */}
      <div className="bg-slate-400 flex flex-col ">
        <h2 className="pt-10 mx-auto text-slate-700 text-3xl">Crochet</h2>
        <div className="flex justify-evenly flex-wrap p-4 rounded-xl shadow-2xl m-10">
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>Eliza&apos;s Triceratops</h3>
            <p className="p-4 text-slate-900 text-lg">
              My neice loves dinosaurs and I love adorable amigurumi.
            </p>
            <div className="pt-3 place-self-center">
              <Image src={tango} alt="crochet purple triceratops" />
            </div>
          </div>
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>Temperature Blanket</h3>
            <p className="p-4 text-slate-900 text-lg">
              PROGRESS PHOTO: I am super excited about this blanket, but I
              can&apos; give any details because the person I&apos;m making it
              for doesn&apos;t know yet.
            </p>
            <div className="pt-3 place-self-center">
              <Image src={blanket} alt="crochet temperature blanket" />
            </div>
          </div>
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/3 md:p-5 lg:w-1/4">
            <h3>Squeakoid!</h3>
            <p className="p-4 text-slate-900 text-lg">
              Animal Crossing saved my sanity in 2020 and I still love
              everything about it, especially the gyroids!
            </p>
            <div className="pt-3 place-self-center">
              <Image src={gyroid} alt="crochet gyroid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCs;
