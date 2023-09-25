export type ValidationResult = {
  isValid: boolean;
  message: string | null;
};

const regexForDigits = /\d/;
const regexForUppercaseCharacter = /[A-Z]/;
const regexForLowercaseCharacter = /[a-z]/;
const regexForLowercaseAndUppercaseCharacter = /[a-zA-Z]/;
const regexForEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const validateUserName = (name: string): ValidationResult => {
  if (name.length < 5) {
    return {
      isValid: false,
      message: 'User name should have at least 5 characters.',
    };
  }
  // Check that user name contains at least one digit
  else if (!regexForDigits.test(name)) {
    return {
      isValid: false,
      message: 'User name has to contain at least 1 digit.',
    };
  }
  // Check that user name contains at least one character in lowercase
  else if (!regexForLowercaseCharacter.test(name)) {
    return {
      isValid: false,
      message: 'User name has to contain at least 1 lowercase character.',
    };
  }
  // Check that name contains at least one uppercase character
  else if (!regexForUppercaseCharacter.test(name)) {
    return {
      isValid: false,
      message: 'User name has to contain at least 1 uppercase character.',
    };
  } else {
    return {
      isValid: true,
      message: null,
    };
  }
};

export const validateUserPassword = (password: string): ValidationResult => {
  if (password.length < 5) {
    return {
      isValid: false,
      message: 'Password should have at least 5 characters.',
    };
  }
  // Check that password contains at least one digit
  else if (!regexForDigits.test(password)) {
    return {
      isValid: false,
      message: 'Password has to contain at least 1 digit.',
    };
  }
  // Check that password contains at least one character in uppercase or in lowercase
  else if (!regexForLowercaseAndUppercaseCharacter.test(password)) {
    return {
      isValid: false,
      message: 'Password to contain at least 1 letter.',
    };
  } else {
    return {
      isValid: true,
      message: null,
    };
  }
};

export const validateUserEmail = (email: string): ValidationResult => {
  if (!regexForEmail.test(email)) {
    return {
      isValid: false,
      message: 'Email is not valid.',
    };
  } else {
    return {
      isValid: true,
      message: null,
    };
  }
};

export const validateUserCredentials = (
  name: string,
  password: string,
  email: string | undefined
): ValidationResult => {
  if (email) {
    const emailValidationResult = validateUserEmail(email);

    if (!emailValidationResult.isValid) {
      return emailValidationResult;
    }
  }

  const nameValidationResult = validateUserName(name);

  if (!nameValidationResult.isValid) {
    return nameValidationResult;
  }

  const passwordValidationResult = validateUserPassword(password);

  if (!passwordValidationResult.isValid) {
    return passwordValidationResult;
  }

  return passwordValidationResult;
};
