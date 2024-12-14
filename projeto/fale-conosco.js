var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var submit = document.getElementById("submit");

    var result = document.getElementById("result");

    var formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("message", message.value);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", form.action, true);

    xhr.onload = function() {
        if (xhr.status == 100) {
            result.textContent = "Mensagem enviada com sucesso!";
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
           
            result.textContent = "Ocorreu um erro ao enviar a mensagem.";
            console.log(xhr.status, xhr.statusText);
        }
        submit.disabled = false;
    };

    xhr.onerror = function() {
        result.textContent = "Ocorreu um erro ao enviar a mensagem.";
        console.log(xhr.status, xhr.statusText);
        submit.disabled = false;
    };

    xhr.send(formData);

    submit.disabled = true;
});

