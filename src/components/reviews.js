import "./reviews.scss"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Center from "./center";

function stars(n, max) {
    let stars = [];
    for(var i=1; i<=max; i++) {
      stars.push(
        <span key={i} className={i<=n ? 'star-dark' : 'star-light'}>★{` `}</span>
      )
    }
    return stars;
}

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query ReviewQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: {fileAbsolutePath: {regex: "/\\/reviews\\//"}},
        ) {
          nodes {
            id
            html
            fields {
              slug
            }
            frontmatter {
              name
              picture {
                  publicURL
              }
              rating
            }
            fileAbsolutePath
          }
        }
      }
  `)

  return (
    <section className="reviews">
      <Center>
      <h2>Testimonials</h2>
      <div className="reviews-list">
        {data.allMarkdownRemark.nodes.map((node) => (
            <article key={node.id}>
              <img src={node.frontmatter.picture.publicURL} alt={node.frontmatter.name} />
              <div>
                <header>
                  <h3 className="review-name">{node.frontmatter.name}</h3>
                  <p style={{margin: 0}}>{stars(node.frontmatter.rating || 3.5, 5)}</p>
                </header>
                <div dangerouslySetInnerHTML={{
                        __html: node.html,
                }} />
              </div>
            </article>
        ))}
        </div>
      </Center>
    </section>
  )
}

export default Reviews

