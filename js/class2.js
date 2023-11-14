function clickHandler(){
    // const element = document.getElementsByTagName("p")
    // element[0].style.fontSize = "40px"
    // element[0].style.backgroundColor = "pink"
    // element[0].style.color = "red"
    // console.log(element)

    const spantag_with_id = document.getElementById("spantag_dom")
    spantag_with_id.innerHTML = "hello class"

    const spantag_with_class = document.getElementsByClassName("ss")

    for (let i = 0; i< spantag_with_class.length ; i++){
        spantag_with_class[i].innerHTML = "Bye Bye Shradha"
    } 
}

function singinUser(){
    let values = {}
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const bcc_value = document.getElementById("bcc")
    values['email'] = email.value
    values['password'] = password.value
    values['bcc'] = bcc_value.value

    console.log(values)
    
    
}

// getElementByID - unique - it will only one element
// getElementByClass - not unique - it will give array of elements
// getElementByTagName - not unique - it will give array of elements