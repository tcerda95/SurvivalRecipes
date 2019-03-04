function extractRecipePath(absolutePath) {
  const recipeDir = extractRecipeDir(absolutePath);

  return `/recipes/${recipeDir}`;
}

function extractRecipeDir(absolutePath) {
  const splitted = absolutePath.split('/');
  const len = splitted.length;

  // len - 1 corresponds to filename, len - 2 is recipe directory
  return splitted[len - 2]; 
}

module.exports = {
  extractRecipePath,
  extractRecipeDir
};
