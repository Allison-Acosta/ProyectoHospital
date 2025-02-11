import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(username)) {
      return "El nombre de usuario solo debe contener letras.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (password.length <= 1) {
      return "La contraseña debe tener más de un carácter.";
    }
    return "";
  };

  const validateForm = (username, password) => {
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    setErrors({
      username: usernameError,
      password: passwordError,
    });

    return !usernameError && !passwordError;
  };

  return { errors, validateForm };
};

export default useValidation;