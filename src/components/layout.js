import "./layout.scss"

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Center from './center'

class Layout extends React.Component {
  render() {
    // const data = useStaticQuery(graphql`
    //   query LayoutQuery {
    //     footerImg: file(absolutePath: { regex: "/footer.svg/" }) {
    //       publicURL
    //     }
    //   }
    // `)

    const { location, title, children, top } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div class="main">
        <header style={{backgroundColor: `rgba(50, 66, 255, 0.3)`}}>
          <Center>
            {header}
            {top}
          </Center>
        </header>
        <main>
          <Center>{children}</Center>
        </main>
        <StaticQuery query={
          graphql`
            query LayoutQuery {
              footerImg: file(absolutePath: { regex: "/footer.svg/" }) {
                publicURL
              }
            }
          `
        } render={ data => (
          <footer style={{backgroundColor: `rgba(50, 66, 255, 0.3)`}}>
            <Center style={{
              backgroundImage: `url(${data.footerImg.publicURL})`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `right`,
            }}>
              <p>
                Demo built with
                {` `} <a href="https://www.gatsbyjs.org/">Gatsby</a> &amp;
                {` `} <a href="https://snipcart.com/">Snipcart</a>
              </p>
              <p>
                More PWA goodness in the {` `}
                <a href="https://snipcart.com/blog/pwa-ecommerce-example-gatsby">Blog Post</a> and {` `}
                <a href="https://github.com/snipcart/gatsby-pwa-demo">Github Repo</a>
              </p>
            </Center>
          </footer>
        )}/>
      </div>
    )
  }
}

export default Layout
