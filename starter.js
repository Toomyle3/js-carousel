var pic1 = "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
var pic2 = "https://images.unsplash.com/photo-1463501810073-6e31c827a9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
var pic3 = "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
var pic4 = "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80";
var pic5 = "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
var picArray = [pic1, pic2, pic3, pic4, pic5];

const pictures = document.querySelectorAll('.slider-item');

for (let i = 0; i < 5; i++) {
    pictures[i].innerHTML = (`<img src="${picArray[i]}" >`)
};

window.addEventListener('load', () => {
    const sliderItems = document.querySelectorAll('.slider-item');

    const prevPage = document.querySelector('.slider-prev');
    const nextPage = document.querySelector('.slider-next');

    const dot = document.getElementsByClassName('slider-dot-item');
    const slideWidth = sliderItems[0].offsetWidth;
    const slideLenght = sliderItems.length;
    const slideMain = document.querySelector('.slider-main');

    let position = 0;
    let index = 0;

    nextPage.addEventListener('click', () => {
        handleChangeSlide(1);
    })

    prevPage.addEventListener('click', () => {
        handleChangeSlide(-1);
    });

    [...dot].forEach((item)=>{
        item.addEventListener('click', (e) => {
            [...dot].forEach(el=> el.classList.remove('active'));
            e.target.classList.add('active');
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            position = -1 * index * slideWidth;
            slideMain.style = `transform: translateX(${position}px)`;
        });
    })

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= slideLenght - 1) {
                index = slideLenght - 1;
                return;
            }
            position = position - slideWidth;
            slideMain.style = `transform: translateX(${position}px)`;

            index++;
        } else if (direction === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            position = position + slideWidth;
            slideMain.style = `transform: translateX(${position}px)`;
            index--;
        }
        [...dot].forEach(el=> el.classList.remove('active'));
        dot[index].classList.add('active');
    }
})

