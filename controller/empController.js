//Import Meals Model for database data  
const empModel = require("../model/empModel");
//menu controller takes the request, response and next object 
// exports.getMenuController = (req, res, next) => {
//   //Get menu meals from model (Array)
//   const meals = mealModel.getMeals();
//   //Show JSON object of Meals Menu data
//   res.json(meals);
// };

exports.getEmpController = (req, res, next) => {
	console.log("get");
  //Get menu meals from model (Array)
  const emp = empModel.getEmp(req).then(function(data){
  		res.json(data);
  });
  //Show JSON object of Meals Menu data
}
  
  exports.setEmpController = (req, res, next) => {
  console.log(typeof(new Date(req.body.date)));
  console.log(new Date(req.body.date));
  req.body.date=new Date(req.body.date);
  const emp = empModel.insertEmp(req.body).then(function(data){
  		 res.json(data);
  		// res.render('home');
  });
};

  exports.putEmpController = (req, res, next) => {

  const emp = empModel.changeEmp(req).then(function(data){
  		res.json(data);
  });
};

 exports.deleteEmpController = (req, res, next) => {

  const emp = empModel.deleteEmp(req).then(function(data){
  		res.json(data);
  });
};

 exports.getHome = (req, res, next) => {

  		res.render('home');
};