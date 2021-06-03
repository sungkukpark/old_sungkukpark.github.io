import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  let disqusConfig = {
    // TODO: Add url and identifier to Disquis config object
    // url: `${config.siteUrl+location.pathname}`,
    // identifier: post.frontmatter.identifier,
    title: post.frontmatter.title,
  }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        {/* <CommentCount config={disqusConfig} placeholder={'...'} /> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <Disqus config={disqusConfig} /> */}
      </div>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`