var productosController = require("./api/controladores/productosController.js").productosController


app.post("/productos/guardar", function(request, response){
    productosController.guardar(request, response) 
})

 app.post("/productos/listar", function(request, response){
    productosController.listar(request, response) 
 })
 

 app.post("/productos/modificar", function(request, response){  
    productosController.modificar(request, response)  
 })


 app.post("/productos/eliminar", function (request, response){
    productosController.eliminar(request, response)  
 })


 app.post("/productos/listarporcodigo", function (request, response){
   productosController.listarporcodigo(request, response)  
})