/**
 * Initial step values
 *
 * @param {number} numRows Number of rows
 * @param {number} numCols Number of columns
 * @returns {array}
 */

export default (numRows, numCols) => {
  const arr = []
  for (let y = 0; y < numRows; y++) {
    const row = []
    for (let x = 0; x < numCols; x++) {
      row.push(0)
    }
    arr.push(row)
  }
  return arr
}
