//Business Logic for Order-----------------------------

function Order() {
  this.Pizza = {};
  this.Contact = {};
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

//Business Logic for Order ---------------------------------

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
};



