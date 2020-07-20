function login() {
    event.preventDefault();
    var data = new Object();
    //creating an object and turning it to json and send it as a part of body
    data.username = $('#login-form-usernamesername').val(); //getting the value of input tag by id
    data.password = $('#login-form-password').val();
    var json = JSON.stringify(data); //converting to json object
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 & this.status == 202) {
            window.location.href = "../users/auth/login"; //if the user exist redirect to home
        } else if (this.readyState == 4 & this.status == 404) {
            alert("user does not exist" + this.status);
        }
    };
    xhttp.open("POST", "../users/auth/login", true);
    xhttp.setRequestHeader("Content-Type", " application/json;");
    xhttp.send(json); //sending the json object as part of the body
}