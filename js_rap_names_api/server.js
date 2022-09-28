const express = require("express");
const serveStatic = require("serve-static");
const app = express();
const PORT = process.env.PORT || 3000;

// serves all static files within the save folder
app.use(serveStatic("static"));

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    location: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Jonathan Bennet",
    location: "Chicage, Illinios",
  },
  dylan: {
    age: 29,
    birthName: "Dylan",
    location: "Dylan, Dylan",
  },
};

app.get("/api/:rapperName", (request, response) => {
  let rapperName = request.params.rapperName.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["dylan"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}!`);
});
