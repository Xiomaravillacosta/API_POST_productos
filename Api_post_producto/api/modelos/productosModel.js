var productosModel={}


var productos = [ 
    { codigo:1, nombre:"jabon",precio:"$5.000", descripcion:"Jabon con olor a lavanda"},
    { codigo:2, nombre:"crema dental",precio:"$15.000", descripcion:"Con particulas de carbono, hecho naturalmente"},
    { codigo:3, nombre:"shampoo",precio:"$45.000", descripcion:"Con ingredientes naturales, control caida"},
    { codigo:4, nombre:"cepillo de dientes",precio:"$15.000", descripcion:"Hecho de bambu con cerdas suaves"},
    { codigo:5, nombre:"crema facial",precio:"$45.000", descripcion:"Antimanchas con acido hialurónico"},
]
productosModel.guardar = function(post, callback){
    productos.push({codigo:post.codigo, nombre:post.nombre, precio:post.precio, descripcion:post.descripcion})
    return callback({state:true, mensaje:"se almaceno correctamente el producto" })

}

productosModel.listar = function(post, callback){
    return callback(productos)
}

productosModel.modificar = function(post, callback){
    var posicion = productos.findIndex((item)=> item.codigo== post.codigo)
    if(posicion== -1){
        callback({state:false,mensaje:"esta codigo no se encuentra dentro de la base de datos"})
    }
    else{
        productos[posicion].precio = post.precio
        productos[posicion].nombre = post.nombre
        productos[posicion].descripcion = post.descripcion

        callback({state: true,mensaje:"se actualizo el producto"})
    }
}

productosModel.eliminar = function(post,callback){

    var posicion = productos.findIndex((item)=> item.codigo== post.codigo)
    if(posicion== -1){
        callback({state:false, mensaje:"Este codigo no existe, no se puede eliminar"})
        return false
    }
    else{
        productos.splice (posicion,1)
        callback({state: true,mensaje:"Se elimino correctamente el producto"})
    }
}
productosModel.listarporcodigo  = function(post, callback){

    var posicion = productos.findIndex((item)=> item.codigo== post.codigo)

    return callback(productos[posicion])
}



module.exports.productosModel=productosModel