import React, { useCallback } from "react";
import isEmail from 'validator/lib/isEmail'

function useFormWithValidation({initValues} = {}) {
  const [values, setValues] = React.useState(initValues || {});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  // console.log('initValues=',initValues);
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    if(name === "username")
      target.validity.patternMismatch
        ? target.setCustomValidity('Поле должно содержать только латиницу, кириллицу, пробел или дефис')
        : target.setCustomValidity('')
    if(name === "email")
      !isEmail(value)
        ? target.setCustomValidity('Некорректный email')
        : target.setCustomValidity('')


    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    // console.log(name,value);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      console.log(newValues);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}

export default useFormWithValidation;