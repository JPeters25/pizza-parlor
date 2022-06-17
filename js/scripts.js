//Business Logic for Order-----------------------------

function Order() {
  this.Pizza = {};
  this.Contact = {};
  this.orderId = 0;
}

Order.prototype.newOrder = function(Pizza) {
  Pizza.id = this.orderId();
  this.pizzas[pizza.id] = Pizza;
}

Order.prototype.orderId = function() {
    this.orderId += 1;
    return this.orderId;
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

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
};


//User Interface Logic---------------------------------------



