const ratingBtn = document.querySelectorAll(".value-btn");
const submitBtn = document.querySelector(".submit-btn");
const modal = document.querySelector(".modal");

let rating;
let activeBtn;

ratingBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("btn-active");
    rating = element.value;

    if (activeBtn) {
      // remove a classe do botão ativo anterior...
      activeBtn.classList.remove("btn-active");
    }
    // o botao ativo passa a ser o botão clicado e...
    activeBtn = element;
    // adiciona a classe ao novo botão ativo
    activeBtn.classList.add("btn-active");
  });
  // para cada botão...
});

submitBtn.addEventListener("click", () => {
  

  if (!rating) {
    alert('Escolha uma nota')
  } else{
    modal.classList.remove("modal-overlay");
  }

  

  myRating.textContent = `You selected ${rating} out ${ratingBtn.length}`;
});
