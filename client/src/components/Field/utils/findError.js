export function findError(errors, errorType) {
  if (errors) {
    for (let error of errors) {
      if (error.toLowerCase().startsWith(errorType.toLowerCase())) {
        return error;
      }
    }
  }
}
