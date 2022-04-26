let nombre = prompt("Ingrese el nombre");
let contraseña = prompt("Ingrese la contraseña");

while(contraseña != "123456"){
    alert("contraseña incorresta"); 
    contraseña = prompt("Ingrese la contraseña");
}

 if(contraseña === "123456"){
     alert(`Bienvenido ${nombre}!`)
 }