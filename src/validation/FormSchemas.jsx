import * as Yup from 'yup';

// Error Messages
const requiredField = 'Required field';
const validText = 'Please enter a valid text';
const validEmail = 'Please enter a valid email format';
const validNumber = 'Please enter a valid number';
const validNumPositive = 'The number must be greater than 0';
const validMinLenght = (characters) =>
  ` Please enter ${characters} characters minimum`;

// Regex
const passwordRegex = /[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_!?]/;

// Validations
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email(validEmail).required(requiredField),
  password: Yup.string()
    .min(8, validMinLenght(8))
    .matches(passwordRegex, validText)
    .required(requiredField),
});

export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, validMinLenght(8))
    .matches(passwordRegex, validText)
    .required(requiredField),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email(validEmail).required(requiredField),
  name: Yup.string().required(requiredField),
  surname: Yup.string().required(requiredField),
  password: Yup.string()
    .min(8, validMinLenght(8))
    .matches(passwordRegex, validText)
    .required(requiredField),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(requiredField),
  gender: Yup.string().required(requiredField),
  birthDate: Yup.string().required(requiredField),
});

export const ProfileSchema = Yup.object().shape({
  email: Yup.string().email(validEmail).required(requiredField),
  name: Yup.string().required(requiredField),
  surname: Yup.string().required(requiredField),
  birthDate: Yup.string().required(requiredField),
  gender: Yup.string().required(requiredField),
  // avatar: Yup.string().required(requiredField),
});

export const TransferSchema = Yup.object().shape({
  amount: Yup.number()
    .positive(validNumPositive)
    .required(requiredField)
    .typeError(validNumber),
});

export const DepositSchema = Yup.object().shape({
  amount: Yup.number()
    .positive(validNumPositive)
    .required(requiredField)
    .typeError(validNumber),
});

export const BalanceSchema = (balance) =>
  Yup.object().shape({
    receiverData: Yup.object().required(requiredField).typeError(requiredField),
    amount: Yup.number()
      .positive(validNumPositive)
      .required(requiredField)
      .typeError(validNumber)
      .test(
        'Balance-Validation',
        'We´re sorry, this is more than you can transfer right now. Please enter a lower amount',
        (value) => value <= balance,
      ),
  });
