import "./blog-post.scss"

import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Center from "../components/center"
import Layout from "../components/layout"
import Products from "../components/products"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Center className="single-post">
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div class="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
          <Products products={post.frontmatter.products || []} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />
        </Center>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        products {
          image {
            publicURL
          }
          name
          price
          sku
        }
      }
    }
  }
`
