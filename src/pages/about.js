import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import portrait from "../images/sungkukpark_portrait.png";

const AboutPage = () => {
  return (
  <Layout>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="About page of Sungkuk Park's blog."
      ></meta>
      <title>About</title>
      <link rel="canonical" href="https://sungkukpark.github.io/about" />
    </Helmet>
    <h1>About Sungkuk Park</h1>
    <img
      src={portrait}
      alt="Sungkuk Park's Portrait"
      title="Sungkuk Park's Portrait"
      width="256"
    />
    <p>
      Engineer at Wooga. Aspiring Technical Artist. Interested in Game Feel and Animation Programming.
      Occasional game critic.
      C++ enthusiast.
    </p>
    <h2>Publications</h2>
    <h3>Critics</h3>
    <ul>
      <li>
        <b>Wrote as Author</b> of <i>Seamless Society</i>, 21 July 2020, in collaboration with an online exhibition plartform DDDD (<a rel="noopener noreferrer" href="http://0000-dddd.com/en/texts/seamless-society/" target="_blank">English</a> / <a rel="noopener noreferrer" href="http://0000-dddd.com/ko/texts/seamless-society/" target="_blank">한글</a>)
      </li>
      <li>
      <b>Wrote as Author</b> of <i>Wallpeckers: Breaking down the barriers between media</i>, Article of Korean Art magazine Misulsegye, March 2019 (<a rel="noopener noreferrer" href="https://post.naver.com/viewer/postView.nhn?volumeNo=20035276" target="_blank">한글</a>)
      </li>
      <li>
        <b>Wrote as Author</b> of <i>The Possibility of the Impossibility of the "Art Games"</i>, Article of Korean Art magazine Misulsegye, February 2017
      </li>
    </ul>
    <h3>Tech Blog Posts</h3>
    <li>
      <b>Wrote as Translator & Editor</b> of <i>Game Level Generation Using Neural Networks</i>,  Featured post of Gamasutra (<a rel="noopener noreferrer" href="https://www.gamasutra.com/blogs/SeungbackShin/20180227/315017/Game_Level_Generation_Using_Neural_Networks.php" target="_blank">English</a>)
    </li>
    <h3>Technical Reviews</h3>
    <li>
      <b>Participated as Reviewer</b> of <i>Unity 2020 Mobile Game Development - Second Edition (Packt)</i>,  Written by John P. Doran
    </li>
    <li>
      <b>Participated as Reviewer</b> of <i>Hands-On Unity 2020 Game Development (Packt)</i>, Written by Nicolas Alejandro Borromeo
    </li>
    <li>
      <b>Participated as Reviewer</b> of <i>Hands-On Unity 2021 Game Development (Packt)</i>
    </li>
    <li>
      <b>Participated as Reviewer</b> of <i>Unity 2020 Cookbook (Packt)</i>
    </li>
  </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
