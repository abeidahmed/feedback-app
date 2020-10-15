export function simpleEmailValidation(string) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(string);
}
