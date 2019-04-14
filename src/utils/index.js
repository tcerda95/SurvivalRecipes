// Group all frontmatter and fields attributes into a single recipe object
export function nodeToRecipe(node) {
  let recipe = node.frontmatter ? node.frontmatter : {};

  if (node.fields) {
    recipe = {
      ...recipe,
      ...node.fields
    };

    // If cover image retrieved, replace cover node by the cover image itself
    if (node.fields.cover) {
      const childImageSharp = node.fields.cover.childImageSharp;
      recipe.cover = childImageSharp.fixed || childImageSharp.fluid;
    }
  }

  return recipe;
}
