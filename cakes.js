function cakes(recipe, available) {
  let qty;
  for (const ingredient in recipe) {
    let qtyPerIngredient = Math.trunc(available[ingredient] / recipe[ingredient])
    if(!qtyPerIngredient) { return 0 }
    if(!qty || qtyPerIngredient < qty) { qty = qtyPerIngredient }
  }
  return qty
}