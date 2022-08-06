const inputEl = document.querySelector("#validation-input");
const lengthEl = inputEl.dataset.length;

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= lengthEl){
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
  }

   if (event.currentTarget.value.length < lengthEl) {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
  }

   if (!event.currentTarget.value) {
      inputEl.classList.remove("invalid");
  }
});
