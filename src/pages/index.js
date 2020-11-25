import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link } from "gatsby";
import { withPrefix } from 'gatsby'


const projects = [
  {
    path: `projects/checkmate`,
    title: `Checkmate`,
    description: `Intelligent Task Planning`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/77372194-5de7a800-6d22-11ea-8405-33cf4184ce84.png`,
  },
  {
    path: `projects/anteater-hydroponics`,
    title: `Anteater Hydroponics`,
    description: `IoT Plant Monitoring Application`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/70379600-92eefc80-18e3-11ea-8891-d19285089f47.png`,
  },
  {
    path: `projects/impulse`,
    title: `Impulse`,
    description: `Internship application management program using Gmail API's and NLP`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/70756241-e51f8b80-1cf0-11ea-9ce1-a8d7354d97f8.png`,
  },
  {
    path: `projects/hackuci`,
    title: `HackUCI Involvement`,
    description: `Developing websites for advertising Orange County's largest hackathon`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/70756428-5e1ee300-1cf1-11ea-8959-f740b651b14e.png`,
  },
];

const projectsTwo = [
  {
    path: `projects/tippers-development`,
    title: `TIPPERS Applications`,
    description: `Assisting research in the UCI IoT Department`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/79298585-6309c400-7e96-11ea-842f-762aceccac8d.png`,
  },
  {
    path: `projects/pxl`,
    title: `PXL`,
    description: `LED Matrix map for concerts using smartphones`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/70756395-46dff580-1cf1-11ea-97a1-3c3bd1777f5d.png`,
  },
  {
    path: `projects/orhx`,
    title: `ORHX`,
    description: `Oak Ridge Hacks, my first web development project`,
    imgUrl: `https://user-images.githubusercontent.com/13127625/70867193-9576d500-1f27-11ea-9915-e9f744c28cbc.png`,
  },
];

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `Leigh`,
          `Yeh`,
          `Leigh Yeh`,
          `AI engineer`,
          `tailwindcss`,
        ]}
        title="Home"
      />
      <section>
        <h2>About Me ✨</h2>
        <p>
          Hi! I'm Leigh Yeh, I'm an AI Engineer at a company called Beyond Limits Inc. in Glendale, CA. 
          I have an undergraduate degree in Cognitive Science (with a minor in Applied Statistics) from
          the University of Michigan (Go Blue! 〽️) and I have a masters degree in Computer Science from
          the University of Southern California (Fight On! ✌🏼). I've done research in computational social
          science, psychology, and social science. I love helping people, volunteering when I can, and
          doing work that has an impact on my community. I love learning more than anything, and I've 
          been most interested in learning about tech policy, design and health (like wearables), and UX research.  
          I'm always looking for people in different industrues to connect or work with, so if you're someone
          who wants to learn more about my background or who wants to collaborate, feel free to reach out!
        </p>
      </section>
      <section>
        <h2>Resume 📝</h2>
        <p>
          Below is my up-to-date resume with all of my work history, educational background, and research experiences!
        </p>
        <div className="flex flex-row items-center justify-center w-full h-24">
           <a
            className="m-2"
            href="https://drive.google.com/file/d/17HCf6WKbNxfDGSQgrNwgQZnhU73KFuaV/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Click Me!
            </button>
          </a> 
        </div>
      </section>
      <section>
        <h2>Projects 🧗</h2>
        <div className="flex flex-col lg:flex-row xl:flex-row sm:flex-col xs:flex-col md:flex-col">
          <div className="lg:w-1/2 xl:w-1/2">
            {projects.map(function(project) {
              return (
                <Link to={project.path}>
                  <div className="shadow-xl hover:shadow-2xl w-full mh-card mb-16 rounded-lg">
                    <img
                      alt={1}
                      className="w-full rounded-tr-lg rounded-tl-lg"
                      src={project.imgUrl}
                    ></img>
                    <div className="p-6 rounded-lg">
                      <h3 className="my-0 font-bold">{project.title}</h3>
                      <p className="mt-1 mb-0">{project.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="xs:w-0 sm:w-0 md:w-0 lg:w-16 xl:w-16" />
          <div className="lg:w-1/2 xl:w-1/2">
            {projectsTwo.map(function(project) {
              return (
                <Link to={project.path}>
                  <div className="shadow-xl hover:shadow-2xl w-full mh-card mb-16 rounded-lg">
                    <img
                      alt={1}
                      className="w-full rounded-tr-lg rounded-tl-lg"
                      src={project.imgUrl}
                    ></img>
                    <div className="p-6">
                      <h3 className="my-0 font-bold">{project.title}</h3>
                      <p className="mt-1 mb-0">{project.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <h2>Research 🔬</h2>
        <p>While I haven't been directly involved with writing papers myself, I've contributed to a few pieces of research through developing assistive programs or applications using researched technologies.</p>
        <h3>Papers</h3>
        <div className="shadow-xl w-full mh-card mb-16 p-6 rounded-lg">
          <h4 className="font-bold text-2xl">
            Gender and Publish Timeline Correlational Study
          </h4>
          <p>
            Developed a program that parsed names and publish dates from PDF's
            of astrophysics research papers and mapped publish time between
            genders a Gender API. I'm in the acknowledgements.
          </p>
          <a
            className="link"
            href="https://baas.aas.org/pub/2020i0204/release/1"
          >
            https://baas.aas.org/pub/2020i0204/release/1
          </a>
        </div>
        <div className="shadow-xl w-full mh-card mb-16 p-6 rounded-lg">
          <h4 className="font-bold text-2xl">
            SemIoTic: Bridging the Semantic Gap in IoT Spaces
          </h4>
          <p>
            Developed several applications that utilized the TIPPER's API. An IoT middlewear system for building complicated entity relationships. I'm on the poster!
          </p>
          <a
            className="link"
            href="https://baas.aas.org/pub/2020i0204/release/1"
          >
            https://tippersweb.ics.uci.edu/research/semioticbuildsysdemo.pdf
          </a>
          <p/>
          <a
            className="link"
            href="https://tippersweb.ics.uci.edu/research/semioticbuildsysdemoposter.pdf"
          >
            https://tippersweb.ics.uci.edu/research/semioticbuildsysdemoposter.pdf
          </a>
        </div>
      </section>
      <section>
        <h2>Fun Stuff! 🔥</h2>
        <p>
          Here's just a random collection of fun things I've done over the past few years!
          They include a couple Medium articles, some fun paintings, and more. 
        </p>
      </section>

      <section>
        <h2>Photography 📷</h2>
        <p>
          
        </p>
        <div className="flex flex-row items-center justify-center w-full h-24">
          <a
            className="m-2"
            href="https://www.flickr.com/photos/189856130@N04/"
            target="_blank"
          >
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              🌇 &nbsp; Flickr
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
