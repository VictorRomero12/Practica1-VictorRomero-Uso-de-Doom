
const elemento2=document.getElementById("titulo")
const elemento3=document.getElementById("p")
const x= document.getElementById("main")

const y=x.getElementsByTagName("p")
const z= document.getElementsByClassName("intro")
const m=document.querySelectorAll("p.intro2")
const listItems=document.querySelectorAll("ul>li")
const h1element= document.querySelector("h1")
const list = document.querySelector(".list")
const listaElementos = document.querySelectorAll("ul>li")
const h1=document.querySelector("h1")
const x3=document.forms["form1"]
let texto= "";
for(let i = 0; i<x3,length; i++)
{
    texto +- x.elements.value + "<br>";
}
document.getElementById("demo").innerHTML= texto;
let lista= document.createElement("ul");
let elemento1 = document.createElement("li");
elemento1.textContent = "Jaguar";
let elemento4 = document.createElement("li");
elemento4.textContent="Jaguar";
const button =document.querySelector("button")
button.addEventListener("click", ()=> 
{
    alert("Gracias por dar click");
});

function validarEntrada()
{
    let x4 = document.getElementById("numero").value;
    let texto;
    if(isNaN(x4) || x4 < 1 || x4 > 10)
    {
        texto="Entrada no valida"

    }
    else
    {
        texto="Entrada correcta"
    }
    document.getElementById("demo1").innerHTML= texto;
    document.getElementById("miImagen").src="spiderman.jpg";
    document.getElementById("demo5").innerHTML="Fecha" + Date();
}







