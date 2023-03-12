/**
 * Captures an exception and sends it to LogRocket
 * @param message
 * @constructor
 */
function StudioError(message) {
  this.message = message
  console.error(this)
}

StudioError.prototype = new Error()

export default StudioError
