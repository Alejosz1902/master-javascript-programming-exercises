function removeProperty(obj, key) {
  // your code here
  obj[key]=true;
  delete obj[key];
  return obj;
}
