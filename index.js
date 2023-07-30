const add_button=document.getElementById("add-notes")
const note_box=document.getElementById("note-box")
const input_box=document.querySelector(".input-box")
add_button.addEventListener("click",()=>{
    const note=document.createElement("p")
    const img=document.createElement("img")
    note.className="input-box"
    img.className="delete-img"
    img.src="/images/delete.png"
    note.setAttribute("contenteditable","true")
    note_box.appendChild(note)
    note.appendChild(img)
    update()
})
 function update(){
    localStorage.setItem("note",note_box.innerHTML);
  }
note_box.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      update()
    }
    if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach((el) => {
            el.onkeyup=function(){
             update()
            }
        });
    }
  });
function show(){
    note_box.innerHTML=localStorage.getItem("note")
}
show()
