module.exports = {
  siteMetadata: {
    title: `Mutual Aid New Zealand (MANZ)`,
    description: `MANZ is a group of volunteers supporting local community groups organising mutual aid throughout the Covid-19 outbreak in Aotearoa New Zealand. We focus on providing resources and connecting people to their nearest local groups, willing volunteers and those in need.`,
    author: `@mutualaidnewzealand`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mutual Aid New Zealand`,
        short_name: `manz`,
        start_url: `/`,
        background_color: `#047BF2`,
        theme_color: `#047BF2`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69253367-21",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
