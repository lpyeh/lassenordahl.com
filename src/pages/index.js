import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LazyImage from "./lazy-image";

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
  'SocialPsych': {
    backgroundColor: `#1EA5AE`, // teal
    color: `white`
  },
  'Design': {
    backgroundColor: `#EA7E1F`, // orange
    color: `white`
  },
  'HCI': {
    backgroundColor: `#31393C`, // dark gray
    color: `white`
  },
  'Cognition': {
    backgroundColor: `#441ca3`, // purple
    color: `white`
  }
}

const projects = [
  {
    path: `projects/homelab`,
    title: `HomeLab`,
    description: `BioSocial Methods Collaborative HomeLab`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/101287834-ce572c00-37c0-11eb-9db0-0376668c8d93.jpg`,
  },
  {
    path: `projects/self`,
    title: `Self-`,
    description: `Project for Iovine and Young Academy Final Semester`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/102728831-f5067e00-42fb-11eb-9b52-dfd71bd6ff4e.jpg`
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
    title: `Interview with BuiltInLA`,
    description: `I was interviewed by BuiltInLA to talk about utilizing machine learning methods for innovation in the local LA tech industry. It 
    was a great opportunity to talk about my work as an AI Engineer and how our company approached product development.`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/185653964-b20b0163-760b-42ff-a055-4f8f937a4b9a.png`,
    url: `https://www.builtinla.com/2021/03/24/los-angeles-tech-leaders-machine-learning?utm_source=press_kit&utm_medium=social_media&utm_campaign=beyondlimits`
  },
  {
    title: `New York Times Article`,
    description: `Some of the research I was a part of at USC (in the Computational Social Science Lab) made it into the New York Times. Although
		my contribution wasn't as great as some of the other authors, I'm super proud and grateful to have been a part of such an amazing group. CSSL is
		doing some really important work in studying hate, prejudiced behavior, and how that all ties in with morality. I highly suggest reading some of 
		their research to better understand the social state of certain parts of the world.`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/165661072-abdc488b-dc4d-467f-b838-63bd8466d2bf.png`,
    url: `https://www.nytimes.com/2022/04/27/opinion/rich-poor-immigration-fear.html?unlocked_article_code=AAAAAAAAAAAAAAAACEIPuomT1JKd6J17Vw1cRCfTTMQmqxCdw_PIxftm3iWka3DJDmwdiOMNAo6B_EGKf6toZ54r2DOBAd5ENb4gXvVuz-hZekJgQhPuooeBnN5NBRQJnr-JfzF82YPRD_d_-CX2b2K9JaAmlbHg702NPX3vWPCMzXFwcQd6qcRvIUX90SYMlqjPFrRziYNuzLx2UMABMDQDYSWBvvjuCRtsap7RPlyHtF5AC6wOUirTnNWc97sGbA5YbFvFR3l56m08g8hObJJVZO2sak59J7etxOkZGWdqL4y2BpEuRImylr1is7PFqhfk29M-Ck0kZnE9qbyDRds_1QSf&smid=url-share`
  },
  {
    title: `AI Paths Interview`,
    description: `I had the honor of being interviewed by Mohammad Yassin for his AI Paths Speaker Series. We talked about my background
    as an AI Engineer, thoughts on data and data science, and artificial intelligence.`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/185654858-bcef4b08-1e09-4b9e-87b3-4e44ba4a9f14.png`,
    url: `https://www.youtube.com/watch?v=Vp8AmW43Zrc`
  }

];

const funStuff2 = [
  {
    title: `AILA AI & I`,
    description: `This was a fun article I wrote for a local organization, AILA, talking
    about my experiences as a computer science student coming from cognitive science.`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/100521779-adb12580-3173-11eb-9f1a-30a53aae9bc5.png`,
    url: `https://medium.com/the-ai-collective/ai-and-i-what-ive-learned-so-far-ee6cc680e3e`
  },
  {
    title: `AAAI@USC`,
    description: `I was the President for a student org at USC called AAAI@USC during my graduate program. It was one of the
    greatest decisions I made at USC to join the club. The last semester I was on the board (right before COVID-19 hit),
    I was the President, and I had so much fun planning events with my fellow board members! We put on an industry panel
    to bring local LA tech companies to USC, we had a couple workshops to teach students how to build machine learning frameworks,
    and we also had a few professors give informative lectures about their research. I'm super grateful to my members and board, they made this
    whole experience amazing!`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/102817085-17040d00-439d-11eb-8010-fcca1a616164.png`,
    url: `https://twitter.com/uscaaai?lang=en`
  },
  {
    title: `Superposition MSJHS AI Instagram takeover`,
    description: `I did an AI Instagram takeover for @superpositionmsjhs, a chapter of an international
    non-profit organization aimed at closing the gender gap in STEM! I had a great time posting about my experience and background
    and answering questions!`,
    imgUrl: `https://user-images.githubusercontent.com/26417696/109369645-f602e100-7851-11eb-88a6-2f2e4198f64a.jpg`,
    url: `https://www.linkedin.com/posts/lpyeh_im-doing-an-ai-instagram-takeover-for-superposition-activity-6771240204876464128-A1cg?utm_source=share&utm_medium=member_desktop`
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
          `data scientist`,
          `tailwindcss`,
        ]}
        title="Home"
      />
      <section>
        <h2>About Me ✨</h2>
        <p>
        Hi! I'm Leigh Yeh, I'm a current Chief of Staff and generalist at a stealth startup, and the previous the Chief of Staff at Spren.
          I have an undergraduate degree in Cognitive Science (with a minor in Applied Statistics) from
          the University of Michigan (Go Blue 〽️) and I have a masters degree in Computer Science from
          the University of Southern California (Fight On ✌🏼). Most of the research and work I've done is in
          behavioral science, product design research, social psychology, and natural language processing.
          I love helping people, volunteering when I can, and I'm hugely motivated by doing work that has an impact on my community.
          I love learning more than anything, and I've been most interested recently in learning
          about social identity and behavior, <b>tech policy</b>, <b>computational social science</b>, and <b>health</b> (especially at the intersection
          of mental health and tech). I'm really inspired by interdisciplinary research, I love getting the opportunity to work with
          different people from different backgrounds to collaborate and create novel things. There's no better feeling than learning from smart, skilled,
          caring people and working with them to research or make things that affect people and society in a positive way.
          If you're someone who has experience in any of the industries I mentioned above, or if you're
          someone who's looking to collaborate with someone with my background in a meaningful way, please
          do not hesitate to reach out! I'm always looking for people in different industries to connect or work with.
          If you're someone who is also looking to learn more about cognitive science, computer science, social science, philosophy,
          or anything related to my work and education, please reach out as well. If you're wanting to just connect,
          please do; I'm always happy to make new connections. ❤️
        </p>
      </section>
      <section>
        <h2>Resume 📝</h2>
        <p>
          Below is my up-to-date CV with all of my work history, educational background, and research experiences!
        </p>
        <div className="flex flex-row items-center justify-center w-full h-24">
          <a
            className="m-2"
            href="https://drive.google.com/file/d/1YcfNnHlmj-8XFSl4McZ9w_kNGMGARFDg/view?usp=sharing"
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
            {projects.map(function (project) {
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
            {projectsTwo.map(function (project) {
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
            </div>
            <div className="tag" style={tags.NLP}>
              NLP
            </div>
          </div>
          <h4 className="font-bold text-2xl">
            Bound in Hatred: The role of group-based morality in acts of hate.
          </h4>
          <h5>
          Hoover, J., Mostafazadeh Davani, A., Atari, M., Kennedy, B., Portillo-Wightman, G., <b>Yeh, L.</b>, Kogon, D., & Dehghani, M.         
          </h5>
          <div className="center">
            <a
              className="link"
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hJfLMWMAAAAJ&citation_for_view=hJfLMWMAAAAJ:u5HHmVD_uO8C"
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
            </div>
            <div className="tag" style={tags.NLP}>
              NLP
            </div>
          </div>
          <h4 className="font-bold text-2xl">
            Introducing the Gab Hate Corpus: defining and applying hate-based rhetoric to social media posts at scale.
          </h4>
          <h5>
          Kennedy, B., Atari, M., Mostafazadeh Davani, A., <b>Yeh, L.</b>, Omrani, A.,..., Dehghani, M.      
          </h5>
          <div className="center">
            <a
              className="link"
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hJfLMWMAAAAJ&citation_for_view=hJfLMWMAAAAJ:UeHWp8X0CEIC"
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
            </div>
            <div className="tag" style={tags.NLP}>
              NLP
            </div>
          </div>
          <h4 className="font-bold text-2xl">
          Investigating the role of group-based morality in extreme behavioral expressions of prejudice. 
          </h4>
          <h5>
          Hoover, J., Atari, M., Mostafazadeh Davani, A., Kennedy, B., Portillo-Wightman, G., <b>Yeh, L.</b>, Dehghani, M.          </h5>
          <div className="center">
            <a
              className="link"
              href="https://www.nature.com/articles/s41467-021-24786-2"
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
            </div>
            <div className="tag" style={tags.Design}>
              Design
            </div>
          </div>
          <h4 className="font-bold text-2xl">
          Built Environment Design Interventions at the Exits of Secured Dementia Care Units: An Integrated Review of the Empirical Literature. 
          </h4>
          <h5>
          Anderson, D., Kota, S., <b>Yeh, L.</b>, Budson, A.          
          </h5>
          <div className="center">
            <a
              className="link"
              href="https://journals.sagepub.com/doi/abs/10.1177/19375867221125930"
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
            </div>
            <div className="tag" style={tags.CogSci}>
              Cognitive Science
            </div>
            <div className="tag" style={tags.HCI}>
              HCI
            </div>
          </div>
          <h4 className="font-bold text-2xl">
            Visual and cognitive processing of thin-ideal Instagram images containing idealized or disclaimer comments
          </h4>
          <h5>
            Amelia C. Coulter Bue & Kristen Harrison<br />
            (I am referenced in the Acknowledgements)
          </h5>
          <div className="center">
            <a
              className="link"
              href="https://www.sciencedirect.com/science/article/abs/pii/S1740144519301287"
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
            <div className="tag" style={tags.SocialPsych}>
              Social Psych
            </div>
            <div className="tag" style={tags.CogSci}>
              Cognitive Science
            </div>
            <div className="tag" style={tags.HCI}>
              HCI
            </div>
          </div>
          <h4 className="font-bold text-2xl">
            The looking glass selfie: Instagram use frequency predicts visual attention to high-anxiety body regions in young women
          </h4>
          <h5 style={{ whiteSpace: `pre-wrap` }}>
            Amelia C. Coulter Bue <br />
            (I am referenced in the Acknowledgements)
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
          Here's a random collection of fun things I've done over the past few years, professionally, academically, and personally!
          Feel free to directly click on the pictures to see more details and get direct access to related articles.
        </p>
        <div className="flex flex-col lg:flex-row xl:flex-row sm:flex-col xs:flex-col md:flex-col">
          <div className="lg:w-1/2 xl:w-1/2">
            {funStuff.map(function (f) {
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
            {funStuff2.map(function (f2) {
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
