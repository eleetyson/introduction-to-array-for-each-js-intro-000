// Add your doToElementsInArray() function here:
function doToElementsInArray(callback, arr) {
  arr.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = 5 + index;
}
