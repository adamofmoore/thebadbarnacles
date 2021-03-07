module.exports = {
    siteMetadata: {
        title: `The Bad Barnacles`,
        description: `The Bad Barnacles blend the psychedelic with the sultry and harken back to a groovier time of 50s-60s rock and surf-pop. Based out of Sacramento, CA.`,
        author: `@adamofmoore`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-sass",
        "gatsby-plugin-styled-components",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `styles`,
                path: `${__dirname}/src/styles`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                short_name: `starter`,
                start_url: `/`,
                background_color: `#fff`,
                icon: `src/images/tbb-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
