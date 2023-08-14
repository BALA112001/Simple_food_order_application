const menuList = document.getElementById('menu-list');
const cartList = document.getElementById('cart-list');
const totalElement = document.getElementById('total');

let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    cartList.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.item}</span>
            <span>Rs.${item.price}</span>
        `;
        cartList.appendChild(li);
    });

    totalElement.textContent = total;
}

function checkout() {
    alert(`Total Amount: Rs.${total}\nThank you for your order!`);
    clearCart();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}
