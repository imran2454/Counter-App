const dece=document.getElementById("dec");
const ince=document.getElementById("inc");
const rese=document.getElementById("res");
const display=document.getElementById("display");
// decrement

dece.addEventListener("click", () => {
    const value = Number(display.innerText);
    if (value > 0) {
      display.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });

//   incremeant
ince.addEventListener("click", () => {
    const value = Number(display.innerText);
    if (value >= 100) {
      alert("100+ values are not allowed");
    } else {
      display.innerText = value + 1;
    }
  });

//   Reset 
rese.addEventListener("click", () => {
    display.innerText = 0;
  });

  