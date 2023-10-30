var productosController ={}
var productosModel = require("../modelos/productosModel.js").productosModel

productosController.guardar = function (request,response){
    try{
        
        var post ={
            codigo:request.body.codigo,
            nombre:request.body.nombre,
            precio:request.body.precio,
            descripcion:request.body.descripcion,
        }
    
        if(post.nombre == undefined|| post.nombre == null|| post.nombre== ""){
                response.json({state:false,mensaje:"el campo nombre es obligatorio"})
                return false
            }
    
        if(post.precio == undefined|| post.precio == null|| post.precio== ""){
                response.json({state:false,mensaje:"el campo precio es obligatorio"})
                return false
            }
        if(post.codigo == undefined|| post.codigo== null|| post.codigo== ""){
                response.json({state:false,mensaje:"el campo codigo es obligatorio"})
                return false
            }
        if(post.descripcion == undefined|| post.descripcion== null|| post.descripcion== ""){
                response.json({state:false,mensaje:"el campo descripcion es obligatorio"})
                return false
            }

        productosModel.guardar( post,function(respuesta){
        response.json(respuesta)

        })
    
       } catch(error){
        response.json({state:false,mensaje:"error inesperado", error:error})
    
       }

}

productosController.listar = function(request, response){
    productosModel.listar (null, function(repuesta){
        response.json (repuesta)
    })
}

productosController.modificar = function (request,response){

    var post ={
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        precio:request.body.precio,
        descripcion:request.body.descripcion,
    }

    if(post.nombre == undefined|| post.nombre == null|| post.nombre== ""){
        response.json({state:false,mensaje:"el campo nombre es obligatorio"})
        return false
    }

    if(post.precio == undefined|| post.precio == null|| post.precio== ""){
        response.json({state:false,mensaje:"el campo precio es obligatorio"})
        return false
    }
    if( post.codigo == undefined|| post.codigo== null|| post.codigo== ""){
        response.json({state:false,mensaje:"el campo codigo es obligatorio"})
        return false
    }
    if(post.descripcion == undefined|| post.descripcion== null|| post.descripcion== ""){
        response.json({state:false,mensaje:"el campo descripcion es obligatorio"})
        return false
    }


    //Bucar en  el array

    productosModel.modificar(post,function(respuesta){
        response.json(respuesta)
    })

  
    
}

productosController.eliminar = function (request,response){

    var post={
        codigo: request.body.codigo
    }
   
    if( post.codigo == undefined|| post.codigo== null|| post.codigo== ""){
        response.json({state:false,mensaje:"el campo codigo es obligatorio"})
        return false
    }
    productosModel.eliminar(post,function(respuesta){
        response.json(respuesta)
    })
  
}

productosController.listarporcodigo = function(request, response){

    var post={
        codigo: request.body.codigo
    }
   
    if( post.codigo == undefined|| post.codigo== null|| post.codigo== ""){
        response.json({state:false,mensaje:"el campo codigo es obligatorio"})
        return false
    }

    productosModel.listarporcodigo (post, function(repuesta){
        response.json (repuesta)
    })
}





module.exports.productosController = productosController