const requestURL = 'http://localhost:9090/api/registration';

// Отправка данных на сервер
export let sendForm = (data) => {
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
