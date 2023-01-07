const cardRaiting = document.querySelector(".card-raiting");
const cardThanks = document.querySelector(".card-thanks");

const btnSubmit = document.querySelector("#submit");
const newRating = document.querySelector("#new-rating");
const raiting = document.querySelector("#raiting")
const ratingNumber = document.querySelectorAll(".btn-number")

btnSubmit.addEventListener("click", () => {
    cardThanks.classList.remove("hidden");
    cardRaiting.style.display = "none"
})

ratingNumber.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })

})

// newRating.addEventListener("click", () => {
//     cardThanks.classList.add("hidden");
//     cardRaiting.style.display = "block"
// } )