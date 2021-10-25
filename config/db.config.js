var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'usuarios',
   port: 3308
});

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});






/*var query = connection.query('INSERT INTO tbl_producto(codigo_producto,codigo_tipo_producto,codigo_presentacion,codigo_marca,codigo_clasificacion,codigo_unidad,valor_unidad,stock_minimo,stock_maximo,precio_sugerido,cantidad) VALUES(?,?,?,?,?,?,?,?,?,?,?)', [1267,1,1,1,1,12,1200,2,10,12000,28], function(error, result){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
}
);
connection.end();
var query = connection.query('SELECT codigo_Unidad,descripcionU FROM  tbl_unidad WHERE codigo_Unidad = ?', [1], function(error, result){
   if(error){
      throw error;
   }else{
      var resultado = result;
      if(resultado.length > 0){
         console.log(resultado[0].codigo_Unidad + ' ' + resultado[0].descripcionU);
      }else{
         console.log('Registro no encontrado');
      }
   }
}
);*/

/* var query = connection.query('DELETE  FROM  tbl_unidad WHERE codigo_Unidad = ?', [7], function(error, result){
   if(error){
      throw error;
   }else{
      console.log("Se ha eliminado el dato");
   }
}
   

var query = connection.query('UPDATE tbl_unidad SET descripcion = ? WHERE codigo_Unidad = ?', ['centimetros cuadrasos',2], function(error, result){
      if(error){
         throw error;
      }else{
         console.log("Se ha eliminado el dato");
      }
   }
   );

   var query = connection.query('INSERT INTO tbl_producto(codigo_producto,codigo_tipo_producto,codigo_presentacion,codigo_marca,codigo_clasificacion,codigo_unidad,valor_unidad,stock_minimo,stock_maximo,precio_sugerido,cantidad) VALUES(?,?,?,?,?,?,?,?,?,?,?)', [1999,1,1,1,1,1,1200,2,10,12000,28], function(error, result){
      if(error){
         throw error;
      }else{
         console.log(result);
      }
      }
   );*/

module.exports =connection;
