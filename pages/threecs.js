import Link from "next/link";
import Image from "next/image";
import badge4 from "../images/sesl_level_4.f24b8b224ed2c731e160f96b4c86ea1f.svg";
import badge3 from "../images/sesl_level_3.4c04ba0913c3957408b5b19d308a22d8.svg";
import badge2 from "../images/sesl_level_2.22f06abe0badef89a0d0e414816d38fb.svg";
import badge1 from "../images/sesl_level_1.8e19fb2de8f56acca58b613198c08d0c.svg";
import samosas from "../images/samosas.jpg";
import charlotte from "../images/charlotte.jpg";
import gyroid from "../images/gyroid.jpg";
import blanket from "../images/blanket.jpg";
import tango from "../images/tango3.jpg";
import challah from "../images/challah.jpg";
import misir from "../images/misir.jpeg";

const ThreeCs = () => {
  return (
    <div>
      <section className="bg-slate-400 flex flex-col ">
        <h2 className="pt-20 mx-auto text-slate-700 text-3xl">coding</h2>
        <div className="flex justify-evenly flex-wrap p-2 rounded-xl shadow-2xl m-10">
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Learning Vue</h3>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              I met a very passionate Vue developer at a networking event in May
              and decided to try out a couple tutorials. While I have no plans
              to switch from React at the moment, I feel like Vue might be a lot
              more intuitive to learn.
            </p>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              Check out the silly thing I made if you need a laugh.
            </p>
            <div className="flex justify-around pt-1 text-sm">
              <Link
                href="https://shelleymcq.github.io/dad-jokes-vue/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 px-3 bg-cyan-800 text-slate-200 rounded-sm hover:bg-cyan-600"
              >
                Dad Jokes
              </Link>
            </div>
            <p className="px-4 py-10 text-slate-900 text-sm">
              Tech: Vue 3, icanhazdadjoke API
            </p>
          </div>
          <div className="bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Software Engineering Super League</h3>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              In April I decided to step outside my comfort zone and join a
              coding competition. I &apos;battled&apos; in Lighthall&apos;s
              first Software Engineering Super League and made it to Level 4 out
              of 5.
            </p>
            <div className="flex justify-around">
              <Image src={badge4} alt="Level 4 SESL badge" />
            </div>

            <p className="p-4 text-slate-900 text-sm">
              We were assigned to work in random teams and given from Monday to
              Friday each week to complete increasingly more difficult
              challenges. My teammates were in different time zones from New
              Mexico to Nigeria, taking final exams, and one even got married
              between weeks 2 and 3!
            </p>
          </div>

          <div className="bg-slate-100 border-4 border-rose-900  rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">SESL Challenges</h3>
            <p className="p-4 text-slate-900 text-xs">
              Week 4: Restuarant choosing app, modeled very loosely on
              Between-both users need an account. Tech: React, Django
            </p>
            <div className="flex justify-around pt-1 text-xs">
              <Link
                href="https://smhan99.github.io/couples-dilemma/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 bg-cyan-800 text-slate-200 rounded-sm hover:bg-cyan-600"
              >
                Couple&apos;s Dilemma
              </Link>
            </div>
            <div className="flex justify-around pt-2">
              <Image src={badge3} alt="Level 3 SESL badge" />
            </div>
            <p className="p-4 text-slate-900 text-xs">
              Week 3: Classic hangman with a leaderboard and the ability to send
              a game link to a Tech: React, Django
            </p>
            <div className="flex justify-around pt-1 text-xs">
              <Link
                href="https://smhan99.github.io/hangman-react-django/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 bg-cyan-800 text-slate-200 rounded-sm hover:bg-cyan-600"
              >
                Hangman
              </Link>
            </div>
            <div className="flex justify-around pt-2">
              <Image src={badge2} alt="Level 2 SESL badge" />
            </div>
            <p className="p-4 text-slate-900 text-xs">
              Week 2: Task Tracker CRUD app that required login. This one was a
              two-person project. Tech: React, firebase
            </p>
            <div className="flex justify-around py-1 text-xs">
              <Link
                href="https://task-tracker-app-lemon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1 px-3 bg-cyan-800 text-slate-200 rounded-sm  hover:bg-cyan-600"
              >
                Task Tracker
              </Link>
            </div>
            <div className="flex justify-around pt-2">
              <Image src={badge1} alt="Level 1 SESL badge" />
            </div>
          </div>
        </div>
      </section>
      {/* Cooking Section */}
      <section id="cooking" className="bg-slate-400 flex flex-col">
        <h2 className="pt-10 mx-auto text-slate-700 text-3xl">cooking</h2>
        <div className="flex justify-evenly flex-wrap p-4 rounded-xl shadow-2xl m-10">
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Vegan Ethiopian Feast</h3>
            <div className="pl-2 flex text-xs">
              <Link
                href="https://culinary-kisses-llc.myshopify.com/products/african-vegan-virtual-experience"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-3 bg-rose-800 text-slate-200 rounded-sm hover:bg-rose-700"
              >
                Culinary Kisses
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              Made this amazing misir, gomen, and &apos;quick&apos; injera. Took
              90 minutes from prep to eating!
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image src={misir} alt="misir and gomen on a bed of injera" />
            </div>
          </div>
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Jane&apos;s Mini Mocha Charlottes</h3>
            <div className="pl-2 flex text-xs">
              <Link
                href="https://www.bakewithalegend.com/onlineclasses"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-3 bg-rose-800 text-slate-200 rounded-sm hover:bg-rose-700"
              >
                Bake With a Legend Online Classes
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              This took FIVE hours from starting prep to clean up, but it was
              worth it!
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image
                src={charlotte}
                alt="chocolate cake with cream cheese swirl topping"
              />
            </div>
          </div>
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Dan&apos;s Challah</h3>
            <div className="pl-2 flex text-xs">
              <Link
                href="https://www.bakewithalegend.com/onlineclasses"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-3 bg-rose-800 text-slate-200 rounded-sm hover:bg-rose-700"
              >
                Bake With a Legend Online Classes
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              I cannot believe I made this amazing bread! But since I took the
              picture, it must be true.
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image src={challah} alt="fresh baked braided and seeded bread" />
            </div>
          </div>
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Samosas</h3>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              I made samosas for the first time last night. They&apos;re not
              pretty but they were DELICIOUS.
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image
                src={samosas}
                alt="freshly baked samosas on cookie sheet"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Crochet Section */}
      <section id="crochet" className="bg-slate-400 flex flex-col ">
        <h2 className="pt-10 mx-auto text-slate-700 text-3xl">crochet</h2>
        <div className="flex justify-evenly flex-wrap p-4 rounded-xl shadow-2xl m-10">
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Eliza&apos;s Triceratops</h3>
            <div className="pl-2 flex text-xs">
              <Link
                href="https://www.thenicolechase.com/patterns/tanner-the-triceratops"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-3 bg-rose-800 text-slate-200 rounded-sm hover:bg-rose-700"
              >
                Get the Pattern
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              My neice loves dinosaurs and I love adorable amigurumi.
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image src={tango} alt="crochet purple triceratops" />
            </div>
          </div>
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Temperature Blanket</h3>
            <div className="pl-2 flex text-xs">
              <Link
                href="https://tlycblog.com/linen-square-temperature-blanket-free-crochet-linen-stitch-afghan-pattern/"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-3 bg-rose-800 text-slate-200 rounded-sm hover:bg-rose-700"
              >
                Get the Pattern
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              PROGRESS PHOTO: I am super excited about this blanket, but I
              can&apos;t share any details because the person I&apos;m making it
              for doesn&apos;t know yet.
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image src={blanket} alt="crochet temperature blanket" />
            </div>
          </div>
          <div className="flex flex-col bg-slate-100 border-4 border-rose-900 rounded-xl m-2 md:w-1/2 md:p-5 lg:w-1/3">
            <h3 className="p-2 font-bold">Squeakoid!</h3>
            <div className="pl-2 flex text-xs">
              <Link
                href="https://www.etsy.com/listing/1116689266/squeakoid-crochet-pattern"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 px-3 bg-rose-800 text-slate-200 rounded-sm hover:bg-rose-700"
              >
                Get the Pattern
              </Link>
            </div>
            <p className="p-4 text-slate-900 text-sm md:text-md">
              Animal Crossing kept me happy and socializing with friends
              virtually in 2020 and I still love everything about it, especially
              the gyroids!
            </p>
            <div className="pt-3 pb-2 place-self-center">
              <Image src={gyroid} alt="crochet gyroid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeCs;
