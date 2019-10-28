export default function (VeeValidate) {
  VeeValidate.Validator.extend('code_type', {
    validate: value => {
      let pattern = RegExp("^[a-z0-9_]+$");
      return pattern.test(value);
    }
  });
}