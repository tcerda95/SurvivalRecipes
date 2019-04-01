// Group all frontmatter and fields attributes into a single recipe object
export function nodeToRecipe(node) {
  let recipe = node.frontmatter ? node.frontmatter : {};

  if (node.fields) {
    recipe = {
      ...recipe,
      ...node.fields
    };
  }

  return recipe;
}
