document.addEventListener("DOMContentLoaded", () => {
  const blob = document.getElementById("blob");

  window.onpointermove = event => {
    const {
      clientX,
      clientY
    } = event;


    // EDIT
    // An offset to match the css 34vmax
    const offset = (innerHeight < innerWidth ? innerHeight : innerWidth) * 0.34
    blob.style.left = `${clientX - offset}px`
    blob.style.top = `${clientY - offset}px`
  };
});