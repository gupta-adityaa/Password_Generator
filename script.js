let slider = document.getElementById("slider")
let lenVal = document.getElementsByClassName("lenVal") //does not give a single element instead HTML collection

lenVal[0].innerText = slider.value //to show default value
slider.addEventListener("input",()=>{
    lenVal[0].innerText = slider.value
})

let passBox = document.getElementById("passBox")
let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let button = document.querySelector("button")

button.addEventListener("click", ()=>{
    passBox.value = generatePass()
})


let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let LC = "abcdefghijklmnopqrstvuwxyz"
let num = "0123456789"
let sym = "~`!@#$%^&*()<>"

function generatePass(){
    let string = ""
    let chars = ""

    chars += lowercase.checked ? LC : ""
    chars += uppercase.checked ? UC : ""
    chars += numbers.checked ? num : ""
    chars += symbols.checked ? sym : ""

    for(let i=0; i<slider.value; i++)
    {
        let rand = Math.floor(Math.random() * chars.length)
        string += chars.charAt(rand)
    }


    return string
}

let icon = document.querySelector("#input-box span")
icon.addEventListener("click", () => {
     if(passBox.value != ""){
        navigator.clipboard.writeText(passBox.value)
        icon.innerText = "check_small"
        icon.title = "Copied"
     }
     else{
        icon.title = "Generate Password First"
     }

     setTimeout(()=>{
        icon.innerText = "content_copy"
     },2000)
});
