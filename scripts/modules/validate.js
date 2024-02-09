// // Проверка username регулярным выражением
// function isValidName(login){
//     const pattern = /^[a-zA-Z0-9]+$/;
//     return pattern.test(login);
// };


// // Проверка валидности email регулярным выражением
// function validateEmail(email){
//     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return String(email).toLowerCase().match(pattern);
// };


// export function registerValidate(login, email, password, confirmPassword){
//     let errors = [];
//     if(!login || !email || !password || !confirmPassword) {
//         errors.push('Пожалуйста, заполните все поля');
//         return errors;
//     };
//     if(login.length < 8 || login.length > 12){
//         errors.push('Логин должен быть от 8 до 12 символов.');
//         return errors;
//     };
//     if(!isValidLogin(login)){
//         errors.push('Введите корректный логин.');
//         return errors;
//     };
//     if(!email || !password){
//         errors.push('Пожалуйста, заполните все поля.');
//         return errors;
//     };
//     if(!validateEmail(email)){
//         errors.push('Введите корректный email.');
//         return errors;
//     };
//     if(password.length < 8 || password.length > 12){
//         errors.push('Пароль должен быть от 8 до 12 символов.');
//         return errors;
//     };
//     if(!isValidPassword(password)){
//         errors.push('Введите коректный пароль.');
//         return errors;
//     };
//     if (password !== confirmPassword) {
//         errors.push('Пароли не совпадают');
//         return;
//     };
//     return [];
// };


// export function loginValidate(email, password){
//     let errors = [];
//     if(!email || !password){
//         errors.push('Пожалуйста, заполните все поля.');
//         return errors;
//     };
//     if(!validateEmail(email)){
//         errors.push('Введите корректный email.');
//         return errors;
//     };
//     if(password.length < 8 || password.length > 12){
//         errors.push('Пароль должен быть от 8 до 12 символов.');
//         return errors;
//     };
//     return [];
// };

export function validate(data){
    console.log(data.email)
    ValidMail(data.email)
    ValidPhone(data.phone)
}


export function ValidMail(email) {
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = re.test(email);
    let output = '';
    if(!valid){output = 'Адрес электронной почты введен неправильно!'};
    document.getElementById('error__email').innerHTML = output;
    return valid;
}
 
function ValidPhone(phone) {
    // const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let valid = re.test(phone);
    console.log(valid)
    let output = '';
    if(!valid){output = 'Номер телефона введен неправильно!'}; 
    document.getElementById('error__phone').innerHTML = output;
    return valid;
} 



