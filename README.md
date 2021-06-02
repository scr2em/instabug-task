# Instabug - task

This project is deployed on Netlify [Check Live Demo](https://instabug.netlify.app/).

Due to the restriction on passwords (The password must contain at least 1 uppercase letters and one number), I changed the passwords..

```
const users = [
  { email: "mohamed@instabug.com", password: "12345678A" },
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

the application consist of 3 pages
a- public page => /404
b- private page => /welcome
c- Not for Authenticated users => /login
