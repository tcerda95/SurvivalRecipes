const path = require('path');
const { languages } = require('./src/i18n/locales');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/RecipePost.jsx');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              locale
              path
              id
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.fields.locale}${node.fields.path}`,
      component: postTemplate,
      context: {
        languages,
        id: node.fields.id,
        locale: node.fields.locale,
        originalPath: node.fields.path,
        routed: true
      }
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes('404') || page.context.locale) {
    return;
  }

  const redirect = path.resolve('src/i18n/redirect.js');

  const redirectPage = {
    ...page,
    component: redirect,
    context: {
      languages,
      locale: '',
      routed: false,
      redirectPage: page.path,
    }
  };

  deletePage(page);
  createPage(redirectPage);

  languages.forEach(({ value }) => {
    const localePage = {
      ...page,
      originalPath: page.path,
      path: `/${value}${page.path}`,
      context: {
        languages,
        locale: value,
        routed: true,
        originalPath: page.path,
      }
    };

    createPage(localePage);
  });
};
