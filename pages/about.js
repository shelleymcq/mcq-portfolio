import Link from "next/link";
import Image from "next/image";
import garden from "../public/assets/garden.jpg";
import csmBadge from "../images/seal-csm.png";

const About = () => {
  return (
    <div className="bg-rose-900 min-h-screen flex flex-col">
      <h1 className="pt-20 mx-auto text-slate-300 text-3xl">about</h1>
      <div className="bg-slate-100 shadow-2xl rounded-xl flex flex-col m-2 p-3 md:m-4 lg:m-10 lg:p-10">
        <p className="px-6 text-slate-900 text-sm md:text-base lg:text-lg">
          While I have left the high school chemistry classroom, I will always
          be a teacher. That part of me has influenced my wish to collaborate on
          a team of like-minded folks committed to creating applications and
          experiences for learners and information seekers who want to make the
          web, and world, a more beautiful and accessible place.
        </p>

        <p className="px-6 py-2 text-slate-900 text-sm md:text-base lg:text-lg">
          That drive also led me to two amazing communities from whom I have
          learned so much and to which I am happy to volunteer:
        </p>
        <div className="md:flex justify-between py-2 px-6">
          <p className="md:w-1/2 px-6 py-2 text-slate-900 text-xs md:text-sm lg:text-base">
            I&apos;m proud to serve as a board member of{" "}
            <span className="text-rose-700">
              <Link
                href="https://the-collab-lab.codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                The Collab Lab
              </Link>
            </span>{" "}
            and to coordinate The Career Lab, a two-week session offered to
            participants once they complete the eight-week project.
          </p>
          <p className="md:w-1/2 px-6 py-2 text-slate-900 text-xs md:text-sm lg:text-base">
            I love to assist in the coordination of Friday Lunch & Learns for{" "}
            <span className="text-rose-700">
              <Link
                href="https://virtualcoffee.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Virtual Coffee
              </Link>
            </span>
            , an online community of and for developers.
          </p>
        </div>
        <p className="px-6 py-2 text-slate-900 text-sm md:text-base lg:text-lg">
          In 2023 I became a Certified Scrum Master because the values and
          princples of Agile are a perfect fit for my need for collaboration,
          communication, reflection, and productivity. It just makes such good
          sense.
        </p>
        <div className="place-self-center">
          <Image src={csmBadge} alt="scrum alliance csm certified seal" />
        </div>
        <p className="px-6 py-2 text-slate-900 text-sm md:text-base lg:text-lg">
          When I&apos;m not coding or building community, you&apos;ll find me
          crocheting, walking my dog, or visiting one of Georgia&apos;s
          phenomenal state or local parks. And I do mean phenomenal. Keep
          scrolling for the spectacular picture I took with my phone last fall
          at Gibbs Gardens.
        </p>
        <p className="px-6 pt-4 text-xs">
          Note: The links above are underlined intentionally. Current design
          trends may discourage it, but underlined links are important for
          accessibility and inclusion.
        </p>
        <p className="pt-2 text-rose-700 text-xs text-center">
          <span className="italic pr-2">
            &quot;Underline your links, underline your links, underline your
            links.&quot;
          </span>
          -Nic Steenhout
        </p>
      </div>
      <div style={{ position: "relative" }} className="flex h-screen">
        <Image
          src={garden}
          alt="vibrant japanese garden in georgia"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default About;
