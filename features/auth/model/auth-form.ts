import * as yup from 'yup';

export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const emailSchema = yup
  .string()
  .trim()
  .email('Enter a valid email address.')
  .required('Email is required.');

const passwordSchema = yup
  .string()
  .min(8, 'Password must be at least 8 characters.')
  .required('Password is required.');

export const loginValidationSchema: yup.ObjectSchema<LoginFormValues> = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerValidationSchema: yup.ObjectSchema<RegisterFormValues> = yup.object({
  name: yup.string().trim().min(2, 'Full name must be at least 2 characters.').required('Full name is required.'),
  email: emailSchema,
  password: passwordSchema,
  passwordConfirmation: yup
    .string()
    .required('Please confirm your password.')
    .oneOf([yup.ref('password')], 'Passwords do not match.'),
});
