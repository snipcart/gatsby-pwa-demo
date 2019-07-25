import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import profilePic from "../assets/profile-pic.svg"

const Bio = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { isMain } = props;
  const { author } = data.site.siteMetadata
  return (
    <div className="bio">
      {isMain ? null : <img src={profilePic} />}
      <div>
        <p>
          Survival blog edited by <strong>{author}</strong> {` `}
          from <a href="https://snipcart.com">Snipcart</a> {` `}
          who lived for two years in a remote and scary part of central Canada.
        </p>
        <p>
          It's the guy to trust in case of a zombie apocalypse.
        </p>
      </div>
    </div>
  )
}

export default Bio
