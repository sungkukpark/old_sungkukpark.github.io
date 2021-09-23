/* Render by "blog-list.js" instead */
// import React from "react";
// import { css } from "@emotion/react";
// import { Link, graphql } from "gatsby";
// import { rhythm } from "../utils/typography";
// import Layout from "../components/layout";
// import { Helmet } from "react-helmet";

// const IndexPage = ({ data }) => {
//   return (
//     <Layout>
//       <Helmet htmlAttributes={{ lang: "en" }}>
//         <meta charSet="utf-8" />
//         <meta
//           name="Description"
//           content="Home page of Sungkuk Park's blog."
//         ></meta>
//         <title>Home</title>
//         <link rel="canonical" href="https://sungkukpark.github.io/" />
//       </Helmet>
//       <div>
//         <h1
//           css={css`
//             display: inline-block;
//             border-bottom: 1px solid;
//           `}
//         >
//           Blog Posts
//         </h1>
//         <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
//         {data.allMarkdownRemark.edges.map(({ node }) => (
//           <div key={node.id}>
//             <Link
//               to={node.fields.slug}
//               css={css`
//                 text-decoration: none;
//                 color: inherit;
//               `}
//             >
//               <h3
//                 css={css`
//                   margin-bottom: ${rhythm(1 / 4)};
//                 `}
//               >
//                 {node.frontmatter.title}{" "}
//                 <span
//                   lang="en"
//                   css={css`
//                     color: #737373;
//                   `}
//                 >
//                   — {node.frontmatter.date}
//                 </span>
//               </h3>
//               <p
//                 css={css`
//                   color: #a4a4a4;
//                 `}
//               >
//                 {node.excerpt}
//               </p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default IndexPage;

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;