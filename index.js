
var express=require("express");
var app=express();
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./views");
var SerialPort = require("serialport");
var serialport = new SerialPort("COM4");
//................................
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/test', urlencodedParser, function (req, res) {
	console.log(req.body);
   // response = {
   //     first_name:req.body.get_gt,
   //     //last_name:req.body.last_name
   // };
   //console.log(req.body);
   res.end(JSON.stringify(req.body));
})
//.....................mongoose......
var database=require('database');
//.............mqtt.....................
var mqtt = require('./node_modules/mqtt');
var client  = mqtt.connect('http://45.32.16.204');
//..............socket.io.......................
var server=require("http").Server(app);
var io=require("socket.io")(server);
server.listen(3000);
//.........................................
io.on("connection",function(socket){
	console.log(socket.id);
	socket.on("disconnect",function(){
	console.log("ngat ket noi"+socket.id);
	})

//..............................................
socket.on('dataAoClient',function(){
	database.select("select MaAo,TenAo,PhanLoai,QuanLy,TrangThaiAo,DATE_FORMAT(ThoiGianNuoi,'%e/%m/%Y') AS Ngay,DATEDIFF(now(),ThoiGianNuoi) AS SoNgayNuoi from tblqlao",function(data){
		console.log(data);
		socket.emit('dataAoServer',data);
	})	
})
socket.on("addAo",function(data){
database.insert('tblqlao',{TenAo:data.TenAo,PhanLoai:data.PhanLoai,QuanLy:data.QuanLy,TrangThaiAo:data.TrangThaiAo})
})
//...............................................
socket.on("updateAo",function(data){
	console.log(data);
database.update('tblqlao',{TenAo:data.TenAo,PhanLoai:data.PhanLoai,QuanLy:data.QuanLy,TrangThaiAo:data.TrangThaiAo},"MaAo="+data.MaAo)
})
socket.on("deleteAo",function(data){
database.delete("tblqlao","MaAo="+data)	
})
socket.on("getListSensor",function(data){
database.select('select *,DATE_FORMAT(ThoiGian,"%k:%i %e/%m/%Y") AS Ngay from tblthietbi where MaAo='+data,function(result){
	socket.emit("getListSensor",result);
})	
})
//...............................................
	socket.on("fan",function(data){
	  socket.broadcast.emit("fan-status",data);
		if(data=="bat"){
		client.publish('kit002/control',"ff/ff/ff/ff/1/ff");
		}
		if(data=="tat"){
	    client.publish('kit002/control', "ff/ff/ff/ff/0/ff");
		}	

	 })
//.......................................
	socket.on("den2",function(data){
		 socket.broadcast.emit("den2-status",data);
		if(data=="bat"){
		client.publish('kit002/control',"ff/ff/ff/ff/ff/1");
		}
		if(data=="tat"){
	    client.publish('kit002/control', "ff/ff/ff/ff/ff/0");
		}	
 	})
//...............................................
	socket.on("giam_sat",function(data){
		database.select('select*from giam_sat order by id desc limit 1',function(data){
		socket.emit("giam_sat",data);	
		})
	    
	 })

})



app.get("/hengio",function(req,res) {
	res.render("henGio");
})
app.get("/giamsat",function(req,res) {
	res.render("giamSat");
})

app.get("/thongke",function(req,res) {
	res.render("thongKe");
})
app.get("/chepham",function(req,res) {
	res.render("chePham");
})
app.get("/dieukhien",function(req,res) {
	res.render("dieuKhien");
})
app.get("/gioithieu",function(req,res) {
	res.render("gioiThieu");
})
app.get("/caidat",function(req,res) {
	res.render("caiDat");
})
app.get("/camera",function(req,res) {
	res.render("camera");
})
app.get("/phantich",function(req,res) {
	res.render("phanTich");
})
app.get("/test",function(req,res) {
	res.render("test");
})
app.get("/thoitiet",function(req,res) {
	res.render("thoiTiet");
})
app.get("/quanlyao",function(req,res){
	res.render("quanLyAo");
})
serialport.on('open', function(){
  console.log('Serial Port Opend');
  serialport.on('data', function(data){
      console.log(data.toString());
  });
  serialport.write("12tooial");
});

