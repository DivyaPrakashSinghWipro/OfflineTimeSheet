var empController=require("../controller/empController");

exports.appRoute=router=>{
	console.log("inside index");
	//router.get("/menu",mealsController.getMenuController);
	router.get("/emp",empController.getEmpController);
	router.post("/emp",empController.setEmpController);
	router.put("/emp",empController.putEmpController);
	router.delete("/emp",empController.deleteEmpController);
	router.get("/home",empController.getHome);
};