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
        Technical Artist at <a rel="noopener noreferrer" href="https://www.wooga.com/" target="_blank">Wooga</a>
      </p>
      <h2>Hobbies</h2>
      <li>
        Bodybuilding / 2023 ~
      </li>
      <h2>Career Goals</h2>
      <ul>
        <li>
          ✅&#160;<s>Engineer / 2015</s>
          <ul>
            <li>
              ✅&#160;<s>Work as Engineer in 🇩🇪 / 2019</s>
            </li>
            <li>
              🚧 Launch a Unity engine course in 🇰🇷 / December 2022
            </li>
            <li>
              Write a Unity game engine book in 🇰🇷
            </li>
          </ul>
        </li>
        <li>
          ✅&#160;<s>Technical Artist / 2022</s>
          <ul>
            <li>
              ✅&#160;<s>Work as Technical Artist in 🇩🇪 / 2022</s>
            </li>
            <li>
              ✅&#160;<s>Stand as a speaker at <a rel="noopener noreferrer" href="https://2022.pycon.kr/" target="_blank">PyCon Korea 2022</a></s>
            </li>
            <li>
              Study at <a rel="noopener noreferrer" href="https://www.gobelins-school.com/formation/englishtrack-master-arts-character-animation-and-animated-filmmaking" target="_blank">Master of Arts in Character Animation and Animated Filmmaking at School L'image Gobelins</a> in 🇫🇷 / 2024 ~ 2025
            </li>
            <li>
              Write my own rendering engine (PSKREngine)
            </li>
            <li>
              Write my own game engine (PSKEngine)
            </li>
            {/* <li>
            Study at <a rel="noopener noreferrer" href="http://www.etc.cmu.edu/learn/about-the-etc/" target="_blank">Master of Entertainment Technology (MET) in Carnegie Mellon</a> in 🇺🇸 / 2024 ~ 2025
          </li>
          <ul>
            <li>
              Research at <a rel="noopener noreferrer" href="http://graphics.cs.cmu.edu/" target="_blank">Carnegie Mellon Graphics Lab</a> in 🇺🇸 / 2024 ~ 2025
            </li>
          </ul> */}
            <li>
              Write a Blender scripting book in 🇰🇷 with <a rel="noopener noreferrer" href="https://vielbooks.com/" target="_blank">비엘북스(VIELbooks)</a>
            </li>
            <li>
              Launch a Unity shader course in 🇰🇷
            </li>
            <li>
              Write a shader programming book in 🇰🇷
            </li>
            <li>
              Work as a Technical Artist in 🇯🇵
            </li>
            <li>
              Write a game feel book in 🇰🇷
            </li>
            <li>
              Stand as a speaker at <a rel="noopener noreferrer" href="https://unity.com/events/unite" target="_blank">Unity Unite</a>
            </li>
            <li>
              Stand as a speaker at <a rel="noopener noreferrer" href="https://gdconf.com/" target="_blank">GDC (Game Developer Conference)</a>
            </li>
          </ul>
        </li>
        <li>
          Art Director
        </li>
        <li>
          Game Director
        </li>
        <li>
          Game Critic
          <ul>
            <li>
              Write a game criticism book in 🇰🇷
            </li>
          </ul>
        </li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>
          <b>Wooga</b> — Working as a <i>Technical Artist</i> / January 2022 ~ Present
          <ul>
            <li>
              Currently working on an unannounced mobile game project
            </li>
          </ul>
        </li>
        <li>
          <b>Wooga</b> — Worked as an <i>Engineer</i> / April 2019 ~ November 2021
        </li>
        <li>
          <b>Maverick Games</b> — Worked as a <i>Game Programmer</i> / August 2015 ~ August 2018
          <ul>
            <li>
              Released <i><a rel="noopener noreferrer" href="https://store.steampowered.com/app/862490/Fantasy_Raiders/" target="_blank">Fantasy Raiders</a></i> on Steam (Windows, macOS)
            </li>
          </ul>
        </li>
      </ul>
      <h2>Languages</h2>
      <ul>
        <li>
          <b>Korean 🇰🇷</b> — Native
        </li>
        <li>
          <b>English 🇺🇸</b> — TOEFL iBT Total Score 97
        </li>
        <li>
          <b>French 🇫🇷</b> — Learning in progress targeting B1
        </li>
        <p style={{ color: 'lightgrey' }}>
          <li>
            <b>日本語 🇯🇵</b> — Learning in progress targeting JLPT N1
          </li>
          <li>
            <b>Deutsch 🇩🇪</b> — Learning in progress targeting B1
          </li>
        </p>
      </ul>
      <h2>Programming Languages</h2>
      <ul>
        <li>
          C, Modern C++, C#, Python, Rust, JavaScript, HTML, <p style={{ display: 'inline', color: 'lightgrey' }}>
            MEL(Maya Embedded Language), Kotlin, Haskell, Swift, Go, MASM(Microsoft Macro Assembler)
          </p>
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <b>Hongik University (Seoul Campus)</b> — Majored <i>Art History and Theory</i> (GPA 3.54/4.5) / March 2007 - February 2011
        </li>
      </ul>
      <h2>Publications</h2>
      <h3>Critics</h3>
      <ul>
        <li>
          <b>Wrote as Author</b> of <i>Seamless Society</i>, 21 July 2020, in collaboration with an online exhibition plartform DDDD (<a rel="noopener noreferrer" href="https://kakaotalk.iwinv.net/html/detail_en1.html?idx=11" target="_blank">English</a> / <a rel="noopener noreferrer" href="https://kakaotalk.iwinv.net/html/detail_ko1.html?idx=35" target="_blank">한글</a>)
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
        <b>Participated as Reviewer</b> of <i>Hands-On Unity 2021 Game Development - Second Edition (Packt), Written by Nicolas Alejandro Borromeo</i>
      </li>
      <li>
        <b>Participated as Reviewer</b> of <i>Unity 2021 Cookbook - Fourth Edition (Packt), Written by Matt Smith and Shaun Ferns</i>
      </li>
      <li>
        <b>Participated as Reviewer</b> of <i>Mind-Melding Unity and Blender for 3D Game Development (Packt), Written by Spencer Grey</i>
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
