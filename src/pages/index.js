import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LazyImage from "../components/lazy-image";

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
    path: `projects/homelab`,
    title: `HomeLab`,
    description: `BioSocial Methods Collaborative HomeLab`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/101287834-ce572c00-37c0-11eb-9db0-0376668c8d93.jpg`,
  }
];

const projectsTwo = [
  {
    path: `projects/contextual-emojis`,
    title: `Contextual Analysis of Emojis`,
    description: `CSCI 534 (Affective Computing) Research Project`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/102171838-788c1f00-3e65-11eb-891c-f4b6cc9be51f.png`,
  }
];

const funStuff = [
  {
    title: `AILA NLP & I`,
    description: `This was another article I wrote for the same organization, AILA,
    but with a focus on NLP. I had just taken my NLP class in my masters program and I had been doing
    NLP work with my lab, CSSL, so I thought it would be a perfect topic for me to talk about!`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/100522139-ab03ff80-3176-11eb-94a8-5f8ad75efb56.png`,
    url: `https://medium.com/the-ai-collective/ai-and-i-what-ive-learned-so-far-ee6cc680e3e`
  },
  {
    title: `AI Tat`,
    description: `Ever since I got my first tattoo at 17, it's been a challenge to not get any more. This is my third tattoo
    I had done in LA by my favorite tattoo artist (@sweriet on insta) and it was done towards the end of my CS masters. The idea
    of man/woman and machine has been something I've enjoyed studying from a philosophical standpoint, as well as a technical one.
    The question of machine (and really, human) consciousness and the study of human-computer interaction
    will always be burning in the back of my mind until all answers are found.`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/102172934-e89ba480-3e67-11eb-93b3-cf41c8c24a50.png`,
    url: `https://www.instagram.com/p/BxGb-hIFC02/`
  }
];

const funStuff2 = [
  {
    title: `AILA AI & I`,
    description: `This was a fun article I wrote for a local organization, AILA, talking
    about my experiences as a computer science student coming from cognitive science`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/100521779-adb12580-3173-11eb-9f1a-30a53aae9bc5.png`,
    url: `https://medium.com/the-ai-collective/ai-and-i-what-ive-learned-so-far-ee6cc680e3e`
  }
]

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
          the University of Southern California (Fight On! ✌🏼). Most of the research and work I've done is in
          behavioral science, product design, morality and NLP, and traditional machine learning
          and reasoning. I love helping people, volunteering when I can, and I'm hugely motivated by doing work that has an impact on my community.
          I love learning more than anything, and I've been most interested recently in learning
          about <b>tech policy</b>, <b>design</b> and <b>health</b> (especially at the intersection
          of mental health and tech), and <b>UX research</b>. I'm really inspired by interdisciplinary
          research, it's beyond incredible to me to watch different people from different backgrounds come together
          to collaborate and create. There's no better feeling than learning from smart, skilled,
          caring people and working with them to research or make things that affect people and society in a positive way.
          If you're someone who has experience in any of the industries I mentioned above, or if you're
          someone who's looking to collaborate with someone with my background in a meaningful way, please
          do not hesitate to reach out! I'm always looking for people in different industries to connect or work with.
          If you're someone who is also looking to learn more about cognitive science, computer science, philosophy,
          or anything related to my work and education, please reach out as well! If you're wanting to just connect,
          please do! I'm always happy to meet new people and make new connections. ❤️
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
        <h2>Projects 🎉</h2>
        <p>
          Here is a colletion of projects I've worked on and been heavily involved with. They range in topics and involvement,
          but all projects selected have been super impactful in terms of my work but also in the way they've contributed to my
          choice of study and work!
        </p>
        <div className="flex flex-col lg:flex-row xl:flex-row sm:flex-col xs:flex-col md:flex-col">
          <div className="lg:w-1/2 xl:w-1/2">
            {projects.map(function(project) {
              return (
                <Link to={project.path}>
                  <div className="shadow-xl hover:shadow-2xl w-full mh-card mb-16 rounded-lg">
                    <LazyImage
                      alt={1}
                      className="w-full rounded-tr-lg rounded-tl-lg"
                      src={project.imgUrl}
                    ></LazyImage>
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
                    <LazyImage
                      alt={1}
                      className="w-full rounded-tr-lg rounded-tl-lg"
                      src={project.imgUrl}
                    ></LazyImage>
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
          Amelia C. Coulter Bue & Kristen Harrison<br />
          (My name is referenced in the Acknowledgements)
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
          <h5 style={{whiteSpace: `pre-wrap`}}>
          Amelia C. Coulter Bue <br />
          (My name is referenced in the Acknowledgements)
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
        <div className="flex flex-col lg:flex-row xl:flex-row sm:flex-col xs:flex-col md:flex-col">
          <div className="lg:w-1/2 xl:w-1/2">
            {funStuff.map(function(f) {
                  return (
                    <div className="shadow-xl hover:shadow-2xl w-full mh-card mb-16 rounded-lg">
                    <a
                    href={f.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    <LazyImage
                        alt={1}
                        className="w-full rounded-tr-lg rounded-tl-lg"
                        src={f.imgUrl}
                      ></LazyImage>
                      <div className="p-6">
                        <h3 className="my-0 font-bold">{f.title}</h3>
                        <p className="mt-1 mb-0">{f.description}</p>
                      </div>
                    </a>
                    </div>
                  );
            })}
          </div>
          <div className="xs:w-0 sm:w-0 md:w-0 lg:w-16 xl:w-16" />
          <div className="lg:w-1/2 xl:w-1/2 card-margin">
            {funStuff2.map(function(f2) {
              return (
                <div className="shadow-xl hover:shadow-2xl w-full mh-card mb-16 rounded-lg">
                <a
                href={f2.url}
                rel="noopener noreferrer"
                target="_blank"
                >
                <LazyImage
                    alt={1}
                    className="w-full rounded-tr-lg rounded-tl-lg"
                    src={f2.imgUrl}
                  ></LazyImage>
                  <div className="p-6">
                    <h3 className="my-0 font-bold">{f2.title}</h3>
                    <p className="mt-1 mb-0">{f2.description}</p>
                  </div>
                </a>
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </Layout>
  );
}

export default IndexPage;
