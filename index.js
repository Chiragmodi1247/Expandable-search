console.log("Script loaded");
let expanded = false;
function expand() {
  if (!expanded) {
    document.getElementById("input_box").style.display = "block"
    document.getElementById("input_box").classList.remove("hidden-input-box");
    document.getElementById("input_box").classList.remove("hide_box");
    document.getElementById("input_box").classList.add("my-input-box");
    expanded = true;
  } else {
    document.getElementById("input_box").classList.remove("my-input-box");
    document.getElementById("input_box").classList.add("hidden-input-box");
    document.getElementById("input_box").value = null;
    setTimeout( function() {
        document.getElementById("input_box").style.display = "none"
    } , 900)

    expanded = false;
  }
}
