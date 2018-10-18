console.log("modal logic connected")
let modal = document.getElementById("myModal")
//grab the  close button from the interval interruption modal
let modalbutton = document.getElementsByClassName("close")[0]
modalbutton.onclick = ()=>{modal.style.display = "none"}

//handle About page clicks
let aboutmodalbutton = document.getElementsByClassName("about-modal-button")[0]
aboutmodalbutton.setAttribute("onclick","about()")

//grab the About modal
let aboutmodal = document.getElementById("about-modal")

//grab the X from the About page in DOM
let about_close = document.getElementById("close-about-modal")
about_close.setAttribute("onclick","closeAbout()")

//close about modal clicks 
function closeAbout(){
    aboutmodal.style.display = "none"
}

//about modal clicks
function about(){
    let about = document.getElementById("about-modal")
    about.style.display = "block"
}

//grab the save modal
let save_modal = document.getElementById("save-modal")

//create the handler for the save modal
function save(){
    //make the modal appear
    save_modal.style.display = "block"
    
    let elements_to_save = document.getElementById("done-list").children
    console.log(elements_to_save.children)

    let to_save_list = document.getElementById("tasks-to-save")
    
    // inner_save.appendChild(elements_to_save)
    for(let i=0;i<elements_to_save.length;i++){
        let element = elements_to_save[i].cloneNode(true)
        to_save_list.appendChild(element)
    }
}


function closeSave(){
    save_modal.style.display = "none";
}

//attach the save handler to the save button in the DOM
let save_button = document.getElementsByClassName("save-modal-button")[0]
save_button.setAttribute("onclick","save()")

//attach handler to save EXIT button
let save_exit_button = document.getElementById("close-save-modal")
save_exit_button.setAttribute("onclick","closeSave()")
