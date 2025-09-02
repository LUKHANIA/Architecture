function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_lz4nqad","template_p0dkzmy".parms).then(alert("Email Sent"))

}
