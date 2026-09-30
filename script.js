function toggleMenu(){document.getElementById("navLinks").classList.toggle("show")}
function selectProduct(name){
  document.getElementById("flower").value=name;
  document.getElementById("order").scrollIntoView({behavior:"smooth"});
}
document.getElementById("orderForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const flower=document.getElementById("flower").value;
  const quantity=document.getElementById("quantity").value;
  const address=document.getElementById("address").value.trim();
  const date=document.getElementById("date").value;
  const message=document.getElementById("message");
  const emailOK=/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(email);
  const phoneOK=/^[0-9]{10}$/.test(phone);
  if(!name||!email||!phone||!flower||!quantity||!address||!date){
    message.style.color="red";message.textContent="Please fill all the fields.";return;
  }
  if(!emailOK){message.style.color="red";message.textContent="Please enter a valid email address.";return;}
  if(!phoneOK){message.style.color="red";message.textContent="Please enter a valid 10-digit phone number.";return;}
  message.style.color="green";
  message.textContent=`🌸 Order placed successfully! Thank you, ${name}.`;
  this.reset();
});