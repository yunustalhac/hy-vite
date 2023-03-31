const Select = document.querySelector(".box-select")
const Select2 = document.querySelector(".box-select2")
const boxButton = document.querySelector(".box-button")
const haric = document.querySelector(".ayrı")
const haric2 = document.querySelector(".ayrı2")
const sayfa = document.querySelector(".butun")
const logo = document.querySelector(".buyuklogo")



if (sayfa.style.opacity == 0) {
    sayfa.style.transition = "5s"
    sayfa.style.opacity = "1"
}

if (logo.style.opacity = 1) {
    logo.style.transition = "2s"
    logo.style.opacity = "0"
}

boxButton.addEventListener("click", () => {
    if (Select.value === "Projeni seç") {
        alert("lütfen bir yer seçiniz")
    }
})

Select.addEventListener("click", () => {
    Select.style.color = "black"
})

Select2.addEventListener("click", () => {
    Select2.style.color = "black"
})

haric2.style.display = "none"
haric.style.display = 'none'