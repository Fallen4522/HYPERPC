// Корзина
const cartCount = document.getElementById('cart-count');
const cartList = document.getElementById('cart-list');
const clearCartBtn = document.getElementById('clear-cart');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Товары в корзине
let cartItems = [];

// Добавить товар в корзину
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        cartItems.push(product);

        updateCart();
        alert(`${product} добавлен в корзину!`);
    });
});

// Обновить отображение корзины
function updateCart() {
    cartCount.textContent = cartItems.length;

    cartList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        cartList.appendChild(li);
    });

    if (cartItems.length === 0) {
        cartList.innerHTML = '<li>Корзина пуста</li>';
    }
}

// Очистить корзину
clearCartBtn.addEventListener('click', () => {
    cartItems = [];
    updateCart();
    alert('Корзина очищена!');
});
