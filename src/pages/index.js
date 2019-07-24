import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Reviews from "../components/reviews"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let index = 0;

    return (
      <Layout location={this.props.location} title={siteTitle} top={<Bio />}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const hasImage = !!node.frontmatter.cover
          const odd = hasImage && index++ % 2 === 1
          return (
            <div style={{display: `flex`, flexDirection: odd ? `row-reverse` : `row`}} key={node.fields.slug}>
              <div style={{display: `flex`, flex: `1 1 100%`, margin: `10px`, alignItems: `center`}}>
                <div>
                <h3
                  style={{margin: 0}}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p style={{marginBottom: 0}}
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
                <div style={{display: `flex`, placeItems: `baseline`, textAlign: `center`}}>
                  {node.frontmatter.products.map(product =>{
                    return (
                      <article style={{flex:`1 1 100%`, margin: `10px`, display: `flex`, flexDirection: `column`}}>
                        <img style={{margin: 0}}
                          src={product.image.publicURL}
                          alt={product.name} />
                        <button style={{backgroundColor: `rgba(50, 66, 255, 0.3)`, border: `none`, margin: `10px`}}
                          class="snipcart-add-item"
                          data-item-id={product.sku}
                          data-item-name={product.name}
                          data-item-price={product.price}
                          >${product.price}</button>
                        <p>
                          {product.name}
                        </p>
                      </article>
                    )
                  })}
                </div>
                </div>
              </div>
              {hasImage ? (
              <div style={{flex: `1 1 100%`, margin: `10px`, display: `flex`, alignItems: `center`}}>
                <img src={node.frontmatter.cover.publicURL} style={{margin:0, width: `100%`, maxHeight: `100%`}} />
              </div>
              ) : null}
            </div>
          )
        })}
        <hr />
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
