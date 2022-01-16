let containerModal = document.querySelector('.swiper-wrapper'); // на родителя вешаем событие (используем делегирование)
let modal = document.querySelector('.modal'); // берем сам попап
let closeModal = document.querySelector('.btn-modal'); // берем кнопку закрытия

containerModal.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn__cart')){
        modal.classList.remove('disp-none'); // появляется модальное 
        if (!modal.classList.contains('disp-none')){
            document.body.classList.add('fixed__scroll');
        }
    }
    
});

closeModal.onclick = () => { // при нажатии на кнопку исчезает попап
    modal.classList.add('disp-none');
    document.body.classList.remove('fixed__scroll');
}