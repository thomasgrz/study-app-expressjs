
function show_options(){
    let dropdown_content = document.getElementById("options-menu")
    dropdown_content.classList.toggle("show")
}
(function attach_options(){
    let dropdown_button
    dropdown_button = document.getElementsByClassName("dropdown-button")[0]
    dropdown_button.setAttribute("onclick","show_options()")

})()

window.onclick = function(event){
    if(!event.target.matches(".dropdown-button")){
        let dropdown_items = document.getElementsByClassName("dropdown-content")
        for(let i =0;i<dropdown_items.length;i++){
            let open_dropdown = dropdown_items[i]
            if(open_dropdown.classList.contains("show")){
                open_dropdown.classList.remove("show")
            }
        }
    }
}