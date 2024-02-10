let reArray = [/^[a-zA-Z0-9]+$/, 
                /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i, 
                /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            ]

let messagesArray = ['Имя пользователя введено неправильно!',
                    'Адрес электронной почты введен неправильно!',
                    'Номер телефона введен неправильно!'
                ]



export function validate(data){
    console.log(data)
    for (let key of Object.keys(data)) {

        console.log(data[key])
        console.log(data.findIndex(data[key]))
        // let index = data.findIndex(p => p.attr1 == "john");
    }
    let errors = [];
    

    
    errors.push(validName(data.name))
    errors.push(validMail(data.email))
    errors.push(validPhone(data.phone))
    return errors
}


function validName(login){
    let output = '';
    let valid = false;
    if(login.length > 0){
        const re = /^[a-zA-Z0-9]+$/;
        valid = re.test(login);
        if(!valid){output = 'Имя пользователя введено неправильно!'};
    } else {
        output = 'Это поле не может быть пустым!'
    }
    document.getElementById('error__name').innerHTML = output;
    return valid;
};


function validMail(email) {
    let output = '';
    let valid = false
    if(email.length > 0){
        const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        valid = re.test(email);
        if(!valid){output = 'Адрес электронной почты введен неправильно!'};
    } else {
        output = 'Это поле не может быть пустым!'
    }
    document.getElementById('error__email').innerHTML = output;
    return valid;
}


function validPhone(phone) {
    let output = '';
    let valid = false;
    if(phone.length > 0){
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        valid = re.test(phone);
        console.log(valid)
        if(!valid){output = 'Номер телефона введен неправильно!'};
    } else {
        output = 'Это поле не может быть пустым!'
    }
    document.getElementById('error__phone').innerHTML = output;
    return valid;
} 



