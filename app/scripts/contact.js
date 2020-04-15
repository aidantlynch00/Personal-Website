let fieldMap = new Map();
let markMap = new Map();

function formIsValid(name, email, subject, body) {
    let nameRegex = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
    fieldMap.set("name", nameRegex.test(name));
    
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    fieldMap.set("email", emailRegex.test(email));

    fieldMap.set("subject", subject != "");
    fieldMap.set("body", body != "");

    let valid = fieldMap.get("name") && fieldMap.get("email") && fieldMap.get("subject") && fieldMap.get("body");
    return valid;
}

function markFields() {
    if(!markMap.get("bar")) {
        let redBar = document.createElement("p");
        redBar.setAttribute("id", "bar");
        redBar.textContent = "Please revise the marked fields.";
        document.querySelector("header").appendChild(redBar);
        markMap.set("bar", true);
    }

    let xElement = document.createElement("label");
    xElement.setAttribute("id", "x");
    xElement.textContent = "\u2718";

    //ADD|REMOVE X mark from name field 
    if (!fieldMap.get("name") && !markMap.get("name")) {
        document.getElementById("user-name").parentElement.appendChild(xElement.cloneNode(true));
        markMap.set("name", true);
    }
    else if (fieldMap.get("name") && markMap.get("name")) {
        document.getElementById("user-name").parentElement.lastChild.remove();
        markMap.set("name", false);
    }

    //ADD|REMOVE X mark from email field
    if (!fieldMap.get("email") && !markMap.get("email")) {
        document.getElementById("user-email").parentElement.appendChild(xElement.cloneNode(true));
        markMap.set("email", true);
    }
    else if(fieldMap.get("email") && markMap.get("email")) {
        document.getElementById("user-email").parentElement.lastChild.remove();
        markMap.set("email", false);
    }

    //ADD|REMOVE X mark from subject field
    if (!fieldMap.get("subject") && !markMap.get("subject")) {
        document.getElementById("subject").parentElement.appendChild(xElement.cloneNode(true));
        markMap.set("subject", true);
    }
    else if (fieldMap.get("subject") && markMap.get("subject")) {
        document.getElementById("subject").parentElement.lastChild.remove();
        markMap.set("subject", false);
    }

    //ADD|REMOVE X mark from email body field
    if (!fieldMap.get("body") && !markMap.get("body")) {
        let parent = document.getElementById("input-wrapper");
        let dummy = document.getElementById("dummy");
        parent.insertBefore(xElement.cloneNode(true), dummy);
        markMap.set("body", true);
    }
    else if (fieldMap.get("body") && markMap.get("body")) {
        document.querySelector("#input-wrapper #x").remove();
        markMap.set("body", false);
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
        
        xhr.onreadystatechange = function () { 
            if (this.readyState == 4 || this.DONE && this.status == 200) {
                window.location.set("acknowledgement.html");
            }
            else {
                alert("Something went wrong. Try again.");
            } 
        };

        xhr.open('POST', 'http://aidantlynch.com/scripts/sender.php', true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(data);
    } else {
        markFields();
    }
}
