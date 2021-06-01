const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8080;

//fake db
const users = [
  { email: "mohamed@instabug.com", password: "12345678" },
  { email: "mohamed1@instabug.com", password: "12345678" },
  { email: "mohamed2@instabug.com", password: "12345678" },
  { email: "mohamed3@instabug.com", password: "12345678" },
  { email: "mohamed4@instabug.com", password: "12345678" },
  { email: "mohamed5@instabug.com", password: "12345678" },
  { email: "mohamed6@instabug.com", password: "12345678" },
  { email: "mohamed7@instabug.com", password: "12345678" },
];

//middlewares
app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.body);

  let { email, password } = req.body;
  let exist = users.find((user) => user.email == email);

  if (!exist) {
    return res.sendStatus(404).end();
  }
  if (exist.password != password) {
    return res.sendStatus(403).end();
  }
  var access_token = jwt.sign({ email, password }, "verySecret");

  res.json({ email, password, access_token });
});

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
