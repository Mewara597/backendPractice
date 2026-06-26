class ApiError extends Error {
  constructorm(statusCode, message = 'Something went wrong ', error = [], stcak = "") {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.success = false
    this.errors = errors


    if (statck) {
      this.stack = statck
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}


export { ApiError }