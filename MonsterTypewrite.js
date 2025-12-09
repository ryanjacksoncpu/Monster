var inputTXT = document.getElementById("input")
var typewriter = document.getElementById("typewriter")
var inputvalue = inputTXT.value
document.addEventListener("keypress" , () =>{
if(event.key == "Enter"){

typewriter.innerHTML = ''
typing()
}})
let i = 0
function typing(){
    if(i < message.value.length){
    typewriter.innerHTML += inputTXT.value[i];
    i++
setTimeout(typing,10)
}else if(i == inputTXT.value.length || i > inputTXT.value.length){
i = 0
inputTXT.value = ''
}

}