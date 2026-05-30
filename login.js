let icon = document.querySelector("#picon");
let passowrd = document.querySelector(".password");

icon.addEventListener("click",() =>{

    if(passowrd.type === "password")
    {
        passowrd.type = "text";
        icon.setAttribute("name","eye-off");
    }
    else{
        passowrd.type = "password";
        icon.setAttribute("name","eye");
    }
});