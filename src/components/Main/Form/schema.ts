import * as yup from 'yup';
const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);
export const schema = yup.object().shape({
  name: yup.string().trim().required("NameRequired").min(2, 'MinimalLengthName'),
  email: yup.string().required('EmailRequired').matches(regExpEmail, 'IncorrectEmail'),
});
