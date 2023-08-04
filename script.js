const p_hover = document.querySelectorAll(".question");
const box = document.querySelector(".img-box");

console.log(p_hover);

for (let i = 0; i <= p_hover.length - 1; i++) {


  p_hover[i].addEventListener("mouseover",()=>{
    box.classList.add("move-box");
  })
  p_hover[i].addEventListener("mouseout",()=>{
    box.classList.remove("move-box");
  })

}
