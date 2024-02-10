const formInputs = document.querySelectorAll('.message__form-inner .form__input');
let formData = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        
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
        


        
        console.log(validate(formData))
        
        if(validate(formData)){
            console.log('Не все хорошо')
        }else{
            console.log('Делаем запрос на сервер')
        }
    });
};