class ApiResponse {
  constructor(statusCode, message, data = "Success") {
    this.statusCode = statusCode
    this.message = message
    this.data = data
    this.success = true
    this.statusCode = statusCode < 400
  }
}