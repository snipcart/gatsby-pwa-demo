module.exports = {
  blogPostDir: "guides", // The name of directory that contains your posts.
  siteTitle: "Snipcart's Zombie\xa0survival using\xa0GatsbyJS", // Site title.
  siteTitleAlt: "GatsbyJS Progressive Web App for e-commerce Demo", // Alternative site title for SEO.
  siteLogo: "/logos/logo.svg", // Logo used for SEO and manifest.
  siteUrl: "https://snipcart.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-pwa-demo/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A demo Progressive Web App with GatsbyJS and Snipcart",
  siteRss: "/rss.xml", // Path to the RSS file.
  postDefaultCategoryID: "Tech", // Default category for posts.
  snipcartApiKey: "MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4",
  userName: "Material User", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Your Cart",
      iconClassName: "fa fa-shopping-cart",
      className: "snipcart-checkout"
    },
    {
      label: "GitHub",
      url: "https://github.com/snipcart/gatsby-pwa-demo",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Snipcart",
      iconClassName: "fa fa-twitter"
    }
  ]
};
