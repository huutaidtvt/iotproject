var database = require("database");
//database.update('giam_sat',{'nhiet_do':'12'},'id=1');
//database.hello();
//database.sayHelloInSpanish();
// database.select('select*from giam_sat where id=1',function(data){
// 	console.log(data);
// })
database.delete('giam_sat','id=1');