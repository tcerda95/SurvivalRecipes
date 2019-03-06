const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const METADATA_FILENAME = 'metadata.json';

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.owner === 'gatsby-transformer-remark') {
    const { fileAbsolutePath } = node;

    createNodeField({
      node,
      name: 'path',
      value: extractRecipePath(fileAbsolutePath)
    });

    createNodeField({
      node,
      name: 'locale',
      value: extractRecipeLocale(fileAbsolutePath)
    });

    const id = extractRecipeId(fileAbsolutePath);

    createNodeField({
      node,
      name: 'id',
      value: id
    });

    const metadataPath = extractMetadataPath(fileAbsolutePath);
    const metadata = JSON.parse(await readFile(metadataPath));

    for (const [name, value] of Object.entries(metadata)) {
      createNodeField({ node, name, value });
    }
  }
};

function extractRecipePath(absolutePath) {
  const recipeId = extractRecipeId(absolutePath);

  return `/recipes/${recipeId}`;
}

function extractRecipeLocale(absolutePath) {
  const recipeFilename = extractRecipeFilename(absolutePath);
  const splitted = recipeFilename.split('.');

  return splitted[1];  
}

function extractRecipeId(absolutePath) {
  const recipeFilename = extractRecipeFilename(absolutePath);
  const splitted = recipeFilename.split('.');

  return splitted[0];
}

function extractRecipeFilename(absolutePath) {
  const splitted = absolutePath.split('/');
  const len = splitted.length;

  // len - 1 corresponds to filename, len - 2 is recipe directory
  return splitted[len - 1];  
}

function extractMetadataPath(absolutePath) {
  const splitted = absolutePath.split('/');
  const len = splitted.length;
  const recipeDir = splitted.slice(0, len - 1).join('/');

  return `${recipeDir}/${METADATA_FILENAME}`;
}
