export function errorHandler({ errors, type, showKey }) {
  if (errors) {
    for (let errorType of Object.keys(errors)) {
      if (type.toLowerCase() === errorType.toLowerCase()) {
        if (showKey) {
          return `${capitalize(errorType)} ${errors[errorType][0]}`;
        } else {
          return errors[errorType][0];
        }
      }
    }
  }
}

function capitalize(string) {
  if (typeof string !== 'string')
    throw new Error(`${string} must be of type string`);

  return string.charAt(0).toUpperCase() + string.slice(1);
}
