import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function stars(n, max) {
    let stars = "";
    for(var i=1; i<=max; i++) {
        if(i<=n) {
            stars += "★";
        } else {
            stars += "☆";
        }
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
    <section
      style={{
        display: `flex`,
      }}
    >
        {data.allMarkdownRemark.nodes.map((node) => {
            return (
                <article key={node.id} style={{flex: `1 1 100%`, margin: `10px`}}>
                    <header style={{display: `flex`, alignItems: `center`}}>
                        {node.frontmatter.picture
                            ? <img style={{margin: 0, width: `80px`, height: `80px`, border: `4px solid black`, borderRadius: `100%`}}
                                src={node.frontmatter.picture.publicURL} alt={node.frontmatter.name} />
                            : null}
                        <div style={{marginLeft: `20px`}}>
                            <h3 style={{margin: 0}}>{node.frontmatter.name}</h3>
                            <p>{stars(node.frontmatter.rating || 3.5, 5)}</p>
                        </div>
                    </header>
                    <div style={{marginBottom: 0}}
                        dangerouslySetInnerHTML={{
                            __html: node.html,
                    }}
                    />
                </article>
            );
        })}
    </section>
  )
}

export default Reviews

