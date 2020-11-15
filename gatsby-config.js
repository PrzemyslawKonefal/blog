module.exports = {
  siteMetadata: {
    title: `Przemysław Konefał`,
    name: `Przemysław Konefał`,
    siteUrl: `https://przemyslaw-konefal.pl`,
    description: `Czas jest ograniczony. Wykorzystuj go mądrze`,
    hero: {
      heading: `Blog osobisty`,
      maxWidth: 652,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/pkonefal/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/przemyslawkonefal1`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://przemyslaw-konefal.us7.list-manage.com/subscribe/post?u=15ce2fbea9c4394d959edc747&amp;id=074240b497',
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'przemyslaw-konefal'
      }
    }
  ],
};
