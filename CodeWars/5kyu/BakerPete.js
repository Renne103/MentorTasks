function cakes(recipe, available){
  let countCakes = 10000;
  for (let ingredient in recipe){
    if (available[ingredient]){
      let currCakes = Math.floor(available[ingredient] / recipe[ingredient] || 0)
      if (currCakes < countCakes){
        countCakes = currCakes
      }
    }
    else{
      countCakes = 0;
    }
  }
  return countCakes;
}