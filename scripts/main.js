let inputName = document.getElementById('input__text');
let inputEmail = document.getElementById('input__email');
let inputPhone = document.getElementById('input__phone');
let inputMessage = document.getElementById('input__message');
import {validate} from './modules/validate.js'

window.addEventListener('DOMContentLoaded', startProp);

function startProp(){
    document.querySelector('.message__form-button').addEventListener('click', function(event){
        event.preventDefault();
        
        let formData = {
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            message: inputMessage.value
        };
        console.log(formData)
        
        if(validate(formData)){
            console.log('Делаем запрос на сервер')
        }else{
            console.log('Не все хорошо')
        }
    });
};