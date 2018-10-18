let add_tomato = new CustomEvent("add_tomato")
document.addEventListener("add_tomato",()=>{
    console.log("tomato added")
    let container = document.getElementById("tomatoes")
    let tomato = document.createElement("img")
    tomato.src = "/images/tomato.svg"
    container.appendChild(tomato)
})


console.log("im connected")