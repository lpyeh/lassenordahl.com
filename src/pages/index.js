import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link } from "gatsby";

const tags = {
  'NLP': {
    backgroundColor: `#E250BE`, // pink
    color: `white`
  },
  'CogSci': {
    backgroundColor: `#7CB441`, // green
    color: `white`
  },
  'SocialScience': {
    backgroundColor: `#1EA5AE`, // teal
    color: `white`
  },
  'Psych': {
    backgroundColor: `#EA7E1F`,
    color: `white`
  },
  'HCI': {
    backgroundColor: `#31393C`,
    color: `white`
  }
}

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
        <p>
          Here's a collection of papers and research that I've worked on that have appeared in proceedings or have been published.
          I am strong believer in open science and not making people pay to access research, so if you're having trouble accessing
          any of these materials, please contact me and I will do my best to provide a PDF!
        </p>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg"> 
          <div className="tag-container">
            <div className="tag" style={tags.NLP}>
              NLP
            </div>
            <div className="tag" style={tags.SocialScience}>
              Social Science
            </div>
          </div>
          <h4 className="font-bold text-2xl">
          Moral Foundations Twitter Corpus: A collection of 35k tweets annotated for moral sentiment
          </h4>
          <h5>
          Hoover, J., Portillo-Wightman, G., <b>Yeh, L.</b>, Havaldar, S., Mostafazadeh Davani, A., Lin, Y., Kennedy, B., 
          Atari, M., Kamel, Z., Mendlen, M., Moreno, G., Park, C., Chang, T. E., Chin, J., Leong, C., Leung, J. Y., Mirinjian, A., Dehghani, M.
          </h5>
          <div className="center">
            <a
              className="link"
              href="https://www.researchgate.net/publication/332331200_Moral_Foundations_Twitter_Corpus_A_collection_of_35k_tweets_annotated_for_moral_sentiment"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Click to Read
              </button>
            </a>             
          </div>
        </div>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg">
        <div className="tag-container">
          <div className="tag" style={tags.NLP}>
            NLP
          </div>
          <div className="tag" style={tags.SocialScience}>
            Social Science
          </div>
        </div>
          <h4 className="font-bold text-2xl">
          Reporting the Unreported: Event Extraction for Analyzing the Local Representation of Hate Crimes
          </h4>
          <h5>
          Mostafazadeh Davani, A., <b>Yeh, L.</b>, Atari, M., Kennedy, B., Portillo-Wightman, G., 
          Gonzalez, E., Delong, N., Bhatia, R., Mirinjian, A., Ren, X., Dehghani, M.
          </h5>
        <div className="center">
          <a 
            className="link"
            href="https://arxiv.org/abs/1909.02126"
            rel="noopener noreferrer"
            target="_blank"
          >
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Click to Read
              </button>
          </a>
        </div>
        </div>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg">
        <div className="tag-container">
            <div className="tag" style={tags.NLP}>
              NLP
            </div>
            <div className="tag" style={tags.CogSci}>
              Cognitive Science
            </div>
          </div>
          <h4 className="font-bold text-2xl">
          Modeling performance differences on cognitive tests using LSTMs and skip-thought vectors trained on reported media consumption
          </h4>
          <h5>
          Courtland, M., Mostafazadeh Davani, A., Reyes, M., <b>Yeh, L.</b>, 
          Leung, J., Kennedy, B., Dehghani, M., Zevin, J
          </h5>
        <div className="center">
          <a
          className="link"
          href="https://www.aclweb.org/anthology/W19-2106/"
          rel="noopener noreferrer"
          target="_blank">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Click to Read
            </button>
          </a>
        </div>
        </div>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg">
        <div className="tag-container">
            <div className="tag" style={tags.NLP}>
              NLP
            </div>
            <div className="tag" style={tags.CogSci}>
              Cognitive Science
            </div>
          </div>
          <h4 className="font-bold text-2xl">
          Subtle differences in language experience moderate performance on language-based cognitive tests
          </h4>
          <h5>
          Courtland, M., Mostafazadeh Davani, A., Reyes, M., <b>Yeh, L.</b>, 
          Leung, J., Kennedy, B., Dehghani, M., Zevin, J
          </h5>
        <div className="center">
          <a 
          className="link"
          href="https://www.researchgate.net/publication/334807387_Subtle_differences_in_language_experience_moderate_performance_on_language-based_cognitive_tests"
          rel="noopener noreferrer"
          target="_blank">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Click to Read
            </button>
          </a>
        </div>
        </div>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg">
        <div className="tag-container">
          <div className="tag" style={tags.SocialScience}>
            Social Science
          </div>
        </div>
          <h4 className="font-bold text-2xl">
          The Power of Silence: Using Sentiment Text Analysis to Examine Twitter Responses to Sexual Harassment Accounts
          </h4>
          <h5>
          Chambers, M. K., Mostafazadeh Davani, A., Goodwin, A., Dodson, S., <b>Yeh, L.</b>, Dehghani, M., Graham, J., Diekmann, K. A
          </h5>
        <div className="center">
          <a 
          className="link"
          href="https://iafcm.org/2019/modules/request.php?module=oc_program&action=summary.php&id=217"
          rel="noopener noreferrer"
          target="_blank">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Click to Read
            </button>
          </a>
        </div>
        </div>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg">
        <div className="tag-container">
          <div className="tag" style={tags.SocialScience}>
            Social Science
          </div>
          <div className="tag" style={tags.Psych}>
            Psychology
          </div>
        </div>
          <h4 className="font-bold text-2xl">
          Visual and cognitive processing of thin-ideal Instagram images containing idealized or disclaimer comments
          </h4>
          <h5>
          Amelia C. Coulter Bue & Kristen Harrison
          * My name is found in the Acknowledgements
          </h5>
        <div className="center">
          <a 
          className="link"
          href="https://iafcm.org/2019/modules/request.php?module=oc_program&action=summary.php&id=217"
          rel="noopener noreferrer"
          target="_blank">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Click to Read
            </button>
          </a>
        </div>
        </div>
        <div className="shadow-xl w-full mh-card hover:shadow-2xl mb-16 p-6 rounded-lg">
        <div className="tag-container">
          <div className="tag" style={tags.SocialScience}>
            Social Science
          </div>
          <div className="tag" style={tags.Psych}>
            Psychology
          </div>
          <div className="tag" style={tags.HCI}>
            HCI
          </div>
        </div>
          <h4 className="font-bold text-2xl">
          The looking glass selfie: Instagram use frequency predicts visual attention to high-anxiety body regions in young women
          </h4>
          <h5>
          Amelia C. Coulter Bue
          * My name is found in the Acknowledgements
          </h5>
        <div className="center">
          <a 
          className="link"
          href="https://www.sciencedirect.com/science/article/abs/pii/S0747563220300832"
          rel="noopener noreferrer"
          target="_blank">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Click to Read
            </button>
          </a>
        </div>
        </div>
      </section>
      <section>
        <h2>Fun Stuff! 🔥</h2>
        <p>
          Here's just a random collection of fun things I've done over the past few years!
          They include a couple Medium articles, some fun paintings, and more. 
        </p>
        <div className="center">
          <div className="shadow-xl card hover:shadow-2xl rounded-lg padding-sm">
            <a 
            href="https://medium.com/the-ai-collective/ai-and-i-what-ive-learned-so-far-ee6cc680e3e"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img
                alt={1}
                className="w-full rounded-tr-lg rounded-tl-lg"
                src="https://user-images.githubusercontent.com/26417696/100521779-adb12580-3173-11eb-9f1a-30a53aae9bc5.png"
              ></img>
              <div className="p-6">
                <h3 className="my-0 font-bold">AILA AI & I: What I've Learned</h3>
                <p className="mt-1 mb-0">This was a fun article I wrote for a local organization, AILA, talking
                about my experiences as a computer science student coming from cognitive science</p>
              </div>
            </a>
            </div>
            <div className="shadow-xl card hover:shadow-2xl rounded-lg padding-sm">
            <a 
            href="https://medium.com/the-ai-collective/nlp-and-i-what-ive-learned-so-far-february-2019-8362d47f14cc"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img
                alt={1}
                className="w-full rounded-tr-lg rounded-tl-lg"
                src="https://user-images.githubusercontent.com/26417696/100522139-ab03ff80-3176-11eb-94a8-5f8ad75efb56.png"
              ></img>
              <div className="p-6">
                <h3 className="my-0 font-bold">AILA AI & I: What I've Learned</h3>
                <p className="mt-1 mb-0">This was another article I wrote for the same organization, AILA, 
                but with a focus on NLP. I had just taken my NLP class in my masters program and I had been doing
                NLP work with my lab, CSSL, so I thought it would be a perfect topic for me to talk about!</p>
              </div>
            </a>
            </div>
          </div>      
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
