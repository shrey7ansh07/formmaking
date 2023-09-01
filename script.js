

//* doing this to make strong forms to prevent large data preprocessing 

const email = document.getElementById("contact");
const phone = document.getElementById("phone-number")
const password = document.getElementById("accesskey");
const c_password = document.getElementById("accesskeyconfrm");
const submit = document.querySelector(".myform");

submit.addEventListener("submit", validate);
phone.addEventListener("click",()=>{
  phone.classList.remove("addborder")
})
password.addEventListener("click",()=>{
  password.classList.remove("addborder")
});
c_password.addEventListener("click",()=>
{
  c_password.classList.remove("addborder")

})


function validate(e) {
  
  if(phone.value.length!=10)
  {
    phone.setCustomValidity("mobile no should be of 10 digits")
    phone.reportValidity();  
    phone.classList.add("addborder")
    phone.classList.remove("addborderpos")//*adding these to prevent any issue

  }
  else
  {
    phone.classList.remove("addborder")
    phone.classList.add("addborderpos")
  }
  if(password.value.length<6)
  {
    password.setCustomValidity("password too short min 6 charachters")
    password.reportValidity();
    password.classList.add("addborder")
    password.classList.remove("addborderpos")//*adding these to prevent any issue

  }
  else
  {
    password.classList.remove("addborder")
    password.classList.add("addborderpos")
  }


  if (password.value !== c_password.value)
  {
    // document.querySelector("#c_passwordsuggest").style.display = "block"
    c_password.setCustomValidity("password mismatch")
    c_password.reportValidity(); 
    c_password.classList.add("addborder")
    c_password.classList.remove("addborderpos")//*adding these to prevent any issue


  } 
  else
  {
    c_password.classList.remove("addborder")
    c_password.classList.add("addborderpos")
  }
  const emailValue = email.value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(emailValue)) {
    email.setCustomValidity("Invalid email format");
    email.reportValidity();
    email.classList.add("addborder");
    email.classList.remove("addborderpos")//*adding these to prevent any issue
  }
  
    else
    {
      email.classList.remove("addborder")
      email.classList.add("addborderpos")
    }
  e.preventDefault();




}



