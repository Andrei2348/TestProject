const formInputs = document.querySelectorAll('.message__form-inner .form__input');
const formMessages = document.querySelectorAll('.message__form-inner .message__form-errors');
let formObject = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };


import {validate} from './modules/validate.js'
import {sendForm} from './modules/sendform.js'



window.addEventListener('DOMContentLoaded', startProp);


// Функция получения данных из формы
function getValuesOfForm(){
    let data = []
    for (let i = 0; i < 4; i++){
        data.push(formInputs[i].value)
    }
    return data;
}


function startProp(){
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
            // Формирует объект для отправки на сервер
            let i = 0;
            for (let key in formObject){
                formObject[key] = formData[i]
                i++;
            };
            console.log(formObject)
            let result = sendForm(formObject);
            console.log(result)
        }
    })
};


// Сброс стилей неправильного ввода данных
function resetAlerts(){
    document.querySelectorAll('.message__form-inner').forEach((element, index) => {
        if(formMessages[index].classList.contains('visible')){
            formMessages[index].classList.remove('visible');
        };
        if(formInputs[index].classList.contains('alert')){
            formInputs[index].classList.remove('alert');
        };
    });
};