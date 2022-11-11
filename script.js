var ratingComponent = document.getElementById("rating-component");
var form = document.forms["rating-form"];

var inRate = form.elements["rate"];
var btnSubmit = form.elements["submit"];

var outResult = document.getElementById("rating-result");


form.addEventListener("change", function(e){
  btnSubmit.disabled = false;
});

btnSubmit.addEventListener("click", function(e){
  if (inRate.value) {
    ratingComponent.classList.add("thank-you");
    outResult.innerText = "You selected " + inRate.value + " out of 5";
  }
});
