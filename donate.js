const firstname=document.getElementById('firstname')
const lastname=document.getElementById('lastname')
const email=document.getElementById('email')
const address=document.getElementById('address')
const cardnumber=document.getElementById('cardnumber')
const cardname=document.getElementById('cardname')
const cvv=document.getElementById('cvv')
const form=document.getElementById('form')

form.addEventListener('donate',(e)=>{
e.preventDefault
})

{let email= /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;

    let firstname= /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
    let lastname= /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
    let address= /^[A-Za-z\d\.\-\/\#\,\s]+$/;
    let cardnumber= /^[0-9]{16,16}$/;
    let cvv= /^[0-9]{3,3}$/;
    let cardname= /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
}
if(!name.match(firstname)){
     
    alert("Please enter a valid name");
    document.getElementById("firstname").focus();
   return false;
 }

  if(!name.match(lastname)){
     
     alert("Please enter a valid name");
     document.getElementById("lastname").focus();
    return false;
  }


  if(!email.match(email)){
      alert("Please enter a valid email");
      document.getElementById("email").focus();
      return false;
  }

  if(!address.match(address)){
      alert("Please enter a valid address");
      document.getElementById("address").focus();
      return false;
  }

  if(fixedDonatons == ""){
    alert("Please select the donation amout");
    return;
  }

  if(!cardnumber.match(cardnumber)){
      alert("Please enter a valid cardnumber");
      document.getElementById("cardnumber").focus();
      return false;
  }


  if(!cardname.match(cardname)){
      
    alert("Please enter a valid cardholder name");
    document.getElementById("cardname").focus();
    return false;
  }

  if(!cvv.match(cvv)){
    alert("Please enter a valid pin number(cvv)");
    document.getElementById("cvv").focus();
    return false;
  }


  if(mothInput == ""){
    alert("Please select expiration month of your credit/debit card");
    document.getElementById("monthInput").focus();
    return;
  }

  if(yearInput == ""){
    alert("Please select the expiration year of your credit/debit card");
    document.getElementById("yearInput").focus(); 
    return;
  }

  alert("Thank you so much for your contribution! The receipt will be sent to your email address.")

  clearDonatiom();

  // clear form after click the Donate button
function clearDonatiom(){
    const inputs = document.querySelectorAll('#firstname, #lastname, #email, #address,#cardname, #cardnumber, #cvv');
  
    inputs.forEach(input => {
      input.value = '';
    });
  };
  