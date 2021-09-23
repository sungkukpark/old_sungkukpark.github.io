import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from 'gatsby'
import { rhythm } from "../utils/typography";
import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : "/" + (currentPage - 1).toString()
    const nextPage = "/" + (currentPage + 1).toString()
    const posts = this.props.data.allMarkdownRemark.edges
    const totalPostCount = this.props.data.allMarkdownRemark.totalCount
    return (
      <Layout>
        <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Home page of Sungkuk Park's blog."
        ></meta>
        <title>Home</title>
        <link rel="canonical" href="https://sungkukpark.github.io/" />
        </Helmet>
        <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Blog Posts
        </h1>
        <h4>{totalPostCount} Posts</h4>
        <div>
        {isFirst && (
        <Link to={"#"} style={{ color: 'inherit', textDecoration: 'inherit'}} rel="prev">
          ← Previous Page
        </Link>
        )}
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} style={{ display: 'flex', justifyContent: 'right' }} rel="next">
            Next Page →
          </Link>
        )}
        {isLast && (
          <Link to="#" style={{ display: 'flex', justifyContent: 'right', color: 'inherit', textDecoration: 'inherit' }} rel="next">
            Next Page →
          </Link>
        )}
      </div>
        {posts.map(({ node }) => {
        return <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {node.frontmatter.title}{" "}
            <span
              lang="en"
              css={css`
                color: #737373;
              `}
            >
              — {node.frontmatter.date}
            </span>
          </h3>
          <p
            css={css`
              color: #a4a4a4;
            `}
          >
            {node.excerpt}
          </p>
        </Link>
      </div>
      })}
      </div>
      <div>
        {Array.from({ length: numPages }, (_, i) => (
          (i + 1 === currentPage ?
            <Link key={`pagination-number${i + 1}`} to="#" style={{ marginRight: '.5rem', color: 'inherit', textDecoration: 'inherit' }}>
              {i + 1}
            </Link> :
            <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`} style={{ marginRight: '.5rem' }}>
            {i + 1}
            </Link>
          )
        ))}
      </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`