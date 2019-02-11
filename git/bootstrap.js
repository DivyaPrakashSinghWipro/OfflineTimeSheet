route = require("./routes/index");

module.exports = (app, router) => {
	console.log("inside boot strape");
  //Initialize Routes
  route.appRoute(router);
};