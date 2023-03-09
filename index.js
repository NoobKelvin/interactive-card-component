const mainContent = document.querySelector("main");
const thanksContent = document.querySelector(".thanks");
const submitButton = document.querySelector(".submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", function () {
    thanksContent.classList.remove("hidden");
    mainContent.classList.add("hidden");
})


rates.forEach(function (rate) {
    rate.addEventListener("click", function () {
        rating.innerHTML = rate.innerHTML
    })
}) 
