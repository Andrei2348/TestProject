const phoneMask = document.getElementById('input__phone');
let messagesArray = ['Имя пользователя введено неправильно!',
                    'Адрес электронной почты введен неправильно!',
                    'Номер телефона введен неправильно!',
                    ''
                ]

let reArray = [/^[a-zA-Zа-яА-Я0-9]+$/, 
                /\S+@\S+\.\S+/,
                /^\s*(\d\s*){12}$/,
                /^[a-zA-Zа-яА-Я0-9]+$/
            ]

const mask = IMask(phoneMask, {mask : '+{375} (00) 000-00-00'})
            

// Функция проверки валидности форм
export let validate = (data) => {
    let errors = [];
    for (let i = 0; i < 4; i++){
        if(i != 2){
            errors.push(checkValid(i, data[i]))
        }else{
            // Получаем номер телефона из маски
            errors.push(checkValid(i, mask.unmaskedValue))
        };
    };
    return errors;
}


// Функция проверки каждой из форм
let checkValid = (index, data) => {
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

