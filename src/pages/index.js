import "./index.scss"

import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Center from "../components/center"
import Layout from "../components/layout"
import Products from "../components/products"
import SEO from "../components/seo"
import Reviews from "../components/reviews"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} top={<Bio isMain={true} />}>
        <SEO title="All posts" />
        <Center>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.id} className="post">
              <div className="post-aside">
                <small>{node.frontmatter.date}</small>
                <h3 className="post-title">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
              </div>
              <Products products={node.frontmatter.products} />
            </article>
          )
        })}
        </Center>
        <Reviews />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        filter: {fileAbsolutePath: {regex: "/\\/guides\\//"}},
      ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              publicURL
            }
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
    }
  }
`
