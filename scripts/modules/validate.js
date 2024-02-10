
// const formInputs = document.querySelectorAll('.message__form-inner .form__input');
let messagesArray = ['Имя пользователя введено неправильно!',
                    'Адрес электронной почты введен неправильно!',
                    'Номер телефона введен неправильно!',
                    ''
                ]

let reArray = [/^[a-zA-Z0-9]+$/, 
                /\S+@\S+\.\S+/,
                /^(()?\d{3}())?(-|\s)?\d{4}(-|\s)?\d{5}$/,
                /^[a-zA-Z0-9]+$/
            ]


// Функция проверки валидности форм
export function validate(data){
    let errors = [];
    for (let i = 0; i < 4; i++){
        errors.push(checkValid(i, data[i]))
    };
    return errors;
}


// Функция проверки каждой из форм
function checkValid(index, data){
    let output = '';
    let valid = false;
    if(data != ''){
        const re = reArray[index];
        valid = re.test(data);
        if(!valid){
            output = messagesArray[index];
        }else{
            output = '';
        };
    } else {
        output = 'Это поле не может быть пустым!'
    };
    return output;
};

