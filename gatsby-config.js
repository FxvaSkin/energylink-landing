module.exports = {
  siteMetadata: {
    siteUrl: `https://energy-link.kz`,
    title: `Промышленная Автоматика Системы Управления Прикладное программирование`,
    description: `Разработка внедрение модернизация автоматики: ПЛК, HMI, SCADA, Преобразователи частоты, датчики, полевые шины, сети, алгоритмы, программирование контроллеров`,
    items: [
      { key: 'about', to: '#about', title: 'Деятельность' },
      { key: 'usedin', to: '#usedin', title: 'Применение' },
      { key: 'portfolio', to: '#portfolio', title: 'Портфолио' },
      { key: 'contacts', to: '#contacts', title: 'Контакты' },
    ],
    author: `@fxvaskin`,
    emails: [`Energy.Link@mail.ru`],
    phoneNumbers: [`+7 701 712 67 64`, `+7 705 965 50 82`],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
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
        name: `energylink-landing`,
        short_name: `energylink`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-159025109-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
      },
    },
  ],
}
