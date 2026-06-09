document.querySelector("#rola").addEventListener("click",()=>{
    window.open("open.html", "_blank");
})

let changemode=document.querySelector("#changemode");
changemode.addEventListener("click",()=>{
    document.body.classList.toggle("light");
})

let closebtn=document.querySelector("#closebtn");
closebtn.addEventListener("click",()=>{
    alert("Thanks for visiting our website");
})

document.querySelector("#aboutme").addEventListener("click", () => {
  window.open("about.html", "_blank");
});

document.querySelector("#projects").addEventListener("click", () => {
  window.open("projects.html", "_blank");
});

document.querySelector("#home").addEventListener("click", () => {
  window.open("home.html", "_blank");
});

document.querySelector("#Plus").addEventListener("click",()=>{
  window.open("Plus.html", "_blank");
})

document.querySelector("#lastbtn").addEventListener("click",()=>{
  window.open("response.html", "_blank");
})