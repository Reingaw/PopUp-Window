const modal = document.querySelector(".modal-parent"),
      btn = document.querySelector("button"),
      x = document.querySelector(".X"),
      main = document.querySelector(".main");

btn.addEventListener('click', appear);
function appear() {
    modal.style.display = "flex";
    main.style.filter = "blur(10px)";
}
x.addEventListener('click', disappear);
modal.addEventListener('click', disappear);
function disappear(e) {
    let target = e.target.className;
    if(target == "X" || target == "modal-parent") {
        modal.style.display = "none";
        main.style.filter = "blur(0)";
    }
}