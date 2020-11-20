let miAuto = {
    marca: 'Nissan',
    modelo: 'Versa',
    anio: 2020,
    tipo: 'Sedan',
    detalle: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`); //This es una variable que hace referencia al objeto (En este caso a su padre(miAuto)).
    }
};
console.log(miAuto); //Imprime todo el objeto
console.log(miAuto.marca); //Imprime solo el atributo al que se hace referencia
miAuto.detalle();

//FUNCION CONSTRUCTURA

function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
//Empezamos a contruir el la función
let autoNuevo = new auto('Tesla', 'Model 3', 2020);
let autoNuevo2 = new auto('Tesla', 'Model X', 2020);
console.log(autoNuevo);
console.log(autoNuevo2);


//Reto usando función constructura, llenado y recorrido de arrays con ciclos
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
let autosNuevos = [];
let cantidadAutos = parseInt(prompt("¿Cuantos autos deseas agregar?"));
for(let i = 0; i < cantidadAutos; i++)
{
    let trade = prompt("Ingresa la marca: ");
    let model = prompt("Ingresa el modelo: ");
    let anio = prompt("Ingresa el anio: ");

    autosNuevos.push(new auto(trade, model, anio));
}
for(let j = 0; j < autosNuevos.length; j++)
{
   console.log(autosNuevos[j]);
}

//Métodos (no mutables) de recorridos de arrays

let articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'TV', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Celular', costo: 10000},
    {nombre: 'Laptop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audifonos', costo: 1700}
];
//Filter
/*let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 //Muestra todos los objetos que cumplen la función
});
//Find
let articulosFiltrados = articulos.find(function(articulo){
    return articulo.nombre === 'Laptop' //Selecciona solo el objeto que coincida con la busqueda
});*/

/*El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.*/

//Map
let articulosFiltrados = articulos.map(function(articulo){
    return articulo.nombre //Selecciona solo el nombre de cada objeto
});



//ForEach

//Puede ser así (Con función flecha)
articulos.forEach(articulo => {
    console.log(articulo.nombre)
});

//O asi con función convencional
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//articulosFiltrados;

//Some (Ddevuelve solo true o false si la condición - En la función de abajo podriamos decir que si existen articulos baratos)
let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 600 //Selecciona solo el objeto que coincida con la busqueda
});
articulosBaratos;

