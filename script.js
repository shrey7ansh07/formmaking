

//* doing this to make strong forms to prevent large data preprocessing 

const email = document.getElementById("contact");
const phone = document.getElementById("phone-number")
const password = document.getElementById("accesskey");
const c_password = document.getElementById("accesskeyconfrm");
const submit = document.querySelector(".myform");

submit.addEventListener("submit", validate);
phone.addEventListener("click",()=>{
  document.querySelector("#phonelength").style.display = "none";
  phone.classList.remove("addborder")
})
password.addEventListener("click",()=>{
  document.querySelector("#passwordsuggest").style.display = "none";
  password.classList.remove("addborder")
});
c_password.addEventListener("click",()=>
{
  document.querySelector("#c_passwordsuggest").style.display = "none";
  c_password.classList.remove("addborder")

})

function validate(e) {
    e.preventDefault();
  if(phone.value.length!=10)
  {
    document.querySelector("#phonelength").style.display = "block"
    phone.classList.add("addborder")
  }
  if(password.value.length<6)
  {
    document.querySelector("#passwordsuggest").style.display = "block"
    password.classList.add("addborder")
  }


  if (password.value !== c_password.value)
  {
    document.querySelector("#c_passwordsuggest").style.display = "block"
    c_password.classList.add("addborder")

  } 




}



