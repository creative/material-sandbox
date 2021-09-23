/**
 * Converts a camel case string into title case.
 * @param {string} string - The string to convert into title case.
 * @returns - A title case string.
 */
const titleCase = (string) => {
  const result = string.replace(/([A-Z])/g, " $1");

  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default titleCase;
