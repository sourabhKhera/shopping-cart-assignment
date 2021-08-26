export const registerConfig = {
  sectionLeftHeading: 'Signup',
  sectionLeftText: 'We do not share your personal details with anyone.',
  buttonText: 'Signup',
  formInputs: [
    {
      inputId: 'fName',
      inputName: 'firstName',
      label: 'First Name',
      inputType: 'text',
    },
    {
      inputId: 'lName',
      inputName: 'lastName',
      label: 'Last Name',
      inputType: 'text',
    },
    {
      inputId: 'email',
      inputName: 'emailId',
      label: 'Email',
      inputType: 'email',
    },
    {
      inputId: 'pswd',
      inputName: 'password',
      label: 'Password',
      inputType: 'password',
    },
    {
      inputId: 'cpswd',
      inputName: 'confirmPassword',
      label: 'Confirm Password',
      inputType: 'text',
    },
  ],
}

export const loginConfig = {
  sectionLeftHeading: 'Login',
  sectionLeftText: 'Get access to your Orders, Wishlist and Recommendations.',
  buttonText: 'Login',
  formInputs: [
    {
      inputId: 'email',
      inputName: 'emailId',
      label: 'Email',
      inputType: 'email',
    },
    {
      inputId: 'pswd',
      inputName: 'password',
      label: 'Password',
      inputType: 'password',
    },
  ],
}
