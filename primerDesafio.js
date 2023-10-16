
class ProductManager{

    constructor(){
        this.productos=[]
    }

    getProducts(){
        return this.productos
    }

    getProductById(id){
         // chequeo si exite el producto
        let existe=this.productos.findIndex(producto=>producto.id===id)
       
        if(existe===-1){
            return `No se encontró el producto con id ${id}`
        }

        let indice=this.productos.findIndex(producto=>producto.id===id)
        return this.productos[indice] 
    }

    addProduct(title,description,price,thumbnail,code,stock){
        // chequeo si exite el producto con codigo solicitado
        let existe=this.productos.findIndex(producto=>producto.code===code)
        if(existe!=-1){
            console.log(`Ya existe un producto con codigo ${code}. No se pudo agregar producto solicitado`)
            return 
        }

        // genero nuevo id para el nuevo producto
        let id=1
        if(this.productos.length>0){
            id=this.productos[this.productos.length-1].id + 1
        } 
        
        // creo nuevo producto
        let nuevoProducto={
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        // agrego producto al listado
        this.productos.push(nuevoProducto)
        console.log(`Se agrego producto con exito. Id: ${id}.`)
    }

} 


// se crea el objeto para almacenar los proiductos
let productos= new ProductManager()

// se imprime el objeto vacio
console.log(productos.getProducts())

// se agraga primer producto de prueba
productos.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)

// se agraga otro producto de prueba
productos.addProduct("producto prueba2","Este es el segundo producto de prueba",300,"Sin imagen 2","cba321",20)

// se muestra producto por id
console.log(productos.getProductById(1))

// se intenta agregar producto con codigo existente
productos.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)

// se intenta visualizar producto con id inexistente
console.log(productos.getProductById(3))

// se muestra objeto con los productos creados
console.log(productos.getProducts())