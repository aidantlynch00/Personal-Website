
function reload() {
    window.location.replace("contact.html");
}

function formIsValid(name, email, subject, body) {
    let valid = !(name === "" || email === "" || !email.includes('@') || subject === ""|| body ==="");
    return valid;
}

function handleResult(response) {
    if (response === "Sent") {
        //redirect to thank acknowlegement page
    }
    else if (response === "Fail") {
        //mark incorrect fields
    }
}

function send() {
    let name = document.getElementById('user-name').value;
    let email = document.getElementById('user-email').value;
    let subject = document.getElementById('subject').value;
    let body = document.getElementById('email-body').value;

    if (formIsValid(name, email, subject, body)) {
        let data = new FormData();    
        data.append('name', name);    
        data.append('email', email);    
        data.append('subject', subject);    
        data.append('body', body);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'contact.php', true);
        xhr.onload = function () { handleResult(this.response) };
        xhr.send(data);

        reload();
    }

}
