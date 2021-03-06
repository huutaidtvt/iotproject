var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mqtt"
});
module.exports={
'insert':function(table,data){
		con.connect(function(err) {
				var obj=data;
				var field_list='';
				var field_value='';
				for(var key in obj){
					field_list+=','+key;
					field_value+=','+obj[key];
				}
				field_list=field_list.substring(1);
				field_value=field_value.substring(1);
				sql='INSERT INTO '+table+'('+field_list+') VALUES ("' +field_value+'")' ;
				con.query(sql, function (err, result) {
				 if (err) throw err;
					    console.log("1 record inserted, ID: " + result.insertId);
					  });
				});
		},

'update':function(table,data,where){
		con.connect(function(err) {
		var obj=data;
		var sql='';
		for(var key in obj){
			sql+=key+'="'+obj[key]+'",';
		}
		sql=sql.substring(0,sql.length-1);
		sql='UPDATE '+table+ ' SET '+sql+' WHERE ' +where ;
		console.log(sql);
		con.query(sql, function (err, result) {
		 if (err) console.log(err);
			    console.log(result.affectedRows + " record(s) updated");
			  });
		});
},

'select':function(sql,callback){
	  con.query(sql, function (err, result, fields) {
	    if (err) throw err;
	   callback(result);
	  });
},
'delete':function(table,where){
	con.connect(function(err) {
	  if (err) throw err;
	  var sql = "DELETE FROM "+table+" WHERE "+where;
		  con.query(sql, function (err, result) {
			    if (err) throw err;
			    console.log("Number of records deleted: " + result.affectedRows);
		  });
	});
}
};
