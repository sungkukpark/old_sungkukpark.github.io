import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const disqusConfig = {
    shortname: 'gamecriticism',
    config: {
      identifier: post.frontmatter.identifier,
      title: post.frontmatter.title
    },
  }  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <DiscussionEmbed {...disqusConfig} />
DiscussionEmbed      </div>
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