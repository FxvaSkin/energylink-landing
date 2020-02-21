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
  ],
}
