const messages = {
  _default : (field) => `${field} không hợp lệ.`,
  after : (field, [target]) => `The ${field} must be after ${target}.`,
  alpha_dash : (field) => `The ${field} may contain alpha-numeric characters as well as dashes and underscores.`,
  alpha_num : (field) => `The ${field} may only contain alpha-numeric characters.`,
  alpha_spaces : (field) => `The ${field} may only contain alphabetic characters as well as spaces.`,
  alpha : (field) => `The ${field} may only contain alphabetic characters.`,
  before : (field, [target]) => `The ${field} must be before ${target}.`,
  between : (field, [min, max]) => `${field} phải lớn hơn ${min} và nhỏ hơn ${max}.`,
  confirmed : (field) => `The ${field} confirmation does not match.`,
  credit_card : (field) => `The ${field} is invalid.`,
  date_between : (field, [min, max]) => `The ${field} must be between ${min} and ${max}.`,
  date_format : (field, [format]) => `The ${field} must be in the format ${format}.`,
  decimal : (field, [decimals] = ['*']) => `The ${field} must be numeric and may contain ${decimals === '*' ? '' : decimals} decimal points.`,
  digits : (field, [length]) => `The ${field} must be numeric and exactly contain ${length} digits.`,
  dimensions : (field, [width, height]) => `The ${field} must be ${width} pixels by ${height} pixels.`,
  email : (field) => `${field} cần là một địa chỉ email.`,
  ext : (field) => `The ${field} must be a valid file.`,
  image : (field) => `The ${field} must be an image.`,
  in : (field) => `The ${field} must be a valid value.`,
  ip : (field) => `The ${field} must be a valid ip address.`,
  max : (field, [length]) => `${field} phải nhỏ hơn ${length} ký tự.`,
  max_value : (field, [max]) => `The ${field} must be ${max} or less.`,
  mimes : (field) => `The ${field} must have a valid file type.`,
  min : (field, [length]) => `${field} phải ít nhất ${length} ký tự.`,
  min_value : (field, [min]) => `The ${field} must be ${min} or more.`,
  not_in : (field) => `The ${field} must be a valid value.`,
  numeric : (field) => `The ${field} may only contain numeric characters.`,
  regex : (field) => `The ${field} format is invalid.`,
  required : (field) => `${field} không được rỗng.`,
  size : (field, [size]) => `The ${field} must be less than ${size} KB.`,
  url : (field) => `The ${field} is not a valid URL.`
};

const attributes = {
  email           : "Email",
  password        : "Mật khẩu",
  old_password    : "Mật khẩu cũ",
  new_password    : "Mật khẩu mới",
};

const locale = {
  name : 'vi',
  messages,
  attributes
};

export default locale;