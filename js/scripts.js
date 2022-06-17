//Business Logic for Contact-----------------------------

function OrderBook() {
  this.Pizza = {};
  this.contacts = {};
  this.orderId = 0;
}


function Pizza(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
}

Pizza.prototype.pizzaChoice = function () {
  return this.topping1 + this.secondtopping + this.size;
}






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

//User Interface Logic---------------------------------------



























// let userOrder = new OrderBook();



// function confirmContact() {
//   const contact = userOrder.findContact(contactId);
//   $("#contact-confrim").show();
//   $(".first-name").html(contact.firstName);
//   $(".last-name").html(contact.lastName);
//   $(".phone-number").html(contact.phoneNumber);
//   $(".address").html(contact.Address);
// }

// $(document).ready(function() {
//   $("form#UserInfo").submit(function(event){
//   event.preventDefault();
//   let inputtedFirstName = $("input#first-name").val();
//   let inputtedLastName = $("input#last-name").val();
//   let inputtedPhoneNumber = $("input#phone-number").val();
//   let inputtedAddress= $("input#address").val();

//   $("input#first-name").val("");
//   $("input#last-name").val("");
//   $("input#phone-number").val("");
//   $("input#address").val("")

//   let newOrder = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedAddress)
//   OrderBook.addContact(newContact);
//   })
// })



