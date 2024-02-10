const formInputs = document.querySelectorAll('.message__form-inner .form__input');
let formObject = {
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
            // Формирует объект для отправки в ajax
            let i = 0;
            for (let key in formObject){
                console.log(key);
                formObject[key] = formData[i]
                i++;
            }
            console.log(formObject)
            console.log('Делаем запрос на сервер')
        }
    });
};