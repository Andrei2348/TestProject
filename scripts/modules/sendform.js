
// Отправка данных на сервер
export function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('demo-form');
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('Form submitted successfully');
        } else {
          console.error('Error in submitting form');
        }
      }
    };
    xhr.send(new URLSearchParams(formData).toString());
  }