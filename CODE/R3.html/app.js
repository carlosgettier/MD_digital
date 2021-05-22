 window.addEventListener("load",()=>{

 let ver = document.getElementById("ver");
 let contenedor = document.querySelector(".contenedor");
let cerrar = document.querySelector("#chau")


 ver.addEventListener("click",()=>{
      contenedor.classList.add("mostrar")
    
 });

 cerrar.addEventListener("click",()=>{
    contenedor.classList.remove("mostrar")
    
})
})