let products = {
  crazy: {
    name: "Crazy",
    price: 31000,
    img: "images/products/burger-1.png",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  light: {
    name: "Light",
    price: 26000,
    img: "images/products/burger-2.png",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  cheeseburger: {
    name: "CheeseBurger",
    price: 29000,
    img: "images/products/burger-3.png",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
  dburger: {
    name: "dBurger",
    price: 24000,
    img: "images/products/burger-4.png",
    amount: 0,
    get totalSum() {
      return this.price * this.amount;
    },
  },
};

let burgersBtn = document.querySelectorAll(".wrapper__list-btn"),
  cartBtn = document.querySelector(".wrapper__navbar-btn"),
  cartAmount = document.querySelector(".warapper__navbar-count"),
  cartList = document.querySelector(".wrapper__navbar-basket"),
  cartClose = document.querySelector(".wrapper__navbar-close"),
  cartListItem = document.querySelector(".wrapper__navbar-checklist");
cartTotalPrice = document.querySelector(".wrapper__navbar-totalprice");

burgersBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    addCount(btn);
  });
});

cartBtn.addEventListener("click", () => cartList.classList.add("active"));
cartClose.addEventListener("click", () => cartList.classList.remove("active"));

function addCount(btn) {
  // closest() - позволяет нам подключиться к указаному ближайшему родителю
  // getAttribute() - позволяет получить данные указаного атрибута
  let parent = btn.closest(".wrapper__list-card");
  let id = parent.getAttribute("id");
  products[id].amount++;
  basket();
}

function basket() {
  let korzina = [];
  for (let key in products) {
    let burger = products[key];
    let productBurger = document.querySelector(`#${key}`);
    let productCount = productBurger.querySelector(".wrapper__list-count");
    if (burger.amount > 0) {
      korzina.push(burger);
      productCount.classList.add("active");
      productCount.innerHTML = burger.amount;
    } else {
      productCount.classList.remove("active");
      productCount.innerHTML = "";
    }
  }
  let allAmount = getTotalAmount();
  if (allAmount > 0) {
    cartAmount.classList.add("active");
    cartAmount.innerHTML = allAmount;
  } else {
    cartAmount.classList.remove("active");
    cartAmount.innerHTML = "";
  }

  cartListItem.innerHTML = "";

  korzina.forEach((burger) => {
    cartListItem.innerHTML += createBurger(burger);
  });

  cartTotalPrice.innerHTML = getTotalSum();
}

function getTotalSum() {
  let sum = 0;
  for (let key in products) {
    sum += products[key].totalSum;
  }
  return sum;
}

function getTotalAmount() {
  let sum = 0;
  for (let key in products) {
    sum += products[key].amount;
  }
  return sum;
}

function createBurger(burger) {
  return `<div class="navbar__item" id="${burger.name.toLowerCase()}-burger">
    <div class="navbar__item-left">
        <img src="images/products/burger-1.png" alt="">
        <div class="navbar__item-info">
            <p>${burger.name}</p>
            <p>${burger.price} сум</p>
        </div>
    </div>
    <div class="navbar__item-right">
        <button class="navbar__item-btn minus">-</button>
        <span class="navbar__item-count">${burger.amount}</span>
        <button class="navbar__item-btn plus">+</button>
    </div>
  </div>`;
}

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("navbar__item-btn")) {
    let btn = event.target;
    const parent = btn.closest(".navbar__item");
    if (parent) {
      let id = parent.getAttribute("id").split("-")[0];
      if (btn.classList.contains("plus")) {
        products[id].amount++;
      } else if (btn.classList.contains("minus")) {
        products[id].amount--;
      }
      basket();
    }
  }
});

let h1 = document.querySelector("h1");
let nav = document.querySelector(".wrapper__nav")
h1.style.fontSize = '40px'

function innerH1() {
  if (h1.innerHTML < 100) {
    h1.innerHTML++;
  }
  setTimeout(() => innerH1(), 50);
}
innerH1();

let y = z = 0;
let x = 255;
function colorH1() {
  if (h1.innerHTML < 20) {
    y = y + 13;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML == 20) {
    y = 255;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML > 20 && h1.innerHTML < 40) {
    x = x - 13;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML == 40) {
    x = 0;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML > 40 && h1.innerHTML < 60) {
    z = z + 13;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML == 60) {
    z = 255;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML > 60 && h1.innerHTML < 80) {
    y = y - 13;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML == 80) {
    y = 0;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  } else if (h1.innerHTML > 80 && h1.innerHTML < 100) {
    x = x + 13;
    h1.style.color = `rgb(${x}, ${y}, ${z})`;
  }else if (h1.innerHTML == 100) {
    h1.innerHTML = '100 lvl'
    fontSize()
    nav.style.background = '#20B2AA'
    
    }
  setTimeout(() => colorH1(),);
}
colorH1()
let f = 0
function fontSize() {if (f < 50) {
  f += 3
  h1.style.fontSize = (50 + f) + 'px'
  console.log(h1.style.fontSize);
 }
  setTimeout(() => fontSize(),20);
}
  

