const path = require('path');
const { languages } = require('./src/i18n/locales');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/blogPost.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              locale
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.frontmatter.locale}${node.frontmatter.path}`,
      component: postTemplate,
      context: {
        languages,
        title: node.frontmatter.title,
        locale: node.frontmatter.locale,
        routed: true,
        originalPath: node.frontmatter.path
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
