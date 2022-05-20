const menu = document.querySelector('.menu');

const sidebar = document.querySelector('.sidebar');
const backgroundSidebar = document.querySelector('.sidebar-background');
const backgroundModal = document.querySelector('.modal-background');
const close = document.querySelector('.close');
const close_2 = document.querySelector('.fa-xmark');

const slides = document.querySelectorAll('.slide');
const modalSlides = document.querySelectorAll('.modal-slide');

const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');

const desktopPrev = document.querySelectorAll('.previous-desktop');
const desktopNext = document.querySelectorAll('.next-desktop');

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
const modal = document.querySelector('.modal-overlay');

const productImg = document.querySelectorAll('.product-img');

const productThumbnail = document.querySelectorAll('.product-thumbnail');

const productThumbnail1 = document.querySelector('.product-thumbnail-1');
const productThumbnail2 = document.querySelector('.product-thumbnail-2');
const productThumbnail3 = document.querySelector('.product-thumbnail-3');
const productThumbnail4 = document.querySelector('.product-thumbnail-4');

const productThumbnailmodal1 = document.querySelector('.product-thumbnail-modal-1');
const productThumbnailmodal2 = document.querySelector('.product-thumbnail-modal-2');
const productThumbnailmodal3 = document.querySelector('.product-thumbnail-modal-3');
const productThumbnailmodal4 = document.querySelector('.product-thumbnail-modal-4');


const deleteBtn = document.querySelector('.delete');
const empty = document.querySelector('.text-container');

// const value = addCart.value;
// const id = new Date().getTime().toString();

// sidebar
menu.addEventListener("click", function () {
   sidebar.classList.toggle("show-sidebar");
   backgroundSidebar.classList.toggle("show-sidebar-background");
});

close.addEventListener("click", function () {
   sidebar.classList.remove("show-sidebar");
   backgroundSidebar.classList.remove("show-sidebar-background");
});

slides.forEach(function (slide, index) {
   slide.style.left = `${index * 100}%`;
});

modalSlides.forEach(function (slide, index) {
   slide.style.left = `${index * 100}%`;
});


productThumbnail1.addEventListener("click", function () {
   counter = 0;
   carousel()
});


productThumbnail2.addEventListener("click", function () {
   counter = 1;
   carousel()
});


productThumbnail3.addEventListener("click", function () {
   counter = 2;
   carousel()
});


productThumbnail4.addEventListener("click", function () {
   counter = 3;
   carousel()
});


productThumbnailmodal1.addEventListener("click", function () {
   counter = 0;
   carouselDesktop()
});


productThumbnailmodal2.addEventListener("click", function () {
   counter = 1;
   carouselDesktop()
});


productThumbnailmodal3.addEventListener("click", function () {
   counter = 2;
   carouselDesktop()
});


productThumbnailmodal4.addEventListener("click", function () {
   counter = 3;
   carouselDesktop()
});


// product image carousel next and previous button


let counter = 0;
nextBtn.forEach(function (next) {
   next.addEventListener("click", function () {
      counter++;
      carousel();
   });
});


prevBtn.forEach(function (previous) {
   previous.addEventListener("click", function () {
      counter--;
      carousel();
   });
});


// product image carousel desktop next and previous button

desktopNext.forEach(function (nextDesktop) {
   nextDesktop.addEventListener("click", function () {
      counter++;
      carouselDesktop()
   });
});


desktopPrev.forEach(function (previousDesktop) {
   previousDesktop.addEventListener("click", function () {
      counter--;
      carouselDesktop()
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
   slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`
   });
}


// product image Desktop carousel
function carouselDesktop() {
   if (counter === modalSlides.length) {
      counter = 0;
   }
   if (counter < 0) {
      counter = modalSlides.length - 1;
   }
   modalSlides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`
   });
}


// increment and decrement button
var data = 0;
plus.addEventListener("click", function () {
   data = data + 1;
   textValue.textContent = data

});


minus.addEventListener("click", function () {
   data = data - 1;
   textValue.textContent = data;
   if (data < 0) {
      textValue.textContent = 0;
   }

});


// working with add to cart
bottomCart.addEventListener("click", function () {
   addCart.textContent = data;
   empty.style.display = "none";

   if (data < 1) {
      addCart.style.display = "none";
      checkOutDiv.style.display = "none"

   } else {
      addCart.style.display = "block";
      checkOutDiv.style.display = "contents";
   }

   checkoutText_1.textContent = "$125.00" + " x " + data
   checkoutText_2.textContent = "$" + 125 * data + ".00"

   if (data === 1) {
      checkoutText_1.textContent = "$125.00 "
      checkoutText_2.textContent = ""
   } else {
      checkoutText_1.textContent = "$125.00" + " x " + data
      checkoutText_2.textContent = "$" + 125 * data + ".00"
   }

});

// working with cart checkout
cart.addEventListener("click", function () {
   checkout.classList.toggle("show-checkout");

   if (data === 0) {
      // checkout.style.display = "block"
      checkOutDiv.style.display = "none"
      empty.style.display = "block";
   }
});


// working with delete button
deleteBtn.addEventListener("click", function () {
   checkOutDiv.style.display = "none";
   empty.style.display = "block";


   if (data || data < 0) {
      addCart.style.display = "none"

   } else {
      addCart.style.display = "block"
   }

   if (cart.on) {
      checkOutDiv.style.display = "none"
      empty.style.display = "block";
   }

});


// working with modal
productImg.forEach(function (e) {
   e.addEventListener("click", function () {
      modal.classList.add("open-modal");
      backgroundModal.classList.add("show-modal-background");
   })
});


close_2.addEventListener("click", function () {
   modal.classList.remove("open-modal");
   backgroundModal.classList.remove("show-modal-background");
});


// function addtoLocalStorage(id, value) {
//    const data = {
//       id: id,
//       value: value
//    };
//    let items = getLocalStorage()
//
//    console.log(items);
//
//    items.push(data);
//    localStorage.setItem("list", JSON.stringify(items))
// }
//
//
// function getLocalStorage() {
//    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
//
// }
// window.addEventListener('DOMContentLoaded', (event) => {
//    console.log(data);
//    localStorage.setItem(addCart, data);
// });
