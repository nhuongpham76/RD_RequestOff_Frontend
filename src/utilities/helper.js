export default class Helper {
  static isFilledForm(value) {
    if (value instanceof Object) {
      value = Object.values(value);
    }

    for (let i = 0; i < value.length; i++) {
      if (value[i] === '' || value[i] === null) {
        return false;
      }
    }
    return true;
  }
}