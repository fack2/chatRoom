const inputNameChange = e => {
  const name = e.nativeEvent.text

  return {
    type: 'INPUT_NAME_CHANGE',
    name,
  }
}

const inputEmailChange = e => {
  const email = e.nativeEvent.text
  return {
    type: 'INPUT_EMAIL_CHANGE',
    email,
  }
}

const inputPasswordChange = e => {
  const password = e.nativeEvent.text
  return {
    type: 'INPUT_PASSWORD_CHANGE',
    password,
  }
}

export {inputNameChange, inputEmailChange, inputPasswordChange}
