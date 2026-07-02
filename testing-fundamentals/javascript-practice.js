// Variables
const usuario = "Sebas";
let intentos = 0;

intentos++;

console.log("Usuario:", usuario);
console.log("Intentos:", intentos);


// Función
const login = (usuario,password)=>{

   return `Usuario ${usuario} inició sesión`;

};

console.log(login("Sebas","1234"));


// Array
const usuarios = ["Ana","Pedro","Juan"];

usuarios.forEach(usuario => {

   console.log(usuario);

});


// Objeto
const producto = {

   nombre:"Laptop",
   precio:500

};

console.log(producto.nombre);


// Async/Await

const obtenerDatos = async ()=>{

   return "Datos recibidos";

};

const ejecutar = async ()=>{

   const resultado = await obtenerDatos();

   console.log(resultado);

};

ejecutar();