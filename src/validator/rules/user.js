export default {
  team_id: 'required',
  code: 'required|code_type|min:6|max:20',
  email: 'required|email',
  name: 'required',
  password: 'required|min:6|max:12',
  password_confirmation: 'required|min:6|max:12|confirmed:password',
  role_id: 'required',
  address: 'required',
  phone: 'required',
}