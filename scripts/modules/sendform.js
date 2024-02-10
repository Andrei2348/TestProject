const requestURL = 'http://127.0.0.1:5500/';

// Отправка данных на сервер
export function sendForm(data){
    const xmlhttp = new XMLHttpRequest(); 
    xmlhttp.open("POST", "/json-handler");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onload = () => {
        if (xmlhttp.status != 200) {
            const result = {
                            "status": "error",
                            "fields": {
                                "inputName": "Ошибка отправки данных"
                            }
                        }
            
            return result;
        }else{
            const response = xmlhttp.response;
            return response;
        };
    };
}
