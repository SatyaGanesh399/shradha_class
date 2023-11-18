function signup(){


    let name = $("#name").val()
    let email = $("#email").val()
    let password = $("#password").val()


    let warning_name = document.getElementsByClassName("warning-name")
    let warning_email = document.getElementsByClassName("warning-email")
    let warning_password = document.getElementsByClassName("warning-password")

    let name_input = document.getElementById("name")
    let email_input = document.getElementById("email")
    let password_input = document.getElementById("password")


    no_issues = true;

    if(name.length <=4){
        no_issues = false;
        console.log("went in to name")
        warning_name[0].style.display = "block"
        name_input.style.border = "1px solid red"
    }else{
        warning_name[0].style.display = "none"
        name_input.style.border = "1px solid green"
    }
    if(email.length <=4){
        no_issues = false;
        warning_email[0].style.display = "block"
        warning_email[0].innerHTML = "email length should be greater than 4 characters"
        email_input.style.border = "1px solid red"
    }else if(!email.includes("@")){
        no_issues = false;
        warning_email[0].style.display = "block"
        warning_email[0].innerHTML = "email should contain @"
        email_input.style.border = "1px solid red"
    }else if(!email.includes(".")){
        no_issues = false;
        warning_email[0].style.display = "block"
        warning_email[0].innerHTML = "email should contain .(period)"
        email_input.style.border = "1px solid red"
    }else{
        warning_email[0].style.display = "none"
        email_input.style.border = "1px solid green"
    }
    if(password.length <=8  ){
        no_issues = false;
        console.log("went in to password")
        warning_password[0].style.display = "block"
        password_input.style.border = "1px solid red"
    }else{
        warning_password[0].style.display = "none"
        password_input.style.border = "1px solid green"
    }

    if(no_issues == true){
        alert("sign up is succesfull")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
    }
}
