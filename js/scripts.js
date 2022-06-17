//Business Logic for Pizza-----------------------------

function Pizza(size, toppings) {
  this.size = {};
  this.toppings = [];
}

let newPizza = new Pizza(0,0);

function Size() {
  if(document.getElementById('small').checked) {
  return "Small"
  } else if (document.getElementById('medium').checked) {
    return "Medium"
  } else if (document.getElementById('large').checked) {
    return "Large"
  } else {
    return alert("Please Select a Size!");
  }
}

function Meat() {
  if(document.getElementById('pepperoni').checked) {
    return ("Pepperoni");
  } else if(document.getElementById('sausage').checked){
    return ("Sausage");
  } else if(document.getElementById('bacon').checked) {
    return ("Bacon");
  } else if(document.getElementById('chicken').checked){
    return ("Chicken");
  } 
  else {
    return "none"
  }
}

function Veggies() {
  if(document.getElementById('mushrooms').checked) {
    return ("Mushrooms");
  } else if(document.getElementById('onion').checked){
    return("Onion");
  } else if(document.getElementById('olives').checked){
    return("Olives");
  } else if(document.getElementById('cashews').checked){
    return("Cashews");
  } 
  else {
    return "none"
  }
}

//Business Logic for Price-------------------------------------



 




//User Interface Logic---------------------------------------
$(document).ready(function(){
  $("button#submit-order").click(function(event){
    event.preventDefault();
    $("#size").html(Size);
    $("#meats").html(Meat);
    $("#veggies").html(Veggies);
    $(".order-summary").show();
  })
})






//Business Logic for Contact---------------------------------

// function Contact(firstName, lastName, phoneNumber, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
//   this.address = address;
// };

// OrderBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };

// OrderBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }



























