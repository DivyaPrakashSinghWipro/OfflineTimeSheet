var monk = require('monk');
var db =  monk('localhost:27017/Employee');
var collection = db.get('timeSheet');
var data;


exports.getEmp=(req)=>{
	return new Promise(
		function(resolve,reject){
			console.log(req.query);
			var query={};
			if(req.query.Emp_id!=null){
				
				query={Emp_id:req.query.Emp_id}
			}
			collection.find(query,function(err,doc){
	 		data=doc;
	 		
	 		resolve(data);
		}
		) 
		}
		)
}

exports.insertEmp=(data)=>{
	return new Promise(
		function(resolve,reject){
			collection.insert(data,function(err,doc){
				resolve(doc); 
			});
			
		}
		)
}

exports.changeEmp=(req)=>{
	return new Promise(
		function(resolve,reject){
			collection.update({Emp_ID:Number(req.query.Emp_ID)},req.body,function(err,doc){
				resolve(doc); 
			});
			
		}
		)
}

exports.deleteEmp=(req)=>{
	return new Promise(
		function(resolve,reject){

			var query={};
			if(req.query.Emp_ID!=null){
				
				query={Emp_ID:Number(req.query.Emp_ID)}
			}

			collection.remove(query,function(err,doc){
				resolve(doc); 
			});
			
		}
		)
}

