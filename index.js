var recipes = {flour: "1 cup", milk: "1 cup", sugar: "1 tbsp"};

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, {key: value})
  return newObj
}