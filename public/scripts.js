const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll('.card')


for (let card of cards){
    card.addEventListener("click", function(){
        const videoid = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoid}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

//getAttribute pega class ou id da div
//classList add na classe da div
// addEventListener ouve eventos recebe dois parametros aparentemente
//All é em lote
// queryselector procurando a classe do css