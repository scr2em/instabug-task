# Instabug - task

This project is deployed on Netlify [Check Live Demo](https://instabug.netlify.app/).

the application consist of 3 pages

a. public page => /404

b. private page => /welcome

c. Not for Authenticated users => /login

> Due to the restriction on passwords (The password must contain at least 1 uppercase letters and one number), I changed the passwords..

```
const users = [
  { email: "mohamed0@instabug.com", password: "12345678A" },
  { email: "mohamed1@instabug.com", password: "12345678A" },
  { email: "mohamed2@instabug.com", password: "12345678A" },
  { email: "mohamed3@instabug.com", password: "12345678A" },
  { email: "mohamed4@instabug.com", password: "12345678A" },
  { email: "mohamed5@instabug.com", password: "12345678A" },
  { email: "mohamed6@instabug.com", password: "12345678A" },
  { email: "mohamed7@instabug.com", password: "12345678A" },
];
```

# Tecknologies used

1. `React`

2. `Redux` and `React-Redux` for state managemenets.

3. `React Router` for client-side navigation.

4. Inputs validation using `Formik`.

5. `Cypress` for automation tests.

# Automation tests using cypress

## Login page

- Scenario 1

  1.  Enter an email address that doesn’t exist in the login list
  2.  Enter any password
  3.  Click on the login button
  4.  Validate that the error message ‘ you email and/or password are incorrect’ shows

- Scenario 2
  1. Enter an email address that exists in the login list
  2. Enter any wrong password
  3. Click on the login button
  4. Validate that the error message ‘ you email and/or password are incorrect’ shows

* Scenario 3

  1. Enter an email address that exists in the login list
  2. Enter the right password
  3. Click on login button
  4. Validate that the browser will redirect to the welcome page

- Scenario 4

  1. Enter not a valid email address ‘dddd’
  2. Unfocus the textbox
  3. Validate that the red validation message will appear
  4. Validate that the textbox border will be red
