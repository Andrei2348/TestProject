const formMessages = document.querySelectorAll('.message__form-inner .message__form-errors');
const formInputs = document.querySelectorAll('.message__form-inner .form__input');


let reArray = [/^[a-zA-Z0-9]+$/, 
                /\S+@\S+\.\S+/,
                /^(()?\d{3}())?(-|\s)?\d{4}(-|\s)?\d{5}$/,
                /^[a-zA-Z0-9]+$/
            ]

let messagesArray = ['Имя пользователя введено неправильно!',
                    'Адрес электронной почты введен неправильно!',
                    'Номер телефона введен неправильно!',
                    ''
                ]


// Функция проверки валидности форм
export function validate(data){
    resetAlerts();
    let errors = [];
    console.log(data)
    for (let i = 0; i < 4; i++){
        errors.push(checkValid(i, data[i]))
    }
    return errors.some(num => {
        return num === false})
}


// Функция проверки каждой из форм с паттернами
function checkValid(index, data){
    let output = '';
    let valid = false;
    if(data.length > 0){
        const re = reArray[index];
        console.log(data)
        valid = re.test(data);
        if(!valid){
            formInputs[index].classList.add('alert')
            formMessages[index].classList.add('visible');
            output = messagesArray[index]};
    } else {
        formInputs[index].classList.add('alert')
        formMessages[index].classList.add('visible');
        output = 'Это поле не может быть пустым!'
    }
    formMessages[index].innerHTML = output;
    return valid;
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


