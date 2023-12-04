// Exporting a function as the default export
export default function hasValuesFromArray(setArr, values = []) {
  for (const value of values) {
    // Check if each value exists in the set
    if (!setArr.has(value)) return false;
  }
  // If all values exist in the set, return true
  return true;
}
