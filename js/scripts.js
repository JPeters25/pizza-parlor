//Business Logic for Pizza-----------------------------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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

function Meat()  {

  if(document.getElementById('pepperoni',).checked) {
    return ("Pepperoni");
  } else if(document.getElementById('sausage').checked){
    return ("Sausage");
  } else if(document.getElementById('bacon').checked) {
    return ("Bacon");
  } else if(document.getElementById('chicken').checked){
    return ("Chicken");
  } else if(document.getElementById('noMeat').checked){
    return ("No Protein Selected");
  }
    else {
    return("select a meat or none");
  }
}

function Veggies() {
  if(document.getElementById('mushrooms').checked) {
    return ("Mushrooms");
  } else if(document.getElementById('onion').checked) {
    return("Onion");
  } else if(document.getElementById('olives').checked) {
    return("Olives");
  } else if(document.getElementById('cashews').checked) {
    return("Cashews");
  } else if(document.getElementById('no-Veg').checked) {
    return ("No Veggies Selected");
  }
  else {
    return ("select a veggie or none");
  }
}
function Sides() {
  if(document.getElementById('wings').checked) {
    return ("6 pc BBQ Wing");
  } else if(document.getElementById('salad').checked){
    return ("House Salad");
  } else if(document.getElementById('breadsticks').checked) {
    return ("6 pc Breadsticks");
  } else if(document.getElementById('no-side').checked){
    return ("No Side");
  } 
}
//Business Logic for Price-------------------------------------

function sizePrice() {
  let smallPrice = 5;
  let medPrice = 7
  let lrgPrice = 10

if(document.getElementById('small').checked) {
  return smallPrice
  } else if (document.getElementById('medium').checked) {
    return medPrice
  } else if (document.getElementById('large').checked) {
    return lrgPrice
  } 
}

function meatPrice()  {
  let pepPrice = 1.99;
  let sasPrice = 1.99;
  let baconPrice = 2.99;
  let chickenPrice =3.99;
  let noProtein = 0;
  
  if(document.getElementById('pepperoni',).checked) {
    return pepPrice;
  } else if(document.getElementById('sausage').checked){
    return sasPrice;
  } else if(document.getElementById('bacon').checked) {
    return baconPrice;
  } else if(document.getElementById('chicken').checked){
    return chickenPrice;
  } else if(document.getElementById('noMeat').checked){
    return noProtein;
  }
}

function vegPrice()  {
  let mushPrice = .50;
  let onionPrice = .50;
  let olivePrice = 1.99;
  let cashewPrice = 3.99;
  let noVeggies = 0;

  if(document.getElementById('mushrooms',).checked) {
    return mushPrice;
  } else if(document.getElementById('onion').checked){
      return onionPrice;
  } else if(document.getElementById('olives').checked) {
    return olivePrice;
  } else if(document.getElementById('cashews').checked){
    return cashewPrice;
  } else if(document.getElementById('no-Veg').checked){
    return noVeggies;
  }
}
function sidePrice()  {
  let wingPrice = 4.99;
  let saladPrice = 2.99;
  let breadPrice = 1.99;
  let noSide = 0;

  if(document.getElementById('wings',).checked) {
    return wingPrice;
  } if(document.getElementById('salad').checked){
    return saladPrice;
  } if(document.getElementById('breadsticks').checked) {
    return breadPrice;
  } if(document.getElementById('no-side').checked){
    return noSide;
  } 
}
  
//User Interface Logic---------------------------------------
$(document).ready(function(){
  $("button#submit-order").click(function(event){
    event.preventDefault();
    let totalPizza = Math.abs(sizePrice() + meatPrice() + vegPrice() + sidePrice());
    $("#size").html(Size);
    $("#meats").html(Meat);
    $("#veggies").html(Veggies);
    $("#selected-side").html(Sides)
    $("#total-price").html(totalPizza)
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



























