 let nombre:string = "Juan";
 let apellido:string = "Pérez";
 let edad:number = 32;

 //let texto = "Hola, " + nombre + " " + apellido+ "("+ edad +")";

//Template literal
 let texto = `Hola, ${ nombre } ${ apellido } (${edad})`;
  
//Template literal multilinea
texto = `Hola, 
${ nombre } ${ apellido } 
(${edad})`;

//Lo que esta dentro de ${} es código JS
let texto2:string = ` ${1+2} `

function getNombre(){
    return "Steven";
}
let texto3:string = `${getNombre()}`;
 console.log(texto);
