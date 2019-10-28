export default {
  team: 'required',
  email: 'required|email',
  name: 'required|confirmed:email',
  password: 'required|min:6|max:12',
  password_confirmation: 'confirmed:password',
  role: 'required',
}