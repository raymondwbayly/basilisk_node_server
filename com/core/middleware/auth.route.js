var app = require("express")();
//This is the middleware function which will be called before any routes get hit which are defined after this point, i.e. in your index.js
app.use(function (req, res, next) {
    const appToken = req.cookies['app-token'];
    const userToken = req.cookies['user-token'];

  //Unsure how you're actually checking this, so some psuedo code below
  if (appToken && userToken) {
    next();
  }
  else {
    return res.status(403).send("Unauthorised!");
  }
});

//Define/include your controllers