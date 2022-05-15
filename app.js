const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const backgroundSidebar = document.querySelector('.sidebar-background');
const close = document.querySelector('.close');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const textValue = document.querySelector('.text-value');
const addCart = document.querySelector('.add-to-cart');
const bottomCart = document.querySelector('.bottom-cart');
const cart = document.querySelector('.cart');
const checkOutDiv = document.querySelector('.checkout-div-2');
const checkout = document.querySelector('.checkout');
const checkoutCard = document.querySelector('.checkout-card');
const checkoutBtn = document.querySelector('.bottom-cart');
const checkoutText_1 = document.querySelector('.checkout-text-Paragraph');
const checkoutText_2 = document.querySelector('.checkout-text-Paragraph-2');
const deleteBtn = document.querySelector('.delete');
const empty = document.querySelector('.text-container');



// sidebar
menu.addEventListener("click", function() {
  sidebar.classList.toggle("show-sidebar");
  backgroundSidebar.classList.toggle("show-sidebar-background");
});

close.addEventListener("click", function() {
  sidebar.classList.remove("show-sidebar");
  backgroundSidebar.classList.remove("show-sidebar-background");
});

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});


// product image carousel next and previous button
let counter = 0;

nextBtn.forEach(function(next) {
  next.addEventListener("click", function() {
    counter++;
    carousel();
  });
});

prevBtn.forEach(function(previous) {
  previous.addEventListener("click", function() {
    counter--;
    carousel();
  });

});

// product image carousel
function carousel() {

  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function(slide) {


    slide.style.transform = `translateX(-${counter * 100}%)`

  })

}




// increment and decrement button
var data = 0;


plus.addEventListener("click", function() {

  data = data + 1;

  textValue.textContent = data

  // if (data + 1) {
  //   checkout.style.display = "none";
  //
  //   addCart.style.display = "none";
  //
  // } else {
  //   checkOutDiv.style.display = "block";
  //   addCart.style.display = "block";
  // }


});



minus.addEventListener("click", function() {

  data = data - 1;

  textValue.textContent = data;

  if (data < 0) {

    textValue.textContent = 0;

  }


  // if (data + 1) {
  //   checkout.style.display = "none";
  //   addCart.style.display = "none";
  //
  // } else {
  //   checkout.style.display = "block";
  //   addCart.style.display = "block";
  // }



});




// working with add to cart
bottomCart.addEventListener("click", function() {

  addCart.textContent = data


  empty.style.display = "none"

  if (data < 1  ) {
    addCart.style.display = "none";
    checkOutDiv.style.display = "none"

  } else {
    addCart.style.display = "block";
checkOutDiv.style.display =  "contents";
  }


  checkoutText_1.textContent = "$125.00" +" x " + data
  checkoutText_2.textContent = "$" + 125 * data + ".00"

  if (data === 1) {
    checkoutText_1.textContent = "$125.00 "
    checkoutText_2.textContent = ""
  } else {
    checkoutText_1.textContent =  "$125.00" +" x " + data
    checkoutText_2.textContent =  "$" + 125 * data + ".00"
  }

});

// working with cart checkout
cart.addEventListener("click", function() {


  checkout.classList.toggle("show-checkout");


  if (data === 0) {
    // checkout.style.display = "block"
    checkOutDiv.style.display = "none"
    empty.style.display = "block";
  }
  // if(data) {
  //   // checkout.style.display = "none";
  //   checkOutDiv.style.display = "contents";
  //   empty.style.display = "none";
  // }
// if(e.cart){
//   checkOutDiv.style.display = "none"
//   empty.style.display = "block";
// }
// if (data) {
//   checkOutDiv.style.display = "contents"
// }else{
//     checkOutDiv.style.display = "none"
// }

  // if(checkOutDiv.style.display = "none"){
  //   empty.classList.add("show-empty-text");
  // }



});


// working with delete button

  deleteBtn.addEventListener("click", function() {

// checkout.clicked(checkOutDiv.classList.add("remove-checkout-div"))

checkOutDiv.style.display = "none";
empty.style.display = "block";


    if (data || data < 0) {
      addCart.style.display = "none"

    } else {
      addCart.style.display = "block"
      // checkOutDiv.classList.add("remove-checkout-div");
    }

    if(cart.on){
      checkOutDiv.style.display = "none"
      empty.style.display = "block";
    }
    // if (data) {
    //   checkOutDiv.style.display = "contents";
    //   empty.style.display = "none";
    // }else{
    //   checkOutDiv.style.display = "none";
    //   empty.style.display = "block";
    // }

    // if (data|| data <= 0 ) {
    //   checkout.style.display = "block"
    //   checkOutDiv.style.display = "none"
    //   empty.classList.add("show-empty-text");
    // } else {
    //   checkout.style.display = "block";
    //   checkOutDiv.style.display = "contents";
    //   empty.classList.remove("show-empty-text");
    // }


  })




// deleteBtn.forEach(,function(e) {
//
//     checkoutCard.classList.add("remove-checkout-card");
//   });
