var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign(recipes, {key: value})
}


//function updateObjectWithKeyAndValue(object, key, value){
  //recipes[key] = value
  //return recipes
//}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}