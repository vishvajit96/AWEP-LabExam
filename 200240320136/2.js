function submithere() {
    let inputname = document.querySelector('#uname').value;
    let inputpwd = document.querySelector('#pwd').value;

    let newElement1 = document.querySelector('#refsubmit').cloneNode(true);

    newElement1.removeAttribute("id");
    newElement1.style.visibility = "visible";


    newElement1.children[0].innerHTML = "Username :" + inputname;
    newElement1.children[1].innerHTML = "Password :" + inputpwd;

    let submitBox = document.querySelector('#submitBox');
    submitBox.insertBefore(newElement1, submitBox.firstChild);


    document.querySelector('#uname').value = "";
    document.querySelector('#pwd').value = "";
}