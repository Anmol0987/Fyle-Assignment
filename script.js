const initSlider = () => {
    const imglist = document.querySelector('.image-list')

    const slibtn = document.querySelectorAll('.slibtn')

    slibtn.forEach(button => {
        button.addEventListener('click', () => {
            const direction =button.id === "prev-slide" ? -1 : 1 ||  button.id === "next2" ? 2 : -1;
            const scrollAmount = imglist.clientWidth * direction;
            imglist.scrollBy({ left: scrollAmount, behavior: "smooth" });

        })
    })
}
window.addEventListener("load", initSlider);

function changeImage(filename, c) {
    document.querySelector('.div1').style.backgroundColor = "#F6F6F6"
    document.querySelector('.div2').style.backgroundColor = "#F6F6F6"
    document.querySelector('.div3').style.backgroundColor = "#F6F6F6"


    var div = document.querySelector(`.${c}`)
    div.style.backgroundColor = "#FF3147";

    var value = document.querySelector("#imgchange")
    value.setAttribute("src", filename)

}
