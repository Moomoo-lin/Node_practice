var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',    
  password : 'lovedali99',    //你的密碼
  database : 'test'    //你的資料庫
});

connection.connect();

connection.query('SELECT * from city', function (error, results, fields) {
  if (error) throw error;
  for(var i=0;i<results.length;i++){
    console.log('The results is: '+results[i].ID+' '+results[i].Name+' '+results[i].Population);
  }
 //console.log(results)
});