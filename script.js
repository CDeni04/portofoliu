// Cache the DOM
var button=document.getElementById("button")

var nume=document.getElementById("nume")

var prenume=document.getElementById("prenume")

var experiente=document.getElementById("experiente")

var asteptari=document.getElementById("asteptari")

var img=document.querySelector("img")

var body=document.querySelector("body")

var an=document.getElementById("anNastere")

const d=new Date()
var year=d.getFullYear()


// Add event listerner to button
button.addEventListener("click",altaViata) 
an.addEventListener("mouseover",arataan) 

// Define function
function altaViata() {
	nume.innerHTML="Software Engineer"
	prenume.innerHTML="Amazon"
	experiente.innerHTML="Experiente"
	asteptari.innerHTML="<ul><li>Educatie Sperioara</li> <li>Stagii</li> </ul>"

	img.src="images/poza2.jpg"
	img.style.border="5px solid white"
	img.style.opacity="70%"
	body.style.backgroundColor="#F5E7A6"
	body.style.font="italic bold 20px Times News Roman"
}

function arataan() {
an.innerHTML=year-an.innerHTML

}
