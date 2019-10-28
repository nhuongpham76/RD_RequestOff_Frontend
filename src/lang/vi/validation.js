const messages = {
  _default : (field) => `${field} không hợp lệ.`,
  after : (field, [target]) => `The ${field} must be after ${target}.`,
  alpha_dash : (field) => `The ${field} may contain alpha-numeric characters as well as dashes and underscores.`,
  alpha_num : (field) => `The ${field} may only contain alpha-numeric characters.`,
  alpha_spaces : (field) => `The ${field} may only contain alphabetic characters as well as spaces.`,
  alpha : (field) => `The ${field} may only contain alphabetic characters.`,
  before : (field, [target]) => `The ${field} must be before ${target}.`,
  between : (field, [min, max]) => `${field} phải lớn hơn ${min} và nhỏ hơn ${max}.`,
  confirmed : (field) => `${field} chưa được khớp.`,
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
  ip : (field) => `${field} phải là địa chỉ ip.`,
  max : (field, [length]) => `${field} phải nhỏ hơn ${length} ký tự.`,
  max_value : (field, [max]) => `The ${field} must be ${max} or less.`,
  mimes : (field) => `The ${field} must have a valid file type.`,
  min : (field, [length]) => `${field} phải ít nhất ${length} ký tự.`,
  min_value : (field, [min]) => `The ${field} must be ${min} or more.`,
  not_in : (field) => `The ${field} must be a valid value.`,
  numeric : (field) => `${field} chỉ có thể là ký tự số.`,
  regex : (field) => `The ${field} format is invalid.`,
  required : (field) => `${field} không được rỗng.`,
  size : (field, [size]) => `${field} cần phải nhỏ h ${size} KB.`,
  url : (field) => `${field} có url không hợp lệ.`,
  code_type : (field) => `${field} cần phải chứa là ký tự (a-z, A-Z, _).`,
};

const attributes = {
  team_id: "Team",
  email: "Email",
  code: "Mã code",
  address: "Địa chỉ",
  password: "Mật khẩu",
  name: "Tên",
  password_confirmation: "Xác nhận mật khẩu",
};

const locale = {
  name : 'vi',
  messages,
  attributes
};

export default locale;