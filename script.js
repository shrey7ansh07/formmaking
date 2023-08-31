

//* doing this to make strong forms to prevent large data preprocessing 

const email = document.getElementById("contact");
const password = document.getElementById("accesskey");
const c_password = document.getElementById("accesskeyconfrm");
const submit = document.querySelector(".myform");

submit.addEventListener("submit", validate);

function validate(e) {
    e.preventDefault();

  if (password.value !== c_password.value)
  {
    document.querySelector("#suggestion").style.display = "block"
  } 
  else
  {
    document.querySelector("#suggestion").style.display = "none"
  }


}



