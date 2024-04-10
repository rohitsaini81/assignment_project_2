const cart = document.getElementById('cart-items');
const total = document.getElementById('total_items');
const price = document.getElementById('price_total');
const clear = document.getElementById('clear-cart');
clear.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/clearcart', {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
    cart.innerHTML = '';
    total.innerHTML = 0;
    price.innerHTML = '0$';
});
const main = async () => {
    const response = await fetch('http://localhost:3000/cart');
    const data = await response.json();
    console.log(data);
    total.innerHTML = data.length;
    let total_prices = 0;
    
  await  data.forEach(value => {
        total_prices += value.price
    });
    price.innerHTML =total_prices+' $';
    data.forEach(item => {
        const div = document.createElement('div');
        console.log(item);
        div.classList.add('items');
        // <img src="${item.img}" alt="Item Image">
        div.innerHTML = `
        <h2>${item.name}</h2>
            <p>${item.price}$</p>
            <button onclick="removeItem(${item.id})">Remove</button>
        `;
        cart.appendChild(div);
    });
    removeItem = async (id) => {
        const response = await fetch(`http://localhost:3000/deletefromcart/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        cart.innerHTML = '';
        main();
    }
}
main()
// document.addEventListener('DOMContentLoaded', main);