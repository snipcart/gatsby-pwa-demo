import "./font.scss"
import "./layout.scss"

import React from "react"
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"

import Center from './center'
import Snipcart from "./snipcart";

class Layout extends React.Component {
  render() {
    const { location, title, children, top } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="home-title">
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
        <h3>
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
      <StaticQuery query={
        graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                snipcartApiKey
              }
            }
            footerImg: file(absolutePath: { regex: "/footer.svg/" }) {
              publicURL
            }
          }
        `
      } render={ data => (
      <div className="main">
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700&amp;display=swap" rel="stylesheet" />
        </Helmet>
        <Snipcart apiKey={data.site.siteMetadata.snipcartApiKey} />
        <header className="header">
            {header}
            {top}
        </header>
        <main>
          {children}
        </main>
          <footer>
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
                More PWA goodness<br /> in the {` `}
                <a href="https://snipcart.com/blog/pwa-example-ecommerce-gatsby">Blog Post</a> and {` `}
                <a href="https://github.com/snipcart/gatsby-pwa-demo">Github Repo</a>
              </p>
            </Center>
          </footer>
      </div>
    )}/>)
  }
}

export default Layout
