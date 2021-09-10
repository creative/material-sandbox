/**
 * Returns a callback function that uses the target identifier to match against a node identifier.
 * @param {string} target - The target node identifier.
 * @returns {func} - A callback that returns true if the target is matched. 
 */
const match = (target) => (
  (current) => target === current
);

export default match;