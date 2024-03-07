function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message: document.getElementById("message").value,

    }
        emailjs.send("service_cbd093i", "template_7viayie",params).then(alert("Email odoslaný!"))
}


