module.exports = {
  siteMetadata: {
    title: `Gatsby PWA Survival Guide`,
    author: `Charles Ouellet`,
    description: `A simple blog demonstrating how Gatsby PWA can save you`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/guides`,
        name: `guide`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/reviews`,
        name: `review`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

const siteMetadata = module.exports.siteMetadata;

module.exports.plugins.push(
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: `PWA Survival`,
      start_url: `/`,
      background_color: `#F5E35C`,
      theme_color: `#bdbdbd`,
      display: "standalone",
      icon: `content/assets/gatsby-icon.png`,
    },
    // options: {
    //   icons: [
    //     {
    //       src: "/logos/logo.png",
    //       sizes: "192x192",
    //       type: "image/png"
    //     },
    //     {
    //       src: "/logos/logo.svg",
    //       sizes: "72x72 96x96 128x128 256x256"
    //     }
    //   ]
    // }
  });
