const formInputs = document.querySelectorAll('.message__form-inner .form__input');
const formMessages = document.querySelectorAll('.message__form-inner .message__form-errors');
const closeButton = document.querySelector('.message__form-close--button');
const openModalButton = document.querySelector('.modal__open-button');
const messageArea = document.querySelector('.message__action-text');



// localhost:9090
let formObject = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

import {validate} from './modules/validate.js'
import {sendForm} from './modules/sendform.js'



// Функция очистки введенных данных
let cleanInputs = () => {
    formInputs.forEach(element => element.value = '');
};


// Функция получения данных из формы
let getValuesOfForm = () => {
    let data = []
    for (let i = 0; i < 4; i++){
        data.push(formInputs[i].value)
    }
    return data;
};


let startProp = () => {
    // Открытие модального окна
    openModalButton.addEventListener('click', function(event){
        event.preventDefault();
        cleanInputs();
        document.querySelector('.message__modal').classList.add('visible');
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = '15px';
        document.body.style.top = `-${window.scrollY}px`;
    });

    // Закрытие модального окна
    closeButton.addEventListener('click', function(event){
        event.preventDefault();
        if(document.querySelector('.message__modal').classList.contains('visible')){
            document.querySelector('.message__modal').classList.remove('visible');
        };
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.paddingRight = '0';
        document.body.style.overflowY = 'visible';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        resetAlerts();
        messageArea.innerHTML = '';
    });

    // Работа с формой
    document.querySelector('.message__form-button').addEventListener('click', function(event){
        event.preventDefault();
        resetAlerts();
        let formData = getValuesOfForm();
        let errors = validate(formData);
        console.log(errors)
        if(errors.some(num => {return num != ''})){
            // При возникновении ошибок стилим инпуты с ошибками и выводим сообщение
            errors.forEach((error, index) => {
                if(error != ''){
                    formInputs[index].classList.add('alert')
                    formMessages[index].classList.add('visible');
                    formMessages[index].innerHTML = error;
                }
            })
        }else{
            let i = 0;
            for (let key in formObject){
                formObject[key] = formData[i]
                i++;
            };
            console.log(formObject)
            let result = sendForm(formObject);
            if(result.status == 'success'){
                cleanInputs();
                messageArea.innerHTML = 'Данные успешно отправлены';
            }else{
                messageArea.innerHTML = 'Ошибка отправки данных!';
            }
        }
    })
};


// Сброс стилей неправильного ввода данных
let resetAlerts = () => {
    document.querySelectorAll('.message__form-inner').forEach((element, index) => {
        formMessages[index].classList.remove('visible');
        formInputs[index].classList.remove('alert');
    });
};


window.addEventListener('DOMContentLoaded', startProp);