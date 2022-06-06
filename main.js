const  card = document.querySelector(".card");
const input = document.querySelector(".input");
const inputfield = document.getElementById("input");
const bookamrs = document.querySelector(".bookmarks");
const website = document.querySelector(".website")

let lists = "";
inputfield.value = "https://"

function render(list){
    let spli = list.split(".") 
    let shortenedlist = spli[1]
    const card = document.createElement("form");
    const but = document.createElement("button");
    card.setAttribute("action", list);
    card.setAttribute('target', "_blank");
    but.innerHTML = shortenedlist;
    card.appendChild(but);
    bookamrs.appendChild(card);
}

inputfield.addEventListener("keydown", (event)=>{
    if (event.keyCode === 13){
        let inpvalue = inputfield.value;
        lists = ""
        if (inpvalue.split(".")[0] === "https://www"){
            console.log("valid")
            lists = inpvalue
            render(lists)
        }else{
            
            console.log("sad")
            inputfield.setAttribute("placeholder", "Not valid input again")
        }
        inputfield.value = "https://"
    };
});
