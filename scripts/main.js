// let inputName = document.getElementById('input__text');
// let inputEmail = document.getElementById('input__email');
// let inputPhone = document.getElementById('input__phone');
// let inputMessage = document.getElementById('input__message');
const formInputs = document.querySelectorAll('.message__form-inner .form-input');
import {validate} from './modules/validate.js'


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
        let formData = getValuesOfForm();
        


        // let formData = {
        //     name: inputName.value,
        //     email: inputEmail.value,
        //     phone: inputPhone.value,
        //     message: inputMessage.value
        // };
        // console.log(formData)
        
        if(validate(formData)){
            console.log('Делаем запрос на сервер')
        }else{
            console.log('Не все хорошо')
        }
    });
};